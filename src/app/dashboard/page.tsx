'use client'
import { NavBar } from "../ui/components";
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { BiExit } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { OptionsNavbar } from "../ui/baseComponentes";
import { IconType } from "react-icons";
import { useVisibilityByDimension } from "../hooks/useVisibilityByDimension";
import { Avatar } from "../ui/baseComponentes/avatar";
import { Menu } from "../ui/components/menu";

type Option = {
  label: string;
  action: (() => void | Promise<void> | null) | undefined;
  icon: IconType;
};

const optionsNavBar: Record<string, Option> = {
  "home": {
    "label": "Pagina principal",
    "action": undefined,
    "icon": IoHomeOutline
  },
  "settings": {
    "label": "Configuracion",
    "action": undefined,
    "icon": IoSettingsOutline
  },
  "exit": {
    "label": "Salir de la cuenta",
    "action": signOut,
    "icon": BiExit
  }
};

const DashBoardPage = () => {
  const {isVisible} = useVisibilityByDimension({ minSize: 800 });
  return (
    <section className="w-full flex relative min-h-screen">
      <Menu />
      <NavBar header={isVisible ? <Avatar name='Jhon' src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />  : <></>}>
        <ul className="menu text-lg rounded-box w-full bg-primary-content">
          {
            Object.keys(optionsNavBar).map((key, index) => {
              const { label, icon, action } = optionsNavBar[key];
              return (
                <OptionsNavbar key={index} label={label} icon={icon} action={action} />
              )
            })
          }
        </ul>
      </NavBar>
    </section>
  );
};

export default DashBoardPage;