import React from 'react';
import { Link } from 'react-router-dom';

const ShowTodos = ({ alltodo, setDeletingTodos }) => {
    const { name, taskname, description, date, _id } = alltodo

    return (
        <div>
            <div className="card w-80 bg-white text-neutral-dark">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{taskname}</h2>
                    <p>{date}</p>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setDeletingTodos(alltodo)} htmlFor="confirmation-modal" className="btn btn-error btn-primary">Delete</label>
                        <Link to={`/update/${_id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTodos;