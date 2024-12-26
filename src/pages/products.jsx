import { Fragment, useState, useEffect } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"

const ProductsPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts((data)=>{
            setProducts(data)
        })
    },[])


    return (

        <Fragment>
            <Navbar/>
            
            <div className="flex justify-center py-5 mx-2">
                <div className="w-2/3 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}/>
                            <CardProduct.Body name={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id}/>
                        </CardProduct>
                    ))}
                </div>

                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                    <TableCart products={products}/>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage  