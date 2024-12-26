import { useEffect, useState } from "react"
import Button from "../Elements/Button"
import { useSelector } from "react-redux"
const email = localStorage.getItem("email")

const Navbar = () => {
    const [ totalCart, setTotalCart ] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)

        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")

        window.location.href = "/login"
    }

    return (
        <div className="h-20 bg-blue-600 flex flex-wrap justify-end text-white items-center px-10">
            {email}
            <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    )
}

export default Navbar