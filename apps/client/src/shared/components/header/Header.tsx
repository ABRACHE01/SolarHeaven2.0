import {
  Group,
  Button,
  Box,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
  Text,
} from "@mantine/core";
import classes from "./AuthHeader.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/Auth/redux/authSelectors";
import { logout } from "../../../features/Auth/redux/authSlice";
import Cookies from "js-cookie";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function AuthHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { setColorScheme } =  useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const handleLogout = async () => {
    try {
      dispatch(logout());
      Cookies.remove("user");
      Cookies.remove("refresh_token");
      Cookies.remove("access_token");
      await navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <header className={classes.header} >
        <Group justify="space-between" h="100%">
        <Text className="font-extrabold text-green-500 ">SOLARHAVEN</Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            {/* <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a> */}
          </Group>

          <Group visibleFrom="sm">
          <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="default"
              size={36}
              aria-label="Toggle color scheme"
            >
              {computedColorScheme == "light" ? (
                <IconSun stroke={1.5} />
              ) : (
                <IconMoon stroke={1.5} />
              )}
            </ActionIcon>
            {isLoggedIn ? (
              <Button variant="default" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="default"
                  onClick={() => navigate("/auth/login")}
                >
                  Log in
                </Button>
                <Button
                  className="bg-slate-600"
                  onClick={() => navigate("/auth/register")}
                >
                  Sign up
                </Button>
              </>
            )}
           
          </Group>

        </Group>
      </header>


    </Box>
  );
}

