import {
  TextInput,
  PasswordInput,
  Paper,
  Button,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLoginMutation } from "../../redux/authApiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
import { encryptData } from "../../../../utils/helpers";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { xIcon } from "../icons";



export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState<string | null>(null);


  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const  {message} = await login(values).unwrap();

      if(message?.user){
        const encryptedUser = encryptData(message.user);
        Cookies.set("user" , encryptedUser );
        dispatch(setCredentials(message?.user));
        navigate("/dashboard");
      }       

    } catch (error: any) {
      if (!error?.data) setError("No response");
      else if (error?.status === 400) setError("Invalid credentials");
      else if (error?.status === 404) setError("User not found");
      else if (error?.status === 401) setError("Incorrect password");
      else setError("Login failed");

    }
  }

  return (
   
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {error && (
          <Notification variant="light" mb={30} radius="md" withBorder color="red" title="Alert" icon={xIcon} onClose={() => setError(null)}>{error}</Notification>
        )}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>

          <TextInput
            label="Email"
            placeholder="medabra@gmail.com"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="medabra2001"
            mt="md"
            required
            {...form.getInputProps('password')}
          />
         { 
         isLoading ?
        <Button fullWidth mt="xl" loading  type="submit" className="bg-slate-600" >
            Loading
        </Button>
        :
        <Button fullWidth mt="xl" type="submit" className="bg-slate-600" >
        Sign in
        </Button>
          
          }
        </form>
      </Paper>

  );
}
