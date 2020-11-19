//引入react jsx写法的必须
import React from "react";
//引入需要用到的页面组件
import Home from "../pages/home/home.js";
import Ranking from "../pages/ranking/ranking.js";
//引入一些模块,Redirect重定向,把 "/" 重定向到我们的主页
//react-router-dom(react-router4)中有一个 BrowserRouter 或是 HashRouter 任选其一就可以直接使用
//react-router：提供了router的核心api。如Router、Route、Switch等，但没有提供有关dom操作进行路由跳转的api；
//react-router-dom：提供了BrowserRouter、Route、Link等api，可以通过dom操作触发事件控制路由,react-router-dom里包含了react-router的依赖。
import { HashRouter  as Router, Route , Redirect} from "react-router-dom";

function router() {
  return (
    <Router >
      <Route path="/home" component={Home} />
      <Route path="/ranking" component={Ranking} />
      {/* <Route path="/" render={() => <Redirect to="/home" />}></Route> */}
    </Router>
  );
}

export default router;
