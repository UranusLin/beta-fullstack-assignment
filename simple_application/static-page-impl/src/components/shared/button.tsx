interface ButtonProps {
    color: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
    return (
        <button className={`px-4 py-2 w-100 h-10 rounded-lg text-xs text-white ${color}`}>
            {text}
        </button>
    );
}

export default Button;
