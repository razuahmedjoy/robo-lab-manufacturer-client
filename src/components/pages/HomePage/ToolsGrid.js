import React from 'react';
import { Link } from 'react-router-dom';

const ToolsGrid = ({ tool }) => {
    const { _id, name, price, picture, minimum_order, available_stock, short_description } = tool
    return (
        <div className="card md:max-w-sm bg-base-100 shadow-xl m-5">
            <figure><img className="w-3/4 h-auto" src={picture} alt={name} /></figure>
            <div className="card-body p-4 md:p-6">
                <h2 className="card-title">
                    {name}

                </h2>
                <p>{short_description.length > 50 ? `${short_description.slice(0, 50)}...` : short_description}</p>
                <div className="card-actions justify-start flex-col gap-0">
                    <div>Minimum Order:  <span className="text-primary font-bold">{minimum_order}</span>
                    </div>

                    <div>Available Stock:  <span className="text-primary font-bold">{available_stock}</span>
                    </div>


                </div>
                <div className="flex justify-between items-center">
                    <div className="bg-primary text-white btn-sm rounded-lg flex items-center font-bold">${price}</div>
                    <Link to={`/details/${_id}`}>
                        <div className="btn btn-secondary btn-sm">
                            Order Now
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToolsGrid;