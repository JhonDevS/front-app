import { AiOutlineGoogle } from "react-icons/ai";

export const GoogleButton = ({onclick, styles, isLoading}:{onclick?: () => Promise<void>, styles?: string, isLoading?: boolean}) => {
  return (
    <button 
      className={`btn ${styles} gap-0`} 
      onClick={onclick}
      disabled={isLoading}
      >
        <span className=''>
          {
            isLoading ? 'Cargando...' : 'Iniciar con'
          }
        </span>
        <AiOutlineGoogle size={20} style={{ color: '#4285F4', margin: '0px', padding: '0px' }} />
    </button>
  )
}    