import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../shared/Loader';
import OrderModal from './OrderModal';

const ToolsDetails = () => {
    const [tool, setTool] = useState({})
    const [cart, setCart] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {

        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const cartItem = { ...data, quantity: data.minimum_order }
                setTool(data);
                setCart(cartItem);
                setLoading(false)


            }
            );

    }, [id])


    if (loading) {
        return <Loader />
    }


    const reduceQuantity = () => {
        if (cart.quantity > tool.minimum_order) {
            const newQuantity = cart.quantity - 1;
            const newCartItem = { ...cart, quantity: newQuantity };
            setCart(newCartItem);
        }
        else {
            toast.error(`You can't order less than ${tool.minimum_order}`)
        }
    }
    const increaseQuantity = () => {

        if (cart.quantity < tool.available_stock) {
            const newQuantity = cart.quantity + 1;
            const newCartItem = { ...cart, quantity: newQuantity };
            setCart(newCartItem);
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 mb-5">
                <div className="p-5 w-full md:w-4/5 mx-auto">
                    <figure>
                        <img className="w-full h-auto border-2 shadow-md" src={tool.picture} alt="" />
                    </figure>
                </div>
                <div className="p-5 flex flex-col gap-y-2">
                    <h2 className="text-3xl font-semibold">{tool.name}</h2>
                    <p><span className="text-2xl">${tool.price}</span> / Unit</p>
                    <p className="text-sm">{tool.short_description}</p>
                    <p> <span className="font-bold">Minimum Order quantity : </span>{tool.minimum_order} </p>
                    <p> <span className="font-bold">Available Stock : </span>{tool.available_stock} </p>



                    {
                        tool?.minimum_order > tool?.available_stock
                            ?
                            <p className="text-red-500">Not Enough Stock</p>
                            :
                            <div className="w-full md:w-1/2">
                                <div className="flex justify-between items-center">
                                    <button onClick={reduceQuantity} className="btn btn-sm btn-error rounded-full">-</button>
                                    <input name="quantity" type="number" value={cart.quantity} min={tool.minimum_order} placeholder="Type here" className="input input-bordered mx-2" readOnly />
                                    <button onClick={increaseQuantity} className="btn btn-sm btn-success text-white rounded-full">+</button>
                                </div>


                                <label htmlFor="my-modal-3" className="btn modal-button btn-primary mt-2 text-white">Order Now</label>
                                {
                                    cart &&
                                    <OrderModal item={cart} setCart={setCart} />
                                }


                            </div>
                    }

                </div>


            </div>
        </div>
    );
};

export default ToolsDetails;