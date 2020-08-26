import React from 'react';



function Body() {

    return <div>
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="ico ico1" src="img/stay-home.png" alt="" />
                        <h3 className="features-desc">Quarantine</h3>
                        <p className="features-para">Stay home,Stay safe.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="ico ico2" src="img/keep-distance.png" alt="" />
                        <h3 className="features-desc">Social Distancting</h3>
                        <p className="features-para">Avoid social contact.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="ico ico3" src="img/mouth-mask.png" alt="" />
                        <h3 className="features-desc">Hygiene</h3>
                        <p className="features-para">Use sanitizer,mask and maintain hygiene</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
}



export default Body;