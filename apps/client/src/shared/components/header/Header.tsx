import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './AuthHeader.module.css';
import { useNavigate } from 'react-router';

export function AuthHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const navigate = useNavigate();

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
            <Button variant="default" 
            onClick={() => navigate('/auth/login')}
            >Log in</Button>
            <Button 
            className="bg-slate-600" 
            onClick={() => navigate('/auth/register')}
            >Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
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
            <Button variant="default"              
            onClick={() => navigate('/auth/login')}
            >Log in</Button>
            <Button className="bg-slate-600" 
            onClick={() => navigate('/auth/register')}
            >Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}