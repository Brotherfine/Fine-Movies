import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Input,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation ADD_DATA(
    $name: String!
    $surname: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      surname: $surname
      email: $email
      password: $password
    ) {
      id
      name
      surname
      email
      password
    }
  }
`;

function Register() {
  const [createUser, { error, loading, data }] = useMutation(ADD_USER);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (e) => {
      createUser({
        variables: {
          name: e.name,
          surname: e.surname,
          email: e.email,
          password: e.password,
        },
      });
    },
  });
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="name"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="surname">Surname</FormLabel>
              <Input
                id="surname"
                name="surname"
                type="surname"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.surname}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <HStack>
              <Button type="submit" colorScheme="teal" width="full">
                Register
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default Register;
