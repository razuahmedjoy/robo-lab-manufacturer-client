import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[450px] flex flex-col justify-center items-center">
               <FontAwesomeIcon size="10x" color="red" className="mt-2" icon={faSearchMinus}/>
            <h2 className="text-center text-3xl">The Text you are Trying to access Does not Exist</h2>
         
        </div>
    );
};

export default NotFoundPage;