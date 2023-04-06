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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

interface Props {
  onNavBar: (toggleNavBar: boolean) => void;
}

function Signup({ onNavBar }: Props) {
  let navigate = useNavigate();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (Values) => {
      alert(JSON.stringify(Values, null, 2));
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
            <Box mt="10px" mb="5px">
              <Heading size="md">Sign In to your Account</Heading>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.password}
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
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
