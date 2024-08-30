import { useRouter } from 'next/router';

const logout = () => {
  localStorage.removeItem('token'); // Remove the token
  const router = useRouter();
  router.push('/login'); // Redirect to the login page
};

export default logout;
