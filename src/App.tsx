import { useRoutes } from 'react-router-dom';
import routes from './router';
import { CssBaseline } from '@mui/material';

const App = () => {

  const content = useRoutes(routes);

  return (
    <>
      <CssBaseline />
      {content}
    </>
  );
}
export default App;
