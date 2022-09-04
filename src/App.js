import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {RecoilRoot} from "recoil";

import AsidePage from "./component/aside/Aside";
import {ClientPath} from "./data/path";
import Coupon from "./page/Coupon";
import category from "./data/asideCategory";
import GlobalStyle from "./component/commonStyle/GlobalStyle";
import Member from "./page/Member";
import Meeting from "./page/Meeting";
import Reservation from "./page/Reservation";
import './App.css';

function App() {
  return (
    <>
      <RecoilRoot>
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
      </RecoilRoot>
    </>
  );
}

export default App;
