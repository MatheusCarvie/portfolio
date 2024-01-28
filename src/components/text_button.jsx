import "./text_button.css"

export default function TextButton({ text, onClick, style }) {
    return <p style={style} onClick={onClick} className="text_button">{text}</p>
}