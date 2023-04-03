import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Register</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Register
      </button>
    </>
  );
}

export default Register;
