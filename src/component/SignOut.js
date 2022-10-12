import {useEffect} from "react";

import {deleteAll} from "../data/sessionStorage";
import {useNavigate} from "react-router-dom";
import {ClientPath} from "../data/path";

function SignOut() {

  const navigate = useNavigate();

  useEffect(() => {
    deleteAll();
    navigate(ClientPath.root);
  }, [navigate]);
}

export default SignOut;