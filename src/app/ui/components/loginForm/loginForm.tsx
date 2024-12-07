'use client'

import { useEffect } from "react";
import { useLoginForm } from "./hooks/useLoginForm";
import { InputForm } from "../../baseComponentes";


export const LoginForm = () => {
  const { handleSubmit, email, password, handlerEmail, handlerPassword, isLoading, errors } = useLoginForm();

  useEffect(() => {
    console.log('Error', errors);
  }, [errors]);
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputForm label="Correo Electrónico" type="email" placeholder="correo@ejemplo.com" value={email} onChange={handlerEmail} error={errors.email} />
          <InputForm label="Contraseña" value={password} type="password" placeholder="******" onChange={handlerPassword} error={errors.password} />
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
};