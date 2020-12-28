import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

/**
 * App
 * @return {JSX.Element}
 */
function App() {
  return (
    <Router>
      <Switch>
        {/*
          ルーティングの設定
         - exactをつけることで、pathへの完全一致でないと指定のcomponentが表示されないようにしている。
         */}
        <Route path="/products" component={ProductPage} exact></Route>
        <Route path="/" component={HomePage} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
