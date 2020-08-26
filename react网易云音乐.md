## 1.项目搭建

### 新建项目

`create-react-app  cloud-music`

### 目录结构

- node_modules
- public
  - favicon.ico
  - index.html
- src
  - assets	    静态资源
    - css
    - font
    - images
  - common     公共数据
  - components     共享组件
  - pages          页面组件
  - router          路由配置
  - services        网络请求
  - store             状态配置
  - utils                封装工具
  - App.js              项目主要视图
  - index.js           项目入口文件
- .gitignore
- package.json
- README.md
- yarn.lock

### css重置

使用`normalize.css`或者`reset.css`，让页面在不同浏览器呈现风格一致。

安装 `yarn add normalize.css`

**注意**：在 .css 文件中引入某个模块中的css文件需要使用 `@import "~模块/文件名"`

此外，可以在重置文件中添加自定义的样式重置代码，如版心居中样式、文本超出省略样式等。

### 路径别名配置

方法1. 安装`craco `,craco可以在不暴露项目配置文件的情况下，修改项目配置。

`yarn add @craco/craco `

- 安装后需要修改项目运行脚本

~~~javascript
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
~~~

- 需要修改配置，在根目录下新建`craco.config.js`文件

~~~javascript
const path = require("path")
const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components")
    }
  }
}
~~~

## 2.项目开发

### API接口文档

http://123.207.32.32:9001/

### 路由配置

安装react路由

 `yarn add react-router-dom `

路由集中管理工具

 `yarn add react-router-config`

然后配置路由和页面的映射关系即可。

在页面中使用` renderRoutes(routes)`**占位**即可将页面渲染出来。

**注意：**renderRoutes必须使用

`<Router></Router>`

或者`<BrowserRouter></BrowserRouter>`

或者`<HashRouter></HashRouter>`包裹。



**重定向补充知识**：

路由配置中，可以使用render返回重定向组件

~~~javascript
	{
		path: "/",
		exact: true,
		component: Discover,
	},
~~~

~~~javascript
	{
		path:'/',
		exact:true,
		render:() => {
			return <Redirect to="/discover"/>
		}
	},
	{
		path:'/discover',
		component:Discover
	},
~~~



### 引用UI库

安装 `styled-components`

安装 `antd`

安装 `@ant-design/icons`



### Axios

安装 `yarn add axios`

二次封装



### Redux

安装 `yarn add redux react-redux`

1. redux

- combineReducers（多个reducer对象）  合并多个reducer
- createStore（reducer处理函数，增强中间件）  创建store对象
- applyMiddleware（中间件对象）   使用redux中间件
-  compose   浏览器redux调试工具

2. react-redux

- Provider  store对象共享
- connect  映射state和dispatch

使用时需要用 `<Provider store={store}></Provider>` 包裹App,store才能在整个页面共享。

3. redux-thunk

- thunk    redux中间件，可以dispatch一个函数



**redux中的hooks**

- useSelector

  作用：类似于`mapStateToProps`，可以获取state

  **缺点**：不必要的重新渲染导致性能浪费。底层不是进行mapStateToProps时的浅层比较，而是使用 `===` 对state进行比较，由于每次调用产生新对象的地址不相等，所以即使页面没有依赖state，也会重新渲染组件。

  **解决**：react-redux提供的`shallowEqual`浅层比较函数。

  将shallowEqual函数传入useSelector的第二个参数。

- useDispatch

  作用：类似于`mapDispatchToProps`，可以dispatch函数

### ImmutableJS

数据不可变性，每次修改对象都返回一个新对象。

安装 `yarn add immutable`

使用`Map`包裹不可变的state

`set`设置state

`get`读取state

### Redux-immutable

多个reducer合并后返回immutable对象

安装 `yarn add redux-immutable`

redux和redux-immutable中都有**combineReducer**函数。后者返回immutable对象。



使用后需要通过`get`读取reducer对象

~~~javascript
const { topBanners } = useSelector(
		(state) => ({
			topBanners: state.get("recommend").get("topBanners"),
		}),
		shallowEqual
	);
~~~

等价写法

~~~javascript
state.getIn(["recommend","topBanners"])
~~~

### css精灵图

项目中大量使用css精灵图技术，也叫雪碧图技术，css sprite。

优点：

1. 减少服务器请求数量，缓解服务器压力
2. 方便切换网页风格

使用：

~~~
background: url(../img/sprite_01.png) no-repeat 0 9999px;
background-position: x y;
~~~



### 图片引用优化

**注意：**

styled-components中使用图片资源

~~~javascript
background-image: url(${require("@/assets/img/recommend-top-bg.png")});
~~~



1. 开发中最好给定图片宽度和高度，这样在图片加载过程中可以占位。
2. 图片按需要的尺寸引用。在获取图片url时添加参数`?param=100×100`，加载速度提升。

### 组件尺寸定制

在使用组件时传递参数，在css中获取参数作为样式的值。

~~~javascript
<MyComponent width={120}/>

// styledComponent
    width:${props => props.width + "px"};
~~~

### 歌曲播放

- 难点：

1. 进度条和歌曲时间

2. 歌曲播放列表
3. 歌曲播放模式切换
4. 切换上一首/下一首歌曲



- audio音频播放Api基础知识

使用html5新增标签  `<audio/>`  

src属性设置音频源

通过audio的`audioRef.current.play()`播放

通过audio的`audioRef.current.pause()`暂停

通过audio的`audioRef.current.currentTime`获取当前播放时间

`onTimeUpdate(e)`设置时间变化的回调函数,通过传递的事件获取`e.target.currentTime`当前播放的时间

`onEnded(e)`方法设置歌曲播放结束的回调



- 知识点补充

useCallback的使用时机：当向**自定义组件**中传入回调函数时。

当回调函数触发，自定义组件（包括第三方库的自定义组件）会发生重绘，使用useCallback包裹，可以提高性能。



**谷歌浏览器目前禁止了audio自动播放**，第一次进入页面执行useEffect如果播放歌曲，会报错。audio的play方法返回一个Promise对象，如果播放成功setIsplaying(true)，如果报错catch并setIsplaying(false)。



- 存在问题

当播放列表只有一首歌曲，切换歌曲没有反应。实际上currentSong和currentIndex都变化了，知识变化后和变化前一样。

因为useEffect依赖的currentSong没有发生变化，所以不会重新执行render函数，歌曲也就不会切换。





歌曲播放

~~~javascript
const [isPlaying, setisPlaying] = useState(false); // 当前播放状态
const [currentTime, setcurrentTime] = useState(0); // 当前歌曲时间
const [progress, setprogress] = useState(0); // 当前进度
const [isChanging, setisChanging] = useState(false); // 是否在拖动进度条
/**
	 * 播放歌曲，并修改播放状态
	 */
	const playMusic = useCallback(() => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setisPlaying(!isPlaying);
	}, [isPlaying]);

	// 监听audio时间变化，修改进度条和时间。当进度条在拖动时，不发生改变。
	const timeUpdate = (e) => {
		if (!isChanging) {
			setcurrentTime(e.target.currentTime * 1000);
			setprogress((currentTime / duration) * 100);
		}
	};

	// 拖动进度条，进度条状态改为 正在拖动 ，改变播放时间和进度条。
	const sliderChange = useCallback(
		(value) => {
			setisChanging(true);
			setcurrentTime((value / 100) * duration);
			setprogress(value);
		},
		[duration]
	);

	// 松开进度条，改变音频的当前时间、当前时间、进度条，进度条状态改为 停止拖动
	// 并当歌曲没有播放，开始播放歌曲
	const sliderAfterChange = useCallback(
		(value) => {
			const currentTime = ((value / 100) * duration) / 1000;
			audioRef.current.currentTime = currentTime;
			setcurrentTime(currentTime * 1000);
			setprogress(value);
			setisChanging(false);
			if (!isPlaying) {
				playMusic();
			}
		},
		[duration, isPlaying, playMusic]
	);
~~~

歌曲切换和获取入列

~~~javascript
// 切换上一曲/下一曲
export const changeIndexAndSongAction = (num) => {
	return (dispatch, getState) => {
		const playMode = getState().getIn(["player", "playMode"]);
		let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
		const playList = getState().getIn(["player", "playList"]);
		switch (playMode) {
			/**
			 * 当播放模式为 0 和 2 时，切换歌曲都是加 num
			 * 当随机播放，生成随机数
			 */
			case 1:
				let randomNum = Math.floor(Math.random() * playList.length);
				while (randomNum === currentSongIndex) {
					randomNum = Math.floor(Math.random() * playList.length);
				}
				currentSongIndex = randomNum;
				break;
			default:
				currentSongIndex += num;
				// 处理第一首和最后一首
				if (currentSongIndex >= playList.length) currentSongIndex = 0;
				if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
		}
		const song = playList[currentSongIndex];
		dispatch(changeCurrentSongAction(song));
		dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(getLyric(song.id))
	};
};

// 获取歌曲信息,并加入歌曲播放列表
export const getSongDetailAction = (ids) => {
	return (dispatch, getState) => {
		// 1.根据id查找playList中是否已经有这首歌
		const playList = getState().getIn(["player", "playList"]);
		const songIndex = playList.findIndex((item) => item.id === ids);
		let song = null
		// 2.1 playList中已经有这首歌曲，修改当前歌曲和下标
		if (songIndex !== -1) {
			song = playList[songIndex];
			dispatch(changeCurrentSongAction(song));
			dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(getLyricActon(song.id))
		} else {
			// 2.2 playList中没有这首歌曲，请求歌曲数据添加到playList
			getSongDetail(ids).then((res) => {
				// 确保song有数据
				song = res.songs && res.songs[0];
				if (!song) return;
				const newList = [...playList];
				newList.push(song);
				dispatch(changePlayListAction(newList));
				dispatch(changeCurrentSongIndexAction(newList.length - 1));
				dispatch(changeCurrentSongAction(song));
                dispatch(getlyricAction(song.id))
			});
		}
	};
};

~~~



### 歌词解析展示

- **正则对象返回的数组格式：**

  

  0: "[00:00.000]"    				匹配结果
  1: "00"									匹配结果的第一部分
  2: "00"									第二部分
  3: "000"								  第三部分
  groups: undefined              命名捕获分组
  index: 0								  匹配文本的第一个字符的位置
  input: "[00:00.000] 作曲 : 许嵩"       被检测对象

  

- 歌词字符串格式

  

  [00:00.000] 作曲 : 许嵩
  [00:01.000] 作词 : 许嵩
  [00:22.240]天空好想下雨
  [00:24.380]我好想住你隔壁
  ...
   歌词中间和最后面可能有**空白行**，也有可能出现**不规则的歌词**

~~~javascript
const RegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export default function parseLyric(lyricString) {
	let lyric = [];
	// 歌词按行分割
	const lyricLines = lyricString.split("\n");
	// 遍历所有行，正则匹配出歌词时间和歌词内容
	for (let line of lyricLines) {
		// 如果不为空行
		if (line) {
			const result = RegExp.exec(line);
			// 歌词字符串内容可能不匹配，跳过
			if (!result) continue;
			const minute = result[1] * 60 * 1000;
			const second = result[2] * 1000;
			// 毫秒长度2-3位
			const milsecond = result[2].length === 3 ? result[3] * 1 : result[3] * 10;
			const time = minute + second + milsecond;
			// 将歌词字符串的 [时间] 剔除，就是歌词内容
			const content = line.replace(RegExp, "").trim();
			const lyricObj = { time, content };
			lyric.push(lyricObj);
		}
	}
	return lyric;
}
~~~

- 动态展示歌词

当audio触发timeUpdata函数，遍历歌词数组，并且用audio的currentTime和歌词数组的time比较，找到第一个歌词数组中time比audio的currentTime大的下标i，歌词数组[i-1]就是当前展示的歌词。

~~~javascript
		let i = 0;
		for (; i < lyric.length; i++) {
			if (lyric[i].time > currentTime * 1000) {
				break;
			}
		}
		const index = i - 1;
		// 当变化时才修改index
		if (index !== currentLyricIndex) {
			dispatch(changeCurrentLyricIndexAction(index));
			let content = lyric[index] && lyric[index].content;
			content = content ? content : "...";
            // atd 消息组件用来展示歌词
			message.open({
				content: content,
				key: "lyric",
				duration: 0,
				className: "lyric-message",
			});
		}
	};
~~~



### 项目打包优化上线

#### **手动部署**

1. **首屏加载优化**

   对打包后的 main... js文件进行拆解成多个小文件

   - **路由懒加载**

     使用react提供的懒加载函数`lazy`

     例如：

     ~~~javascript
     const cpn  = React.lazy(() => import("../cpn"))
     ~~~

     使用懒加载后需要用`suspense`包裹路由占位符

     fallback是加载过程慢的应急显示内容

     ~~~javascript
     <Suspense fallback={<div>page loading...</div>}>
     	{renderRoutes(routes)}    
     </Susepende>
     ~~~

     

2. **部署服务器**

   上线后开发环境会变成生产环境，需要配置生产环境。

   - 搭建一台服务器，安装linux系统

   - 服务器上安装Nginx反向代理服务

   - 将打包后的build文件夹通过`win scp(windows)`、`file zilla(mac)`等软件上传远程服务器

   - ssh连接服务器

   - 配置Nigix

     

#### 自动部署

jenkins