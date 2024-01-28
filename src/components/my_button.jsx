import "./my_button.css"

export default function MyButton({ text, onClick, icon, style, type }) {
    return <button type={type} style={style} onClick={onClick} className="my_button">
        <div className="line">
            {icon && <span className="material-icons">{icon}</span>}
            {text}
        </div>
    </button>
}