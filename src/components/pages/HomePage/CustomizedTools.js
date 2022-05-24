import React from 'react';

const CustomizedTools = () => {
    return (
        <div className="my-5">
            <div class="hero min-h-auto bg-primary">
                <div class="hero-content flex-col lg:flex-row-reverse py-10">
                    <div class="text-center lg:text-left text-white">
                        <h1 class="text-5xl font-bold">Get Your Customized Tools</h1>
                        <p class="py-6">Fill up the forms and send your customized requirements so that we can send you customized manufactured products. We also value our clients to the upmost</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" placeholder="Details" class="input input-bordered"></textarea>
                                <label class="label">
                              
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizedTools;