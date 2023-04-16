import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowTodos = ({ setDeletingTodos }) => {

    const [userData, SetUserData] = useState([]);
    const [filterData, SetfilterData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getUserData = async () => {
            const reqData = await fetch('https://todo-checklist-server.vercel.app/allTodos');
            const resData = await reqData.json();
            SetUserData(resData);
            SetfilterData(resData);
        }
        getUserData();
    }, [])

    const handleSearch = event => {
        const getSearch = event.target.value;
        setQuery(getSearch);
        if (getSearch.length > 0) {
            const searchData = userData.filter((item) => item.name.toLowerCase().includes(getSearch) || item.taskname.toLowerCase().includes(getSearch));
            SetUserData(searchData);
        }
        else {
            SetUserData(filterData);
        }
    }
    return (
        <div className='p-4'>
            <label className="label -mb-4 ml-4 font-semibold">
                <span className="label-text">Please search your name with small letter and number.</span>
            </label>
            <input type="text" value={query} onChange={(e) => handleSearch(e)} placeholder="Please type here to lowerCase" className="input m-4 input-bordered w-full max-w-xs" />
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Mobile No.</th>
                                    <th>date</th>
                                    <th>Message</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData?.sort((a, b) => a.name.localeCompare(b.name)).map((user, i) => <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.taskname}</td>
                                        <td>{user.date}</td>
                                        <td>{user.description}</td>
                                        <td><label onClick={() => setDeletingTodos(user)} htmlFor="confirmation-modal" className="btn btn-error btn-primary btn-xs">Delete</label></td>
                                        <td>
                                            <Link to={`/update/${user._id}`}><button className="btn btn-outline btn-accent btn-xs">Update</button></Link></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTodos;