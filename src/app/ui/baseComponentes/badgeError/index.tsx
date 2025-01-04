import { ReactNode } from "react"

export const BadgeError = ({ children }:{children: string | ReactNode}) => {
  return (
    <div className="badge badge-error h-auto max-w-[80%]">
      {
        typeof children === 'string' ? (
          <span className="text-sm text-white m-2 text-wrap">{children}</span>
        ) : (
          children
        )
      }
    </div>
  )
}