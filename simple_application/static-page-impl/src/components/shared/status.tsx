

export default function Status({text, status_size, bg_color, text_color, font_size}) {
    return (
        <span
            className={`inline-flex ${status_size} items-center rounded ${bg_color} px-2 py-1 ${font_size} font-medium ${text_color}`}>{text}
        </span>
    )
}
