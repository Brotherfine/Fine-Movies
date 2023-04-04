import {
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  useToast,
} from "@chakra-ui/react";

import { useNavigate, NavLink } from "react-router-dom";
import { UnlockIcon } from "@chakra-ui/icons";

function NavBar() {
  let navigate = useNavigate();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "successfully logged out",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcong />,
    });
  };
  return (
    <Flex as="nav" p="5px" alignItems="center">
      <Heading as="h1" size="md">
        Fine Movies
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <NavLink to="/home"> Home </NavLink>
        <NavLink to="/favourite"> Favourite </NavLink>
        <Button
          bg="teal.400"
          size="xs"
          onClick={() => {
            navigate("/");
            showToast;
          }}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default NavBar;
