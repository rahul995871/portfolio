import { TypeAnimation } from "react-type-animation";
import "../components/Home.css";

import Slider from "react-slick";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  BrowserRouter,
  Router,
  Route,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";


function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div className="">

<div className="section m-0">
<div className="row position-relative align-items-center justify-content-between py-5  pt-md-5 pt-0"data-aos="zoom-in"data-aos-delay="50"
    data-aos-duration="1000">
            <div className="portfolio-blob "></div>
            <Slider className="col-md-3 text-center py-4" asNavFor={nav2} ref={slider1Ref}>
        
      <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">Pramerica.</h4>
              <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">Html, Css, Bootstrap, Javascript</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
              
            </div>
            </div>


            <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">BeatsMyTrip.</h4>
             <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">ReactJs, Html, Css, Bootstrap,</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
            </div>
            </div>

            <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">Nazia.</h4>
             <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">Html, Css, Bootstrap, Javascript</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
            </div>
            </div>

            <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">MindGrove.</h4>
             <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">Html, Css, Bootstrap, Javascript, Jquery</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
            </div>
            </div>

            <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">BaronStar.</h4>
             <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">Html, Css, Bootstrap, Javascript</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
            </div>
            </div>

            <div className="py-md-3 py-0 bg-light">
            <div className="position-relative bg-light ">
         
              <h4 className=" fw-bold prim-color">Alavaya.</h4>
             <div className="text-grey">
                <span className="text-dark">Technology: </span> <span className="text-dark fw-semibold fs-7">Html, Css, Bootstrap, Javascript, Jquery</span>
              </div>
              <div className="v-btn mt-2 mx-auto">
              <a >VISIT</a>
              </div>
            </div>
            </div>


            
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2Ref}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        centerMode={true} // Enable center mode
        centerPadding="0px" 
        className="center center-img col-md-9"
        
      >
         <div><img src={require('../images/port_1.jpg')}/></div>
         <div><img src={require('../images/port_2.jpg')}/></div>
        
         <div><img src={require('../images/port_3.jpg')}/></div>
         <div><img src={require('../images/port_4.jpg')}/></div>
         <div><img src={require('../images/port_5.jpg')}/></div>
         <div><img src={require('../images/port_6.jpg')}/></div>
      </Slider>

      
          </div>
</div>

      
      
    
     
    </div>
  );
}

function Home() {



  return (
    <>
    

      <div className="section m-0 p-0 home-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 py-5 ">
              {/* <p className='prim-color fs-4 mb-2'>Hello, I'm</p> */}
              <p className="text-light title s-border position-relative px-2">RAHUL RAUTELA</p>
              <span className="text-light fs-5">I'm </span>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Designer",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1900,
                ]}
                wrapper="p"
                speed={50}
                style={{
                  fontSize: "1.4em",
                  display: "inline-block",
                  color: "#b46e3c",
                }}
                repeat={Infinity}
              />

            <div className="social-icon mt-4">
              
            <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                    <div className="social-icon-img">
                    <img src={require('../images/fb.png')}/>
                    </div>
                    
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                    <div className="social-icon-img">
                    <img src={require('../images/instagram.png')}/>
                    </div>
                    
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                    <div className="social-icon-img">
                    <img src={require('../images/linkedin.png')}/>
                    </div>
                    
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                    <div className="social-icon-img">
                    <img src={require('../images/twitter.png')}/>
                    </div>
                    
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                    <div className="social-icon-img">
                    <img src={require('../images/whatsapp.png')}/>
                    </div>
                    
                </div>
            </div>

            </div>

            <div className="col-md-5 py-5 	  home-blob position-relative text-center" data-aos="zoom-in"data-aos-delay="50"
    data-aos-duration="1200">
              <img
                className="position-relative"
                src={require("../images/me3.png")}
              />
            </div>
          </div>
        </div>
        <div className="c-navbar">
          <BrowserRouter>
            <HashLink to="/#">
              <div>
                <img src={require("../images/home.png")} />
              </div>{" "}
            </HashLink>
            <HashLink to="/#about">
              <div>
                <img src={require("../images/about.png")} />
              </div>
            </HashLink>
            <HashLink to="/#skills">
              <div>
                <img src={require("../images/resume.png")} />
              </div>
            </HashLink>

            <HashLink to="/#skills">
              <div>
                <img src={require("../images/port.png")} />
              </div>
            </HashLink>
            <HashLink to="/#skills">
              <div>
                <img src={require("../images/contact.png")} />
              </div>
            </HashLink>
          </BrowserRouter>
        </div>
      </div>

      {/* -------------------about---------------- */}

      <div className="section bg-light m-0" id="about">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 ">
              <h6 className="text-grey fw-semibold" data-aos="fade-right"
     data-aos-delay="200"
    data-aos-duration="1200">GET ME KNOW</h6>
              <h1 className="title fw-bold prim-color s-border position-relative text-dark px-2" data-aos="fade-right"
     data-aos-delay="400"
    data-aos-duration="1200">About Me.</h1>
              <p className="text-grey"data-aos="fade-right"
     data-aos-delay="500"
    data-aos-duration="1200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis sapiente ipsum dolorum dicta eaque cumque inventore
                molestias, beatae ea quaerat alias accusamus voluptas autem!
                Alias odit voluptates in totam vitae dignissimos minus eaque
                culpa unde tempore dolore aperiam obcaecati voluptatum aliquam
                corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum
                doloribus.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="about-card">
                <div className="about-card-child"data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                  <div className="about-card-img mb-1">
                    <img src={require("../images/web-design.png")} className="animate__pulse animate__animated animate__infinite" />
                  </div>
                  <div>
                    <h4 className="fs-5 lh-sm">Web Design</h4>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>
                <div className="about-card-child"data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                  <div className="about-card-img mb-1">
                    <img src={require("../images/adobe-photoshop.png")} className="animate__pulse animate__animated animate__infinite"/>
                  </div>
                  <div>
                    <h5 className="fs-5 lh-sm">PhotoShop</h5>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>

                <div className="about-card-child"data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                  <div className="about-card-img mb-1">
                    <img src={require("../images/framework.png")} className="animate__pulse animate__animated animate__infinite"/>
                  </div>
                  <div>
                    <h5 className="fs-5 lh-sm">React/Bootstrap</h5>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>
                <div className="about-card-child"data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
                  <div className="about-card-img mb-1">
                    <img src={require("../images/responsive.png")} className="animate__pulse animate__animated animate__infinite"/>
                  </div>
                  <div>
                    <h5 className="fs-5 lh-sm">
                      Responsive<br></br>Design
                    </h5>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------about-end---------------- */}

      {/* -------------------skills---------------- */}

      <div className="section bg-secondary m-0" id="skills">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 ">
              <h6 className="text-grey fw-semibold"data-aos="fade-right"
     data-aos-delay="200"
    data-aos-duration="1200">Explore my skills</h6>
              <h1 className="title fw-bold prim-color s-border position-relative px-2"data-aos="fade-right"
     data-aos-delay="400"
    data-aos-duration="1200">Skills.</h1>
              <p className="text-light"data-aos="fade-right"
     data-aos-delay="500"
    data-aos-duration="1200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis sapiente ipsum dolorum dicta eaque cumque inventore
                molestias, beatae ea quaerat alias accusamus voluptas autem!
                Alias odit voluptates in totam vitae dignissimos minus eaque
                culpa unde tempore dolore aperiam obcaecati voluptatum aliquam
                corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum
                doloribus.
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 mb-md-0 mb-5 mb-pb-0 pb-5">
              <div className="mb-4"data-aos="fade-up"
     data-aos-delay="200"
    data-aos-duration="600">
                <div className="d-flex justify-content-between mb-2">
                  {" "}
                  <small className="text-light fw-semibold">HTML</small>{" "}
                  <small className="text-light">95%</small>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar " style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="mb-4"data-aos="fade-up"
     data-aos-delay="400"
    data-aos-duration="600">
                <div className="d-flex justify-content-between mb-2 ">
                  {" "}
                  <small className="text-light fw-semibold">CSS</small>{" "}
                  <small className="text-light fw-semibold">75%</small>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="mb-4"data-aos="fade-up"
     data-aos-delay="600"
    data-aos-duration="600">
                <div className="d-flex justify-content-between mb-2 ">
                  {" "}
                  <small className="text-light fw-semibold">
                    BOOTSTRAP
                  </small>{" "}
                  <small className="text-light fw-semibold">85%</small>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="mb-4" data-aos="fade-up"
     data-aos-delay="800"
    data-aos-duration="600">
                <div className="d-flex justify-content-between mb-2 ">
                  {" "}
                  <small className="text-light fw-semibold">
                    REACT JS
                  </small>{" "}
                  <small className="text-light fw-semibold">75%</small>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className=""data-aos="fade-up"
     data-aos-delay="800"
    data-aos-duration="600">
                <div className="d-flex justify-content-between mb-2 ">
                  {" "}
                  <small className="text-light fw-semibold">
                    JAVASCRIPT
                  </small>{" "}
                  <small className="text-light fw-semibold">70%</small>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "70%" }}></div>
                </div>
              </div>

            
            </div>

            <div className="col-md-5"data-aos="fade-left"
     data-aos-delay="500"
    data-aos-duration="500">
              <img
                className="img-fluid"
                src={require("../images/skills.svg")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------skills-end---------------- */}


      {/* -------------------projects--------------- */}
      <div className="section bg-light m-0" id="about">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 ">
              <h6 className="text-grey fw-semibold"data-aos="fade-right"
     data-aos-delay="200"
    data-aos-duration="1200">GET ME KNOW</h6>
              <h1 className="title fw-bold prim-color s-border position-relative text-dark px-2"data-aos="fade-right"
     data-aos-delay="400"
    data-aos-duration="1200">Projects.</h1>
              <p className="text-grey"data-aos="fade-right"
     data-aos-delay="500"
    data-aos-duration="1200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis sapiente ipsum dolorum dicta eaque cumque inventore
                molestias, beatae ea quaerat alias accusamus voluptas autem!
                Alias odit voluptates in totam vitae dignissimos minus eaque
                culpa unde tempore dolore aperiam obcaecati voluptatum aliquam
                corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum
                doloribus.
              </p>
            </div>
          </div>

          {AsNavFor()}
         
        </div>
      </div>
       {/* -------------------projects-end--------------- */}

      
    </>
  );
}

export default Home;
