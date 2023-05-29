

export default function Text({text, size, other}) {
    return (
        <h1 className={`text-custom-color text-left leading-6 ${size} ${other}`}>
            {text}
        </h1>
    )
}
