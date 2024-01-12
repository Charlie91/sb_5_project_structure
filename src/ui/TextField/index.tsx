import './styles.css';

type TProps = {
    value: string | undefined;
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    disabled: boolean;
    placeholder?: string;
}

export const TextField = ({ value, onChange, disabled, placeholder }: TProps) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
     />
)

