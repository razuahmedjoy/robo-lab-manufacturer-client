import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto my-5">


                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p>
                            There are so many ways to improve performance. Some of them are
                        </p>
                        <ul>
                            <li>
                                By using Immutable Data Structure
                            </li>
                            <li>
                                Using Some default Hooks like useMemo()
                            </li>
                            <li>
                                Using React Pure Componenet
                            </li>
                            <li>
                                By Chaching Functions.
                            </li>
                            <li>
                                By Chaching Queries like Using react query. Etc.
                            </li>
                        </ul>
                    </div>
                </div>


                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Mainly 4 Types of State we can use
                        </p>
                        <ul>
                            <li>
                                Local State
                            </li>
                            <li>
                                Global State
                            </li>
                            <li>
                                Server State
                            </li>
                            <li>
                                Url State
                            </li>

                        </ul>
                        There comes so many usable techonologies to manage state in react Like Redux, Cycle.js, Flux etc.
                        After React 16+ there ccomes Context API to manage state in react application
                    </div>
                </div>


                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?

                    </div>
                    <div className="collapse-content">
                        <p>
                            Prototypical Inheritance means ,
                            A way by which a object can inherit another object and use that object's property and methods as well as modify the methods also. Javascript also can work this way.
                        </p>

                    </div>
                </div>
                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts

                    </div>
                    <div className="collapse-content">
                        <p>
                            We don't update state directly because the function setState is cconnected to component lifeCycle. When we set state using that it executes some lifecycle methods by which component rerenders.
                            If we set it directly it will not change the state immedieately. rather it will create a Promise and we will loss the control of all state across the componenets.

                        </p>

                    </div>
                </div>



                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?

                    </div>
                    <div className="collapse-content">
                        <p>
                           {
                               `const find = products.filter(product => product.name.includes(searchTxt))`
                           }

                        </p>

                    </div>
                </div>

                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?

                    </div>
                    <div className="collapse-content">
                        <p>
                            Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input.

                            For React components, this could mean checking that the component renders correctly for the specified props.

                            In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on.
                        </p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;