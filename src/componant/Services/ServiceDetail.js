import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const [services, setService] = useState([]);
    const { user } = useAuth()

    const initialInfo = { usertName: user.displayName, email: user.email, phone: '', }
    const [addingInfo, setAddingInfo] = React.useState({ initialInfo })

    useEffect(() => {
        fetch("https://mighty-escarpment-48291.herokuapp.com/menus")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const detail = services.find(addCart => addCart._id === serviceID)


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addingInfo }
        newInfo[field] = value;
        setAddingInfo(newInfo);

    }

    const HandleAddingForm = e => {

        const handleAddToCart = {
            ...addingInfo,
        }

        fetch('https://mighty-escarpment-48291.herokuapp.com/handleAddToCarts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(handleAddToCart)
        })
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                if (data.insertedId) {
                    alert('confirm submit ')
                }
            });




        e.preventDefault();
    }


    return (
        <div className='text-center'>
            <div class="card mb-3 " >
                <div className="row">
                    <div className="col-md-6">
                        <div class="row g-0">
                            <div >
                                <img src={detail?.image} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div >
                                <div class="card-body">
                                    <h5 class="card-title">{detail?.name}</h5>
                                    <p class="card-text">{detail?.number}</p>
                                    <p class="card-text">{detail?.driscription}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <form onSubmit={HandleAddingForm}>
                            <input
                                class="form-control "
                                onBlur={handleOnBlur} type="text" defaultValue={user.email}
                                name="email"
                            />
                            <input
                                class="form-control" type="text" defaultValue={user.displayName}
                                name="userName"
                                onBlur={handleOnBlur}
                            />
                            <input
                                class="form-control" type="text" required placeholder="your Address"
                                name="Adress"
                                onBlur={handleOnBlur}
                            />

                            <input class="form-control"
                                name="phone"
                                type="number"
                                required
                                placeholder="Phone Number"
                                onBlur={handleOnBlur} />
                            <button type="submit">SUBMIT</button>
                        </form>

                    </div>

                </div>
            </div>
            <div className="text-center mb-5">
                <Link to="/services" class="card-text "><small class="text-muted"><button>Go To Home Pge</button></small></Link>
            </div>
        </div >
    );
};

export default ServiceDetail;


