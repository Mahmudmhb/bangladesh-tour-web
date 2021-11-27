import React from 'react';
import { Link } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

const Service = ({ service }) => {
    // console.log(props.service);
    const { _id, name, number, image, small } = service;


    const onSubmitProduct = e => {
        const handleAddToCart = {
            ...service,
            name,
            number,
            image,
            small
        }
        console.log(handleAddToCart)

        fetch("https://mighty-escarpment-48291.herokuapp.com/handleAddToCarts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(handleAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Confirm Add TO Cart Go to my Order ')
                }
            });
        // {
        //     // console.log(data)
        //     // if (data.insertedId) {
        //     //     // setAddSuccess(true);

        //     // }
        //     console.log(data)
        // })
        e.preventDefault()


    }


    const detailId = `/service/${_id}`;
    return (
        <>
            <div>
                <div class="col">
                    <div class="card">
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <div> <h5 class="card-title">{name} </h5></div>
                                <div> <h5 class="card-title">$ {number} </h5></div>
                            </div>
                            <p class="card-text">{small}</p>
                            <div className="d-flex justify-content-between">
                                <div>  <Link to={detailId}> <button className="bg-danger text-white px-4">learn more</button></Link></div>
                                <div >
                                    <Link > <button onClick={onSubmitProduct} >Add To Cart</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Service;