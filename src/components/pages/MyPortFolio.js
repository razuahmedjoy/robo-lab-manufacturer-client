import React from 'react';

const MyPortFolio = () => {
    return (
        <div>
            <div className="px-5 mx-auto my-5">

                <div className="header">
                    <h4 className="text-2xl">Hello! this is,</h4>
                    <h2 className="text-4xl">Razu Ahmed Joy</h2>
                    <div>
                        <p> <span className="font-bold">Email: </span>razuahmedbzs2018@gmail.com</p>
                        <p> <span className="font-bold">Education: </span>Studying IPE at KUET (1st Semester) </p>
                    </div>

                    <div>
                        <h3 className="text-3xl my-3">Skills:</h3>
                        <ul>
                            <p> <span className="font-bold">Frontend: </span>HTML, CSS, Javascript, React, Bootstrap, Tailwind</p>
                            <p> <span className="font-bold">Backend: </span>Python, Django, Javascript, Node, Express</p>
                            <p> <span className="font-bold">Database: </span>MySql, MongoDB, Sqlite</p>
                            
                            <p> <span className="font-bold">Tools: </span>Git, Firebase, Heroku</p>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl my-3">Projects:</h3>
                        <ul>
                            <p> <span className="font-bold">Gear House (Mern Stack Project): </span>
                            <br></br>
                                <a className="link" href="https://gears-house-asmnt-11.web.app/" alt="gearhouse">Live Link</a>
                             </p>

                             <br></br>
                            <p> <span className="font-bold">Manufactuing House (Mern Stack Project): </span>
                            <br></br>
                                <a className="link" href="https://robo-lab-febab.web.app/">Live Link</a>
                             </p>

                             <br></br>
                            <p> <span className="font-bold">Foodie React (React Project): </span>
                            <br></br>
                                <a className="link" href="https://foodiee-react.netlify.app/">Live Link</a>
                             </p>

                             <br></br>
                          

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortFolio;