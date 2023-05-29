interface StatusProps {
    text: string;
    status_size: string;
    bg_color: string;
    text_color: string;
    font_size: string;
}

const Status: React.FC<StatusProps> = ({ text, status_size, bg_color, text_color, font_size }) => {
    return (
        <span className={`inline-flex ${status_size} items-center rounded ${bg_color} px-2 py-1 ${font_size} font-medium ${text_color}`}>{text}</span>
    );
}

export default Status;
