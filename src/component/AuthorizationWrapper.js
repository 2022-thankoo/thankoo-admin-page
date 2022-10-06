import {useRecoilValue} from "recoil";
import {useNavigate} from "react-router-dom";

import administratorAccount from "../globalState/administratorAccount";
import {ClientPath} from "../data/path";
import {useEffect} from "react";

function AuthorizationWrapper({children}) {

  const administrator = useRecoilValue(administratorAccount);
  const navigate = useNavigate();

  useEffect(() => {
    if (!administrator.id) {
      navigate(ClientPath.root);
    }
  }, []);

  return (
    <>
      {administrator?.id && children}
    </>
  );
}

export default AuthorizationWrapper;