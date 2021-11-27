import React, { useEffect, useState } from 'react';
import useAuth from '../../../context/useAuth';

const ManageOrder = () => {

    const { user } = useAuth();
    const [addToCarts, setAddToCarts] = useState([]);


    useEffect(() => {
        const url = `https://mighty-escarpment-48291.herokuapp.com/handleAddToCarts?user.email?=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToCarts(data))
    }, [user.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://mighty-escarpment-48291.herokuapp.com/handleAddToCarts/${id}`;
            // console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = addToCarts.filter(user => user._id !== id);
                        setAddToCarts(remainingUsers);
                    }
                })
        }

    }


    return (
        <div className="container" >
            <h2 className="text-center">HELLO!! YOUR PRODUCTS {addToCarts.length}</h2>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">IMAGE</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>


                {addToCarts.map((cart) => (
                    <tbody>
                        <tr>
                            <td>{cart.image}</td>
                            <td>{cart.name}</td>
                            <td>{cart.number}</td>
                            <td>  <button onClick={() => handleDelete(cart._id)}> Delete</button></td>

                        </tr>

                    </tbody>))}

            </table>





        </div >
    );
};

export default ManageOrder;