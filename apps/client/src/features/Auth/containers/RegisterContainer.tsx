import { selectIsLoggedIn } from "../redux/authSelectors" 
import { useSelector } from "react-redux";
import RegisterForm from "../components/forms/RegisterForm"; 
import { Container } from "@mantine/core";

const LoginContainer = () => {

  const user = useSelector(selectIsLoggedIn);
  
  console.log(user)

  return (
    <Container size={420} my={150}>
              <RegisterForm/>
    </Container>
  )
}

export default LoginContainer

