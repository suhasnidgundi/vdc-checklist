import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';
import { useEffect } from 'react';
import useAuthStore from './store/authStore';

function App() {
  const { checkAuthStatus } = useAuthStore();

  useEffect(() => {
    // Check authentication status when the app loads
    checkAuthStatus();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;