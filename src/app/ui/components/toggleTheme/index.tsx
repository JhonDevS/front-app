'use client'

import { useToggleTheme } from "./hooks/useToggleTheme";
import { CiDark } from "react-icons/ci";
import { FaSun } from "react-icons/fa";


export const ToggleTheme = () => {
  const { handlerToggle } = useToggleTheme();

  return (
    <label className="swap swap-rotate absolute bottom-7 right-7">
        <input type="checkbox" onChange={handlerToggle} />
        <CiDark className="swap-off" size={30} />
        <FaSun className="swap-on" size={30} />
    </label>
  )
}