import { Fragment, useState, useEffect } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service"

const email = localStorage.getItem("email")

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])

        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                // console.log(product.id)
                return acc + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    },[cart, products])

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        }else{
            setCart([...cart, {id, qty: 1}])
        }
    }


    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")

        window.location.href = "/login"
    }
    return (

        <Fragment>
            <div className="h-20 bg-blue-600 flex flex-wrap justify-end text-white items-center px-10">
                {email}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>

            <div className="flex justify-center py-5 mx-2">
                
                <div className="w-2/3 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}/>
                            <CardProduct.Body name={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} handleAddToCart={() => handleAddToCart(product.id)} id={product.id}/>
                        </CardProduct>
                    ))}
                </div>

                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

                    <table className="text-left table-auto border-separate border-spacing-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                             {products.length > 0 && 
                                cart.map((item)=>{
                                    const product = products.find((product) => product.id === item.id);
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title}</td>
                                            <td>$ {product.price.toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</td>
                                            <td>{item.qty}</td>
                                            <td>$ {(product.price * item.qty).toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</td>
                                        </tr>
                                    )
                             })}

                             <tr className="font-bold">
                                <td colSpan={3}>Total Price</td>
                                <td>$ {totalPrice.toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</td>
                             </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage  