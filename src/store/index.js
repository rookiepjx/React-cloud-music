import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// 开启浏览器redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用thunk中间件
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
