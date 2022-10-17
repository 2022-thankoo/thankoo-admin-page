import {BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";
import {RecoilRoot} from "recoil";
import './App.css';

import AsidePage from "./component/aside/Aside";
import {ClientPath} from "./data/path";
import Coupon from "./page/Coupon";
import CouponCreation from "./page/couponCreation/CouponCreation";
import category from "./data/asideCategory";
import GlobalStyle from "./component/commonStyle/GlobalStyle";
import Member from "./page/Member";
import Meeting from "./page/Meeting";
import Reservation from "./page/Reservation";
import AdminAccount from "./page/AdminAccount";
import CouponSerial from "./page/CouponSerial";
import QrList from "./page/qrList/QrList";
import SignIn from "./page/SignIn";
import SignOut from "./component/SignOut";
import OrganizationCreation from "./page/OrganizationCreation";
import Organization from "./page/Organization";
import {getItem} from "./data/sessionStorage";

const AuthOnly = () => {
  const token = getItem("administratorId");
  console.log(token);
  return token ? <Outlet/> : <Navigate to={ClientPath.root} replace />
}

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <GlobalStyle/>
          <AsidePage category={category}/>
          <Routes>
            <Route path={ClientPath.root} element={<SignIn />}/>
            <Route element={<AuthOnly/>}>
              <Route path={ClientPath.member} element={<Member/>}/>
              <Route path={ClientPath.coupon} element={<Coupon/>}/>
              <Route path={ClientPath.meeting} element={<Meeting/>}/>
              <Route path={ClientPath.couponSerial} element={<CouponSerial/>}/>
              <Route path={ClientPath.reservation} element={<Reservation/>}/>
              <Route path={ClientPath.organization} element={<Organization/>}/>

              <Route path={ClientPath.couponCreation} element={<CouponCreation/>}/>
              <Route path={ClientPath.organizationCreation} element={<OrganizationCreation />}/>
              <Route path={ClientPath.adminAccount} element={<AdminAccount/>}/>
              <Route path={ClientPath.qrCode} element={<QrList/>}/>
              <Route path={ClientPath.signOut} element={<SignOut/>}/>
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
