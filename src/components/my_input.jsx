import "./my_input.css"
import { useRef } from "react"

export default function MyInput({ type, placeholder, required = true, name }) {
    const referInput = useRef();
    const referArea = useRef();

    const handleClick = () => {
        if (referInput.current) referInput.current.focus();
        if (referArea.current) referArea.current.focus();
    }

    return (
        <div className="my_input" onClick={handleClick}>
            {type != "area" && <input name={name} ref={referInput} required={required} type={type} placeholder={placeholder} />}
            {type == "area" && <textarea name={name} ref={referArea} required={required} placeholder={placeholder} cols="30" rows="10"></textarea>}
        </div>
    )
}