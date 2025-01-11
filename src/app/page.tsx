'use client'
import { IconType } from "react-icons";
import { OptionsNavbar } from "./ui/baseComponentes";
import { NavBar } from "./ui/components";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";

type Option = {
  label: string;
  action: (() => void | Promise<void> | string | null | Promise<boolean>) | undefined;
  icon: IconType;
};

const optionsNavBar: Record<string, Option>  = {
  "login": {
    "label": "Login",
    "action": undefined,
    "icon": AiOutlineUserSwitch
  },
  "register": {
    "label": "Register",
    "action": undefined,
    "icon": FaWpforms
  },
  "contact": {
    "label": "Contact",
    "action": undefined,
    "icon": CiPhone
  }
}


export default function Home() {
  optionsNavBar.login.action = () => window.location.href = '/login'

  return (
    <main className="w-full flex relative min-h-screen">
      <NavBar header={<></>}>
        <ul className="menu bg-base-200 text-lg rounded-box w-full">
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
    </main>
  );
}
