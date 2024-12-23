import { useDispatch } from "react-redux"
import Button from "../Elements/Button"
import { addToCart } from "../../redux/slices/cartSlice"

const CardProduct = (props) => {
    const { children } = props

    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between mb-5">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props

    return (
        <a href="">
                <img src={image} alt="img1" className="p-8 rounded-t-lg "/>
        </a>
    )
}

const Body = (props) => {
    const { children, name } = props

    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-s text-white">{children}</p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const { price,  id } = props
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</span>
            <Button variant="bg-blue-600" onClick={() => dispatch(addToCart({id, qty: 1}))}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct