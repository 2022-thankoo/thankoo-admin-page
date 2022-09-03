import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AsidePage from "./component/aside/Aside";
import {ClientPath} from "./data/Path";
import Coupon from "./page/Coupon";
import category from "./data/AsideCategory";
import GlobalStyle from "./component/commonStyle/GlobalStyle";
import Member from "./page/Member";
import Meeting from "./page/Meeting";
import Reservation from "./page/Reservation";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AsidePage category={category}/>
        <Routes>
          <Route path={ClientPath.member} element={<Member />}/>
          <Route path={ClientPath.coupon} element={<Coupon />}/>
          <Route path={ClientPath.meeting} element={<Meeting />}/>
          <Route path={ClientPath.reservation} element={<Reservation />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
