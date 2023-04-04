import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  onNavBar: (toggleNavBar: boolean) => void;
}

function Signup({ onNavBar }: Props) {
  let navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <Button
        onClick={() => {
          onNavBar(true);
          navigate("/home");
        }}
      >
        {" "}
        Sign in{" "}
      </Button>
      <Button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </>
  );
}

export default Signup;
