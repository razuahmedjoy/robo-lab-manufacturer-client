import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';
import auth from '../../../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = async (e) => {
        const review = {...e,user:user?.displayName}
        const res = await axiosPrivate.post('https://cryptic-sierra-30199.herokuapp.com/review',review);
        const data = res.data
        if(data.insertedId){
            toast.success("Review Added");
            reset()
        }
    }

    return (
        <div>
            <h2 className="text-center text-2xl my-5">Add A Review</h2>
            <div className="card md:max-w-md bg-base-100 shadow-xl mx-1 md:mx-auto">
                <form className="px-3 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <br></br>
                    <label htmlFor="rating">Rating</label>
           

                  
                    <select placeholder="Rating" name="rating" className="input input-bordered w-full" {...register("rating")} defaultValue="5">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    
                    </select>
                    <br></br>

                    <label htmlFor="comment">Comment</label>
          
                    <textarea required placeholder="comment" name="comment" className="input input-bordered w-full" {...register("comment")}>
                  
                    
                    </textarea>



                    <input className="btn btn-primary text-white btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Submit" />
                    <br></br>

                </form>
            </div>

        </div>
    );
};

export default AddReview;