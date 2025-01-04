'use client'
import { useSession } from "next-auth/react";

const DashBoardPage = () => {
  const { data: session } = useSession();
  const handleClick = async () => {
    if (session) {
      console.log("Token de sesión:", session.user.accessToken);  // Accede al token aquí
    }

    const res = await fetch('http://localhost:8002/api/v1/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const dataRes = await res.json();
    console.log(dataRes);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default DashBoardPage;