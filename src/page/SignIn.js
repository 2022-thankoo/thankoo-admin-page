import {DataInput, SubmitButton} from "../component/commonStyle/DataInput";
import {SignInBoxWrapper} from "./signIn/SIgnInStyle";
import {useFormik} from "formik";
import {api} from "../util/axiosIntance";
import {useRecoilState} from "recoil";
import administratorAccount from "../globalState/administratorAccount";
import {saveAccessToken, saveAdministratorId} from "../data/sessionStorage";

function SignIn() {

  const [administrator, setAdministrator] = useRecoilState(administratorAccount);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: ({name, password}) => {
      api({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/sign-in`,
        data: {name, password}
      })
        .then(({data: {accessToken, adminId: id}}) => {
          setAdministrator({id, accessToken})
          saveAccessToken(accessToken);
          saveAdministratorId(id);
        })
        .catch(err => console.log(err));
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  }

  const handleSingIn = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  }

  return (
    <SignInBoxWrapper>
      <h2>Sign In</h2>
      <DataInput
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />

      <DataInput
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />

      <SubmitButton
        type="button"
        onClick={handleSingIn}
      >
        Sign In
      </SubmitButton>
    </SignInBoxWrapper>
  );
}

export default SignIn;