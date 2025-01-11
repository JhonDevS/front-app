import { useEffect, useState } from "react";

export const useVisibilityByDimension = ({minSize}:{minSize: number}) => {
  const [isVisible, setIsVisible] = useState(true);
  const hanlderVisible = () => {
    setIsVisible(window.innerWidth >= minSize);
  };

  const handlerVisible = (value: boolean) => {
    setIsVisible(value);
  }

  useEffect(() => {
      hanlderVisible();
      window.addEventListener('resize', hanlderVisible);
      return () => {
        window.removeEventListener('resize', hanlderVisible);
      };
    }, []);

  return {isVisible, handlerVisible};
}