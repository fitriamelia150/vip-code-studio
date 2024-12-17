import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5 mx-2">
            <CardProduct>
                <CardProduct.Header/>
                <CardProduct.Body title="Sepatu Buludru Pria">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, similique.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000"/>
            </CardProduct>
        </div>
    )
}

export default ProductsPage  