'use client'
import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { LoginForm } from '../ui/components/loginForm';

const LoginPage= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-slate-800">Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;