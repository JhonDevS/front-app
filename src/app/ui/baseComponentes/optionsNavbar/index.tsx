import React from "react"
import { IconType } from "react-icons"

export const OptionsNavbar = ({label, icon, action}:{label?: string, icon?: IconType, action?: () => Promise<void> | Promise<boolean> | string |void | null
}) => {
  return (
    <li onClick={action} className="flex">
      <a>
        {
          icon && React.createElement(icon)
        }
        <span className="hidden md:inline-block">{label && label}</span>
      </a>
    </li>
  )
}