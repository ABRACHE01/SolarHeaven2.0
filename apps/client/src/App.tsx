import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import GlobalRoutes from './routes/GlobalRoutes';


function App() {
  return (
    <MantineProvider >
      <GlobalRoutes/>
    </MantineProvider>
  );
}

export default App;