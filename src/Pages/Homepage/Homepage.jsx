import React, { } from 'react';
import Availabletodos from '../Availabledate/Availabletodos';

const Homepage = () => {


    return (
        <div className='text-center p-4'>
            <h1 className='text-3xl font-bold text-violet-600 '>Wellcome to Simple Adress Book Manager.</h1>
            <Availabletodos></Availabletodos>
        </div>
    );
};

export default Homepage;