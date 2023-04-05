import { CheckIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  onNavBar: (toggleNavBar: boolean) => void;
}

function Signup({ onNavBar }: Props) {
  let navigate = useNavigate();
  const toast = useToast();
  return (
    <>
      <h1>Login</h1>
      <Button
        onClick={() => {
          onNavBar(true);
          navigate("/home");
          toast({
            title: "Signed in",
            description: "successfully logged in",
            duration: 3000,
            isClosable: true,
            status: "success",
            position: "bottom",
            icon: <CheckIcon />,
          });
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
