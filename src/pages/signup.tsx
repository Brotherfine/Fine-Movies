import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
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
        as="form"
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
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email Address"
              />
            </FormControl>
            <FormControl mt="5px">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
            </FormControl>
          </Box>

          <Box mt="10px" textAlign="right" mr="15px">
            <Link href="/register" color="teal.100">
              Signup
            </Link>
          </Box>
          <Box p="10px">
            <Button
              type="submit"
              variant="outline"
              width="full"
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
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
