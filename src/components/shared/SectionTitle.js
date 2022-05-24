import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <>
        <h2 className="title text-center text-4xl font-semibold">{children}</h2>
            <hr className="w-1/3 mx-auto mt-2 border-primary" />
            
        </>
    );
};

export default SectionTitle;