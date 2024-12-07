'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export const LoginForm = () => {
  const { data: session } = useSession()
  if (session) {
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
};