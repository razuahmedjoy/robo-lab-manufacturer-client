import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader';
import SectionTitle from '../../shared/SectionTitle';
import ToolsGrid from './ToolsGrid';

const Tools = () => {

    // const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    // using react query instead of normal fetch
    const { data: tools, isLoading } = useQuery(['tools'], () =>
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
    )



    if (isLoading) {
        return <Loader />
    }


    return (
        <div className="tools pt-10 pb-5">

            <SectionTitle>Tools</SectionTitle>


            <div className="tools-grid grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5 place-content-center justify-items-center px-2 md:px-10">
                {
                    tools?.length > 0 && tools?.slice(0,6).map(tool => <ToolsGrid key={tool._id} tool={tool} />)
                }



            </div>


        </div>
    );
};

export default Tools;