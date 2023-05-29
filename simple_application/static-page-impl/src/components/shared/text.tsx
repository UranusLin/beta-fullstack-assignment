interface TextProps {
    text: string;
    size: string;
    other: string;
}

const Text: React.FC<TextProps> = ({ text, size, other }) => {
    return (
        <h1 className={`text-custom-color text-left leading-6 ${size} ${other}`}>
            {text}
        </h1>
    );
}

export default Text;
