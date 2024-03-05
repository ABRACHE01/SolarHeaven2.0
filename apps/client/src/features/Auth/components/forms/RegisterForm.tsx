import {
  TextInput,
  PasswordInput,
  Button,
  Notification,
  Select,
  Paper,
} from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegisterMutation } from "../../redux/authApiSlice";
import { xIcon } from "../icons";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const [error, setError] = useState<string | null>(null);

  
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      firstName: hasLength(
        { min: 2, max: 10 },
        "Fisrt name must be 2-10 characters long"
      ),
      lastName: hasLength(
        { min: 2, max: 10 },
        "Last name must be 2-10 characters long"
      ),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      role: isNotEmpty("Please enter a Role"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const user = await register(values).unwrap();
      user && navigate("/auth/login");
    } catch (error: any) {
      if (!error?.data) setError("No response");
      else if (error?.status === 400) setError("Invalid credentials");
      else if (error?.status === 409) setError("Email already exists");
      else if (error?.status === 500) setError("Internal server error");
      else setError("register failed");
    }
  };

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      {error && (
        <Notification
          variant="light"
          mb={30}
          radius="md"
          withBorder
          color="red"
          title="Alert"
          icon={xIcon}
          onClose={() => setError(null)}
        >
          {error}
        </Notification>
      )}
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="First name"
          placeholder="mohamed"
          required
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last name"
          placeholder="abrache"
          mt="md"
          required
          {...form.getInputProps("lastName")}
        />
        <Select
          label="User role"
          checkIconPosition="right"
          data={["customer"]}
          mt="md"
          required
          placeholder="Pick value"
          //defaultValue="COSTUMER"
          {...form.getInputProps("role")}
        />
        <TextInput
          label="Email"
          placeholder="medabra@gmail.com"
          mt="md"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          mt="md"
          required
          {...form.getInputProps("password")}
        />
        <PasswordInput
          mt="md"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
        {isLoading ? (
          <Button
            fullWidth
            mt="xl"
            loading
            type="submit"
            className="bg-slate-600"
          >
            Loading
          </Button>
        ) : (
          <Button fullWidth mt="xl" type="submit" className="bg-slate-600">
            Sign up
          </Button>
        )}
      </form>
    </Paper>
  );
}
