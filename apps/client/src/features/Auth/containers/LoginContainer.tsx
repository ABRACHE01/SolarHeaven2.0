import { selectIsLoggedIn } from "../redux/authSelectors";
import { useSelector } from "react-redux";
import { LoginForm } from "../components/forms/LoginForm";
import { Anchor, Container, Text, Title } from "@mantine/core";
const LoginContainer = () => {
  const user = useSelector(selectIsLoggedIn);

  console.log(user);

  return (
    <Container size={420} my={250}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>
      <LoginForm />
    </Container>
  );
};

export default LoginContainer;
