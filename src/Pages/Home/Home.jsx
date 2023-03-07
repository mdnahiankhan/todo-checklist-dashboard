import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/Coder.jpg'

const Home = () => {
    return (
        <div>
            <div className="h-full p-3 space-y-2 w-60 dark:text-gray-900 ">
                <div className="flex items-center space-x-4">
                    <img src={photo} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">Todo list</h2>
                        <span className="flex items-center space-x-1">
                            <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</Link>
                        </span>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm ">
                        <li className=" ">
                            <Link to="/dashboard" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <button>Dashboard</button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;