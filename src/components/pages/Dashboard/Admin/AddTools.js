import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';

const AddTools = () => {

    const imageStorageKey = '0aedefa50fb852aaec07852885ef7cee';

    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const onSubmit = (data) => {
        let toolsData = {}
        toolsData = { ...data }

        const photo = data.picture[0];
        const formData = new FormData();
        formData.append('image', photo)

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData,


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    toolsData["picture"] = result.data.url
                }

                fetch('https://cryptic-sierra-30199.herokuapp.com/addtool', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(toolsData)
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success("Added new Tool")
                        reset()
                    }
                    else {
                        toast.error("Failed to add the tool")
                    }
                })
            })


    }
    return (
        <div>
            <h2 className="text-2xl text-center my-2">Add New Tools</h2>
            <div className="max-w-lg px-3 shadow-md mx-auto">
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="name">Tool Name</label>

                    <input required type="text" placeholder="Email.." className="input input-bordered w-full" {...register("name", { required: true })} />

                    <br></br>

                    <label htmlFor="picture">Picture Link</label>
                    <input required type="file" placeholder="Picture Link" className="input w-full"  {...register("picture", { required: true })} />

                    <br></br>

                    <label htmlFor="price">Unit Price</label>
                    <input required type="number" placeholder="Unit Price" className="input input-bordered w-full"  {...register("price", { required: true })} />
                    <br></br>

                    <label htmlFor="minimum_order">Minimum Order</label>
                    <input required type="number" placeholder="minimum order" className="input input-bordered w-full"  {...register("minimum_order", { required: true })} />

                    <br></br>

                    <label htmlFor="available_stock">Available Stock</label>
                    <input required type="number" placeholder="available stock" className="input input-bordered w-full"  {...register("available_stock", { required: true })} />
                    <br></br>

                    <label htmlFor="short_description">Short Description</label>
                    <input required type="text" placeholder="Short description" className="input input-bordered w-full"  {...register("short_description", { required: true })} />




                    <br></br>
                    <input className="btn btn-primary text-white btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Add" />
                    <br></br>


                </form>
            </div>
        </div>
    );
};

export default AddTools;