import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="text-center">
            <Services></Services>
            {/* <Service product={product}></Service> */}
            <div className="row ">
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/patients.png" width="200px" alt="" />
                    <h3>PATIENTS</h3>
                    <p>Learn about our trusted care.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/clinicians.png" width="200px" alt="" />
                    <h3>CLINICIANS</h3>
                    <p>Grow with us as an employee.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/partners.png" width="200px" alt="" />
                    <h3>PARTNERS</h3>
                    <p>Work with us for better patient care.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
            </div>
            <div class="row   bg-secondary mt-4 mb-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://cdn.tourradar.com/s3/content-pages/2326/420x306/yxE3Eq.jpg" class="card-img-top img-fluid" width="250px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Group Tours & Trips</h5>
                            <p class="card-text">Encompassing everything from all-inclusive river cruises right down to quick camping getaways, it's safe to say that group tours have gotten a serious upgrade! From luxury feature stays in European castles and private dinner shows, to budget safaris that perfectly encapsulate the very essence of adventure. Wherever it may be, a group trip guarantees a hassle-free experience with travellers who are just as excited as you are.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-2">
                        <img src="https://cdn.tourradar.com/s3/content-pages/521/852x720/CjnvL4.jpeg" class="card-img-top img-fluid" width="250px" height="350px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Self-guided cultural tours</h5>
                            <p class="card-text">For an immersive experience that allows you to make the most of your time in a city choose a self-guided cultural tour. Enjoy travelling at your own pace along with the perks of a tour: expert tips and hand-picked accomodation. Wherever it may be, a group trip guarantees a hassle-free experience with travellers who are just as excited as you are. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://cdn.tourradar.com/s3/tour/360x210/107686_f26dd3.jpg" class="card-img-top img-fluid" width="250px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">The most popular month for these tours is May</h5>
                            <p class="card-text">Find an Self-Guided adventure that explores Spain. There are tours to choose from, that range in length from 3 days up to 36 days. Wherever it may be, a group trip guarantees a hassle-free experience with travellers who are just as excited as you are. The most popular month for these tours is May, which has the most tour departures. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;