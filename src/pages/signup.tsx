import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        {" "}
        Sign in{" "}
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </>
  );
}

export default Signup;
