'use client'
import { IoIosArrowBack } from "react-icons/io";
import { useVisibilityByDimension } from '@/app/hooks/useVisibilityByDimension';

export const NavBar = ({children, header}:{children: React.ReactNode, header: React.ReactNode}) => {
  const {isVisible, handlerVisible} = useVisibilityByDimension({minSize: 800});

  return (
    <nav className="absolute top-1/2 right-5 transform -translate-y-1/2 w-16 md:w-auto">
      <>{header}</>
      {isVisible ? (
          <>{children}</>
      ) : (
        <button onClick={() => handlerVisible(true)} className="bg-base-200 p-2 rounded-full">
          <IoIosArrowBack size={24} />
        </button>
      )}
    </nav>
  );
};