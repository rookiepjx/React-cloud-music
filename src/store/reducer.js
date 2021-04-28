import { combineReducers } from "redux-immutable";

// 导入各个模块的reducer
import recommendReducer from "@/pages/discover/children/recommend/store";
import playerReducer from "@/pages/player/store"


// 将各个模块的reducer合并,导出store.state
// 使用redux-immutable的combineReducers
const cReducers = combineReducers({
	recommend:recommendReducer,
	player:playerReducer
});

export default cReducers;
