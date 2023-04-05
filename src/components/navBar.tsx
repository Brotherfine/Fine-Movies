import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Spacer,
  useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { UnlockIcon } from "@chakra-ui/icons";

interface Props {
  onNavBar: (toggleNavBar: boolean) => void;
}

function NavBar({ onNavBar }: Props) {
  let navigate = useNavigate();
  const toast = useToast();

  return (
    <Box as="nav" p="5px" bg="gray.700" mb="20px">
      <Flex alignItems="center">
        <HStack spacing="20px">
          <Link href="/home" color={"orange.300"}>
            {" "}
            Home{" "}
          </Link>
          <Link href="/favourite" color={"orange.300"}>
            {" "}
            Favourite{" "}
          </Link>
        </HStack>

        <Spacer />

        <Heading fontFamily="Magneto" as="h1" size="sm">
          Fine Movies
        </Heading>

        <Spacer />

        <Button
          bg="teal.400"
          size="xs"
          onClick={() => {
            onNavBar(false);
            navigate("/");
            toast({
              title: "Logged out",
              description: "successfully logged out",
              duration: 3000,
              isClosable: true,
              status: "success",
              position: "top",
              icon: <UnlockIcon />,
            });
          }}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default NavBar;
