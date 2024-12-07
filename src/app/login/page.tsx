import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { LoginForm } from '../ui/login-form';

const LoginPage= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;