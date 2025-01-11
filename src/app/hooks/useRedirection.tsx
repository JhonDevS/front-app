import { useRouter } from 'next/router';

type RedirectPath = '/login' | '/home' | '/profile';

export const useRedirection = () => {
  const router = useRouter();

  const redirection = (redirect: RedirectPath) => {
    switch (redirect) {
      case '/login':
        router.push('/login');
        break;
      case '/home':
        router.push('/home');
        break;
      case '/profile':
        router.push('/profile');
        break;
    }
  }
    
  return {redirection};
};