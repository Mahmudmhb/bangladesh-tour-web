import React, { useEffect, useState } from 'react';
import Service from './Service';
// import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://mighty-escarpment-48291.herokuapp.com/menus")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const handleAddTOCart = product => {
        console.log('clickd')
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className="m-5 p-5">
            <h1 className="text-danger 
            p-3">What is a self-guided tour?</h1>

            <p>On a self-guided tour, you'll have everything you need at your fingertips courtesy of detailed trip notes, but with the added freedom to pick and choose what you want to do and when. You could be hiking and trekking, or road-tripping, or city-hopping, all at your own pace with the luxury of knowing a tour operator will have your back whenever you need assistance or advice!</p>
            <h1 className="text-danger 
            p-3">And who is it for?</h1>
            <p>For experienced travellers who are looking for new challenges. If you find yourself a little overwhelmed planning trips or thinking up things to do, a self-guided tour is great!

                For families travelling with children. Kids have their own schedule and travelling as part of a tour group doesn't always align with that. A self-guided tour will give the whole family plenty of options and things to do, without the pressure of having to stick to someone else's schedule.

                For groups of friends who want to enjoy each others company. Travelling with friends is fun, and a self-guided tour will take the hassle of planning away, leaving all of you free to do what you do best: enjoy each other's company! </p>

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleAddTOCart={handleAddTOCart}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;