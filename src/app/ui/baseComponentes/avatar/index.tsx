import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
export const Avatar = ({src, alt, name}:{src?: string, alt?: string, name?: string}) => {
  return (
    <div className="avatar flex justify-center items-center mb-5">
      <div className="mask mask-squircle">
        {
          src ? <Image alt={alt ?? 'avatar'} width={48} height={48} src={src} /> : <FaRegUser size={48} />
        }
      </div>
      {
        name && <p className="avatar-text text-slate-800 mx-5" >Bienvenido <span className="font-bold" >{name}</span> !</p>
      }
    </div>
  )
}