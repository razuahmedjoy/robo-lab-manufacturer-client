import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader';
import SectionTitle from '../../shared/SectionTitle';
import ToolsGrid from './ToolsGrid';

const Tools = () => {

    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => {
                setTools(data);
                setLoading(false);
            }
            );
    }, [])

    if (loading) {
        return <Loader />
    }


    return (
        <div className="tools pt-10 pb-5">

            <SectionTitle>Tools</SectionTitle>


            <div className="tools-grid grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5 place-content-center justify-items-center px-2 md:px-10">
                {
                    tools.length > 0 && tools.map(tool => <ToolsGrid key={tool._id} tool={tool} />)
                }



            </div>


        </div>
    );
};

export default Tools;