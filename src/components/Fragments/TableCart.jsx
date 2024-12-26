import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
    const { products } = props
    const cart = useSelector((state)=> state.cart.data)
    const [totalPrice, setTotalPrice] = useState(0)

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

    const totalPriceRef = useRef(null)

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.display = "table-row"
        }else{
            totalPriceRef.current.display = "none"
        }
    })

    return (
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

                    <tr className="font-bold" ref={totalPriceRef}>
                    <td colSpan={3}>Total Price</td>
                    <td>$ {totalPrice.toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</td>
                    </tr>
            </tbody>
        </table>
    )
}

export default TableCart
