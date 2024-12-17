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

const ProductsPage = () => {
    return (
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
    )
}

export default ProductsPage  