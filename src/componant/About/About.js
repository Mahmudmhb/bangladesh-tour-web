import React from 'react';

const About = () => {
    return (
        <div>
            <img src="https://www.hplbd.com/images/pagebanners/mission-vision-values.jpg" width="100%" alt="" />
            <div className=" d-flex row mx-5 text-center p-5">
                <div className="col-lg-6 col-12">
                    <h2>Mission, Vision, Values</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Mission</button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    To preserve and improve patients health by consistently delivering high quality, safe and effective pharmaceutical products and services that meet customer expectations across the globe through current good manufacturing practices, state of the art technology, competent workforce and efficient management.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Vision
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    To be the leading pharmaceuticals company in Bangladesh in terms of expertise, innovation and responsible entrepreneurship. We want to make visible presence in international markets with our high quality products & services.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Values
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">

                                    - Respect people
                                    - Ensure Justice
                                    - Innovative approach
                                    - Delight customers
                                    - Responsible operations

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <h2>Company Profile</h2>
                    <p>

                        Healthcare Pharmaceuticals limited (HPL) is one of the best kinds of company in the pharmaceutical industry in Bangladesh manufacturing branded generic products for local and overseas market in Asia, Africa and CIS region. HPL adopting the most recent technology to formulate and to produce generic formulation ensuring optimum quality compared to the international brands.

                        Healthcare started its operation in 1988 through establishing a company named Healthcare Distribution Limited in association with Roche (Bangladesh) Limited. Until 2001 Healthcare was responsible for importing and distributing Roche products to the local market.

                        Later on, in 1996 Healthcare decided to establish its own pharmaceutical plant named Healthcare Pharmaceuticals Limited (HPL) to produce the products those are imported from Roche, Switzerland and other local generics for indigenous market.

                        HPL is now producing more than two hundred products for its own with various types of dosage forms which include Tablets, Capsules, Liquids, Dry syrups, Cream & Ointments, Gels, Small Volume Parenterals, Eye Drops covering almost all therapeutic classes where a lot of products are in the launching pipeline. HPL wishes to launch Prefilled Syringes, Lyophilized Vials and Meter Dose Inhalers (MDI) preparations to its product portfolio by the second quarter of this year.

                        Healthcare Pharmaceuticals limited is engaged with strategic marketing process which involves building customer relationships by creating and delivering superior customer value aiming to produce high customer equity. HPL successfully and efficiently blending skilled people, resources, organizational structure and decisions for implementing strategies at all levels.

                        HPL is continuously creating innovative idea to its every step of operation to add distinctiveness and competitiveness to the products and services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;