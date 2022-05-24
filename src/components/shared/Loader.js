import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-60/ py-5">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;