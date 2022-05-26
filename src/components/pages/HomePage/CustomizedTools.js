import React from 'react';

const CustomizedTools = () => {
    return (
        <div className="my-5">
            <div className="hero min-h-auto bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse py-10">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Get Your Customized Tools</h1>
                        <p className="py-6">Fill up the forms and send your customized requirements so that we can send you customized manufactured products. We also value our clients to the upmost</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" placeholder="Details" className="input input-bordered"></textarea>
                                <label className="label">
                              
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizedTools;