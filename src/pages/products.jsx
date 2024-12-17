import { Fragment } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Sepatu Buludru Pria",
        price: "Rp 1.000.000",
        image: "/images/img1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, similique.",
    },

    {
        id: 2,
        name: "Sepatu Buludru Pria",
        price: "Rp 1.000.000",
        image: "/images/img1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, similique.",
    }
]

const email = localStorage.getItem("email")

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")

        window.location.href = "/login"
    }
    return (

        <Fragment>
            <div className="h-20 bg-blue-600 flex justify-end text-white items-center px-10">
                {email}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>

            <div className="flex justify-center py-5 mx-2">
                
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price}/>
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    )
}

export default ProductsPage  