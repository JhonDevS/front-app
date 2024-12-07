import { useState } from 'react';
import { z } from 'zod';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const router = useRouter();

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        email: fieldErrors.email?._errors[0],
        password: fieldErrors.password?._errors[0],
      });
      setIsLoading(false);
      return;
    }
    console.log('Email:', email);
    console.log('Password', password);

    const signInResult = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (signInResult?.error) alert('Error al iniciar sesión');
    setIsLoading(false);
    router.push('/dashboard');
  };

  return {handleSubmit, email, handlerEmail, password, handlerPassword, isLoading, errors};
};

// TODO: Improve validation of password, for example: symbols, numbers, uppercase 
export const loginSchema = z.object({
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  password: z.string().min(4, { message: 'La contraseña debe tener al menos 4 caracteres' }),
});