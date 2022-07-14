import React from 'react'
import bgimggg from "../assets/image/woodframe-01.png"
import imggg from "../assets/image/713442.png"
import imggg2 from "../assets/image/Icon ionic-md-jet.png"

function AddRemovePurchese() {
  return (
    <div>
        <div className="active__unit">
        <div className="container">
            <div className="active__inner">
                <div className="preview__title">
                    <p>Active Units 3/20</p>
                    <p>Inactive Units</p>
                </div>
                <div className="mountain__box">
                    <div className="mountain__land">
                        <div className="mountain__img">
                            <img src={imggg} alt="image"/>
                            <div className="content">
                                <h4>Mountain Land</h4>
                                    <a className="first__child" style={{color: "#E76E55"}} href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                                    <a className="last__child" style={{color: "#E76E55"}} href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                            </div>
                        </div>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <p className="middle__p">Total Stats</p>
                    <div className="score__stats">
                        <div className="state state1">
                            <span style={{color: "#fff", fontWeight: "bold"}}>Leaf Genaration</span> <br/>
                            <span style={{color: "#fff", fontWeight: "bold"}}>State Multiplier: 1.3</span> <br/>
                            <span style={{color: "#fff", fontWeight: "bold"}}>Leaf genaration: 40,000</span>
                        </div>
                        <div className="state state2">
                            <span style={{color: "#E76E55"}}>Attacking Status</span> <br/>
                            <span style={{color: "#E76E55"}}>Land 4: <br/> Air: 6</span> <br/>
                            <span style={{color: "#E76E55"}}>Underground: 10</span>
                        </div>
                        <div className="state state3">
                            <span style={{color: "#E76E55"}}>Defensive Status</span> <br/>
                            <span style={{color: "#E76E55"}}>Land 4: <br/> Air: 6</span> <br/>
                            <span style={{color: "#E76E55"}}>Underground: 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>




    <div class="box__slide">
        <div class="container">
            <div class="box__slide__inner">
                <div class="box">
                    {/* <!-- <div class="box__chg">
                        <p>202</p>
                        <div class="icons"><a href="#"><i class="fa-solid fa-plus"></i></a> <a href="#"> <i class="fa-solid fa-minus"></i></a></div>
                    </div> --> */}
                    <div class="box__pre" 
                    style={{
                        backgroundImage: `url(${bgimggg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "304px",
                        maxWidth: "391px",
                        margin: "auto",
                        position: "relative",
                    }}
                        >

                    <div class="inner__box">
                        <img src={imggg}  alt="image"/>
                    </div>

                    <div class="preview__content">
                        <div class="content">
                            <h4>Mountain Land</h4>
                            <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                            <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                        </div>
                    </div>

                    <div class="preview__button">
                        <a href="#">200 Leaf</a>
                    </div>

                </div>
                </div>
                <div class="box__btn">
                    <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div class="box">
                    {/* <!-- <div class="box__chg">
                        <p>202</p>
                        <div class="icons"><a href="#"><i class="fa-solid fa-plus"></i></a> <a href="#"> <i class="fa-solid fa-minus"></i></a></div>
                    </div> --> */}
                    <div class="box__pre" 
                   style={{
                    backgroundImage: `url(${bgimggg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "304px",
                    maxWidth: "391px",
                    margin: "auto",
                    position: "relative",
                }}
                        
                        
                        
                        >

                    <div class="inner__box">
                        <img src={imggg}  alt="image"/>
                    </div>

                    <div class="preview__content">
                        <div class="content">
                            <h4>Mountain Land</h4>
                            <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                            <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                        </div>
                    </div>

                    <div class="preview__button">
                        <a href="#">200 Leaf</a>
                    </div>

                </div>
                </div>
                <div class="box__btn">
                    <a href="#"><i class="fa-solid fa-angle-left"></i></a>
                </div>
                <div class="box">
                    {/* <!-- <div class="box__chg">
                        <p>202</p>
                        <div class="icons"><a href="#"><i class="fa-solid fa-plus"></i></a> <a href="#"> <i class="fa-solid fa-minus"></i></a></div>
                    </div> --> */}
                    <div class="box__pre" 
                  style={{
                        backgroundImage: `url(${bgimggg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "304px",
                        maxWidth: "391px",
                        margin: "auto",
                        position: "relative",
                    }}
                        >

                    <div class="inner__box">
                        <img src={imggg}  alt="image"/>
                    </div>

                    <div class="preview__content">
                        <div class="content">
                            <h4>Mountain Land</h4>
                            <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                            <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                        </div>
                    </div>

                    <div class="preview__button">
                        <a href="#">200 Leaf</a>
                    </div>

                </div>
                </div>
            </div>


            <div class="box__slide__outter">
                <div class="box">
                    {/* <!-- <div class="box__chg">
                        <p>202</p>
                        <div class="icons"><a href="#"><i class="fa-solid fa-plus"></i></a> <a href="#"> <i class="fa-solid fa-minus"></i></a></div>
                    </div> --> */}
                    <div class="box__pre" 
                    style={{
                        backgroundImage: `url(${bgimggg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "304px",
                        maxWidth: "391px",
                        margin: "auto",
                        position: "relative",
                    }}
                        >

                    <div class="inner__box">
                        <img src={imggg}  alt="image"/>
                    </div>

                    <div class="preview__content">
                        <div class="content">
                            <h4>Mountain Land</h4>
                            <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                            <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                        </div>
                    </div>

                    <div class="preview__button">
                        <a href="#">200 Leaf</a>
                    </div>

                </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default AddRemovePurchese