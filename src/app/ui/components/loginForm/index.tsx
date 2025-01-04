'use client'

import { useEffect } from "react";
import { useLoginForm } from "./hooks/useLoginForm";
import { InputForm } from "../../baseComponentes";
import { GoogleButton } from "../../baseComponentes";


export const LoginForm = () => {
  const { handleSubmit, handlerSubmitGoogle, email, password, handlerEmail, handlerPassword, isLoading, errors } = useLoginForm();

  useEffect(() => {
    console.log('Error', errors);
  }, [errors]);
  return (
    <section className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputForm label="Correo Electrónico" type="text" placeholder="correo@ejemplo.com" value={email} onChange={handlerEmail} error={errors.email} />
        <InputForm label="Contraseña" value={password} type="password" placeholder="******" onChange={handlerPassword} error={errors.password} />
        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </div>
      </form>
      <GoogleButton onclick={handlerSubmitGoogle} styles="w-full mt-5" />
    </section>
  )
};