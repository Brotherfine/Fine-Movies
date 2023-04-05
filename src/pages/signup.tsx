import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  onNavBar: (toggleNavBar: boolean) => void;
}

function Signup({ onNavBar }: Props) {
  let navigate = useNavigate();
  const toast = useToast();
  return (
    <>
      <Flex
        align="center"
        justifyContent="center"
        minHeight="100vh"
        width="full"
      >
        <Box
          textAlign="center"
          maxWidth="450px"
          width="full"
          boxShadow="lg"
          borderWidth={1}
          borderRadius={4}
          px={4}
        >
          <Box mt="10px" mb="5px">
            <Heading size="md">Sign In to your Account</Heading>
          </Box>
          <Box>
            <form>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your Username" />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your Password" />
              </FormControl>
            </form>
          </Box>
          <HStack p="10px" isInline justifyContent="space-between">
            <Box>
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
            </Box>
            <Box>
              <Link href="/register" color="teal.300">
                Signup
              </Link>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
