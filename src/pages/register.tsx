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

function Register() {
  let navigate = useNavigate();
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
                <Input type="name" placeholder="Enter your Name" />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Surname</FormLabel>
                <Input type="surname" placeholder="Enter your surname" />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Enter your Address" />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Create password" />
              </FormControl>
            </form>
          </Box>
          <HStack p="10px" isInline justifyContent="space-between">
            <Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Register
              </Button>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default Register;
