import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function Register() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
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
          <Box mt="10px" mb="5px">
            <Heading size="md">Signup</Heading>
          </Box>
          <Box>
            <form>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  placeholder="Enter your Name"
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Surname</FormLabel>
                <Input
                  name="surname"
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                  type="text"
                  placeholder="Enter your surname"
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Email Address</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  placeholder="Enter your email Address"
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="password"
                  placeholder="Create password"
                />
              </FormControl>
            </form>
          </Box>
          <HStack
            mt="10px"
            mb="5px"
            p="10px"
            isInline
            justifyContent="space-between"
          >
            <Box>
              <Button
                type="submit"
                colorScheme="teal"
                onClick={() => {
                  navigate("/");
                }}
              >
                Register
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default Register;
