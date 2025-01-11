import { AiOutlineGoogle } from "react-icons/ai";

export const GoogleButton = ({onclick, styles, isLoading}:{onclick?: () => Promise<void>, styles?: string, isLoading?: boolean}) => {
  return (
    <button 
      className={`btn ${styles} gap-0`} 
      onClick={onclick}
      disabled={isLoading}
      >
        <span className='text-white'>
          {
            isLoading ? 'Cargando...' : 'Iniciar con'
          }
        </span>
        <AiOutlineGoogle size={20} style={{ color: '#fff', margin: '0px', padding: '0px' }} />
    </button>
  )
}    