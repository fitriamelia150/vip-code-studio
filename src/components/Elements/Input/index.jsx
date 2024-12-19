import Input from "./Input"
import Label from "./Label"
import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {
    const { label, type, name, placeholder } = props
        return (
            <div className="mb-6">
                <Label htmlFor={name}>{label}</Label>
                <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
            </div>
        )
})

export default InputForm