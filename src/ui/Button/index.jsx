import './styles.css';

export const Button = ({ children, onClick, type = 'primary', disabled }) => {
    return (
        <button 
          disabled={disabled} 
          className={`Button ${type}`} 
          onClick={onClick}
        >
            {children}
        </button>
    )
}