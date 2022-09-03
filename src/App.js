import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AsidePage from "./component/aside/Aside";
import GlobalStyle from "./component/style/GlobalStyle";
import category from "./data/AsideCategory";
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <AsidePage category={category}/>
    </>
  );
}

export default App;
