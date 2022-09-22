import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";

import AsidePage from "./component/aside/Aside";
import {ClientPath} from "./data/path";
import Coupon from "./page/Coupon";
import CouponCreation from "./page/couponCreation/CouponCreation";
import category from "./data/asideCategory";
import GlobalStyle from "./component/commonStyle/GlobalStyle";
import Member from "./page/Member";
import Meeting from "./page/Meeting";
import Reservation from "./page/Reservation";
import './App.css';
import AdminAccount from "./page/adminAccount/AdminAccount";
import CouponSerial from "./page/CouponSerial";
import QrList from "./page/QrList";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <GlobalStyle/>
          <AsidePage category={category}/>
          <Routes>
            <Route path={ClientPath.member} element={<Member/>}/>
            <Route path={ClientPath.coupon} element={<Coupon/>}/>
            <Route path={ClientPath.meeting} element={<Meeting/>}/>
            <Route path={ClientPath.couponSerial} element={<CouponSerial/>}/>
            <Route path={ClientPath.reservation} element={<Reservation/>}/>
            <Route path={ClientPath.couponCreation} element={<CouponCreation/>}/>
            <Route path={ClientPath.adminAccount} element={<AdminAccount/>}/>
            <Route path={ClientPath.qrCode} element={<QrList/>}/>
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
