
const Button = (props) => {
    const { children = "...", variant = "bg-black" } = props

    return (
        <div className={`h-10 px-6 flex items-center justify-center font-semibold rounded-md ${variant} text-white`}>{children}</div>
    )
}

export default Button