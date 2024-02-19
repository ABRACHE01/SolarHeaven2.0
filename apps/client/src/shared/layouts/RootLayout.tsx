import { Outlet } from "react-router";
import { AuthHeader, Footer } from "../components";
import { AppShell, rem } from "@mantine/core";

const RootLayout = () => {
  return (
    <>
      <AppShell header={{ height: 65, offset: false }} padding="md">
        <AppShell.Header>
          <AuthHeader />
        </AppShell.Header>
        <AppShell.Main
          pt={`calc(${rem(60)} + var(--mantine-spacing-lg))`}
        >
          <Outlet />
        </AppShell.Main>
        <Footer />
      </AppShell>
    </>
  );
};

export default RootLayout;
