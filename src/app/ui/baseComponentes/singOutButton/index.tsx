import { signOut } from "next-auth/react";

export const SingOutButton = () => {
  return (
    <button onClick={() => signOut()} className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">Cerrar sesion</button>
  )
}