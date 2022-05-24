import React from 'react';

const ToolsGrid = ({ tool }) => {
    const { name, price, picture, minimum_order, available_stock, short_description } = tool
    return (
        <div class="card md:max-w-sm bg-base-100 shadow-xl m-5">
            <figure><img className="w-3/4 h-auto" src={picture} alt={name} /></figure>
            <div class="card-body p-4 md:p-6">
                <h2 class="card-title">
                    {name}

                </h2>
                <p>{short_description.length > 50 ? `${short_description.slice(0, 50)}...` : short_description}</p>
                <div class="card-actions justify-start flex-col gap-0">
                    <div>Minimum Order:  <span class="text-primary font-bold">{minimum_order}</span>
                    </div>

                    <div>Available Stock:  <span class="text-primary font-bold">{available_stock}</span>
                    </div>


                </div>
                <div className="flex justify-between items-center">
                    <div class="bg-primary text-white btn-sm rounded-lg flex items-center font-bold">${price}</div>
                    <div className="btn btn-secondary btn-sm">Order Now</div>
                </div>
            </div>
        </div>
    );
};

export default ToolsGrid;