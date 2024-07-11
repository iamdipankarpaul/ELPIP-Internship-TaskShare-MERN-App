import {
  Box,
  Button,
  Center,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login } from "../../api/authApi";
import { setUser } from "../../features/auth/authSlice";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    // console.log(formData);
    const response = await login(formData);
    // console.log(response);
    toast(response.msg);
    dispatch(setUser(response.user));
    navigate("/");
  };

  return (
    <Box mih={"70vh"}>
      <Center mih={"70vh"}>
        <Box>
          <Box my={"sm"}>
            <Title ta={"center"}>Log In</Title>
            <Text ta={"center"}>Welcome Back!</Text>
          </Box>
          <form
            style={{ width: "100%", minWidth: "400px" }}
            onSubmit={handleSubmit}
          >
            <TextInput
              label="Username"
              placeholder="johndoe"
              type="text"
              name="username"
              size="lg"
              defaultValue={"username2"}
            />
            <PasswordInput
              label="Password"
              placeholder="Input password"
              name="password"
              size="lg"
              defaultValue={"12345"}
            />
            <Flex justify={"center"} mt={"sm"}>
              <Button type="submit" loading={loading} size="lg">
                Submit
              </Button>
            </Flex>
          </form>
          <Box my={"sm"}>
            <Text ta={"center"}>
              New here?{" "}
              <Link
                to={"/register"}
                style={{
                  textDecoration: "none",
                  color: "var(--mantine-color-blue-text)",
                }}
              >
                Register now
              </Link>
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
