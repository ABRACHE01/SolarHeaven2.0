import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AuthHeader.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/Auth/redux/authSelectors";
import { logout } from "../../../features/Auth/redux/authSlice";
import Cookies from "js-cookie";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function AuthHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { setColorScheme } = useMantineColorScheme();
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
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
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
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {/* <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a> */}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
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
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
