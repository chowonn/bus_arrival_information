import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './themes/reset.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
