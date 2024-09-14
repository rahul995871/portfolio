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
  HashRouter,Routes
} from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div className="">
      <div className="section m-0">
        <div
          className="row position-relative align-items-center justify-content-between py-5  pt-md-5 pt-0"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="portfolio-blob "></div>
          <Slider
            className="col-md-3 text-center py-4"
            asNavFor={nav2}
            ref={slider1Ref}
            arrows={false}
          >
            <div className="py-md-3 py-0 ">
              <div className="position-relative bg-secondary">
                <h4 className=" fw-bold prim-color">Pramerica.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Html | Css | Bootstrap | Javascript
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://emergingvisionaries.com/in/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            

            <div className="py-md-3 py-0">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">PayBees.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Javascript | Html | Css | Bootstrap,
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://paybees.in/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">TheFunnyMouse.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Javascript | Html | Css | Bootstrap,
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://thefunnymouse.in/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">BeatsMyTrip.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    ReactJs | Html | Css | Bootstrap,
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://beatsmytrip.com/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0 ">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">Nazia.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Html | Css | Bootstrap | Javascript
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://www.nazia.co.in/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0 ">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">MindGrove.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Html | Css | Bootstrap | Javascript | Jquery
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://www.mindgrove.ca/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0 ">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">BaronStar.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Html | Css | Bootstrap | Javascript
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://www.baronstar.net/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="py-md-3 py-0 ">
              <div className="position-relative bg-secondary ">
                <h4 className=" fw-bold prim-color">Alavaya.</h4>
                <div className="text-grey">
                  <span className="text-light fw-semibold fs-7">
                    Html | Css | Bootstrap | Javascript | Jquery
                  </span>
                </div>
                <div className="v-btn mt-2 mx-auto">
                  <a
                    target="blank"
                    href="https://www.alavyaaconstruction.com/"
                    className="text-decoration-none mb-0 mb-md-2"
                  >
                    <span>visit</span>{" "}
                    <div className="icon">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>{" "}
                  </a>
                </div>
              </div>
            </div>
          </Slider>

          <Slider
            {...settings}
            asNavFor={nav1}
            ref={slider2Ref}
            slidesToShow={3}
            arrows={false}
            swipeToSlide={true}
            focusOnSelect={true}
            autoplay={true}
            centerMode={true} // Enable center mode
            centerPadding="0px"
            className="center center-img col-md-9"
          >


            <a
              target="blank"
              href="https://emergingvisionaries.com/in/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_1.jpg")} />
            </a>
            <a
              target="blank"
              href="https://paybees.in/"
              className="text-decoration-none"
            >
              <img src={require("../images/paybees.jpg")} />
            </a>
            <a
              target="blank"
              href="https://thefunnymouse.in/"
              className="text-decoration-none"
            >
              <img src={require("../images/funnyMouse.jpg")} />
            </a>
            <a
              target="blank"
              href="https://beatsmytrip.com/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_2.jpg")} />
            </a>

            <a
              target="blank"
              href="https://www.nazia.co.in/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_3.jpg")} />
            </a>
            <a
              target="blank"
              href="https://www.mindgrove.ca/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_4.jpg")} />
            </a>
            <a
              target="blank"
              href="https://www.baronstar.net/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_5.jpg")} />
            </a>
            <a
              target="blank"
              href="https://www.alavyaaconstruction.com/"
              className="text-decoration-none"
            >
              <img src={require("../images/port_6.jpg")} />
            </a>
          </Slider>
        </div>
      </div>
    </div>
  );
}

function Home() {

  const[active,setActive]=useState('')
  console.log(active)
  return (
    <>
      {/* <div className="section m-0 p-0 home-bg ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 py-5 ">
             
              <p className="text-light title s-border position-relative px-2">
                RAHUL RAUTELA
              </p>
              <span className="text-light fs-5">I'm </span>

              <TypeAnimation
                sequence={[
                
                  "Web Designer",
               
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
                    <img src={require("../images/fb.png")} />
                  </div>
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                  <div className="social-icon-img">
                    <img src={require("../images/instagram.png")} />
                  </div>
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                  <div className="social-icon-img">
                    <img src={require("../images/linkedin.png")} />
                  </div>
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                  <div className="social-icon-img">
                    <img src={require("../images/twitter.png")} />
                  </div>
                </div>
                <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                  <div className="social-icon-img">
                    <img src={require("../images/whatsapp.png")} />
                  </div>
                </div>
              </div>

              <div className="c-btn mt-5">
                <a>
                  <span>Download CV</span>{" "}
                  <div className="icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>{" "}
                </a>
              </div>
            </div>

            <div
              className="col-md-5 py-5 	  home-blob position-relative text-center"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
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
            <HashLink to="/#qualification">
              <div>
                <img src={require("../images/resume.png")} />
              </div>
            </HashLink>

            <HashLink to="/#portfolio">
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
      </div> */}

      <div className="section m-0 pt-0 pt-md-5  home-bg ">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="row align-items-center justify-content-between">
                <div
                  className="col-md-5 py-3  order-1 order-md-0	  home-blob position-relative text-center"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                >
                  <img
                    className="position-relative px-3 py-1 my-auto"
                    src={require("../images/me22.png")}
                  />
                </div>

                <div className="col-md-5 py-5  ">
                  {/* <p className='prim-color fs-4 mb-2'>Hello, I'm</p> */}
                  <p className="text-light main-title  position-relative px-2">
                    Hi, I'm{" "}
                    <span className="prim-color text-dec">
                      RAHUL<br></br>RAUTELA.
                    </span>{" "}
                    A <br></br>
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
                        fontSize: "30px",
                        display: "inline-block",
                        color: "white",
                      }}
                      repeat={Infinity}
                    />
                  </p>

                  <span className="text-light fs-7 position-relative">
                    {" "}
                    I'm here to bring your digital visions to life. I combine a
                    passion for clean and intuitive design with the latest
                    technologies to deliver engaging user experiences. Explore
                    my work, and let's create something remarkable together."
                  </span>
                  <div className="social-icon mt-4">
                    <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                      <a
                        target="blank"
                        className="social-icon-img"
                        href="https://www.facebook.com/profile.php?id=100008840597471"
                      >
                        <img src={require("../images/fb.png")} />
                      </a>
                    </div>
                    <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                      <a
                        className="social-icon-img"
                        target="blank"
                        href="https://instagram.com/rithvik.guty?igshid=OGQ5ZDc2ODk2ZA=="
                      >
                        <img src={require("../images/instagram.png")} />
                      </a>
                    </div>
                    <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                      <a
                        className="social-icon-img"
                        target="blank"
                        href="https://www.linkedin.com/in/rahul-rautela-b61ab9237"
                      >
                        <img src={require("../images/linkedin.png")} />
                      </a>
                    </div>
                    {/* <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                <div className="social-icon-img">
                  <img src={require("../images/twitter.png")} />
                </div>
              </div> */}
                    <div className="social-icon-child animate__pulse animate__animated animate__infinite">
                      <a
                        className="social-icon-img"
                        target="blank"
                        href="https://wa.me/919958718364"
                      >
                        <img src={require("../images/whatsapp.png")} />
                      </a>
                    </div>
                  </div>
                  <div className="c-btn mt-5 position-relative">
                    <a
                      href={require("../images/my-Up.pdf")}
                      className="text-decoration-none"
                      target="blank"
                    >
                      <span>Download CV</span>{" "}
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-navbar">
          <HashRouter>
          
            <HashLink to="/#contact">
              <div >
                <img src={require("../images/contact.png")} />
              </div>
            </HashLink>
            <HashLink to="/#qualification">
              <div>
                <img src={require("../images/resume.png")} />
              </div>
            </HashLink>
            <HashLink to="/#portfolio">
              <div className="">
                <img src={require("../images/port.png")} />
              </div>
            </HashLink>
            <HashLink to="/#skills">
              <div className="">
                <img src={require("../images/skills.png")} />
              </div>{" "}
            </HashLink>
            <HashLink to="/#about">
              <div className="">
                <img src={require("../images/about.png")} />
              </div>
            </HashLink>
            <HashLink to="/#">
              <div >
                <img src={require("../images/home.png")} />
              </div>{" "}
            </HashLink>
          
          </HashRouter>
        </div>
      </div>

      {/* -------------------about---------------- */}

      <div className="section  m-0" id="about">
        <div className="container">
          <div className="row ">
            <div className="col-md-9 fs-7  ">
              <h6
                className="prim-color fw-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                MEET THE CREATOR
              </h6>
              <h1
                className="title fw-bold text-light s-border position-relative  px-2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                About Me.
              </h1>
              <p
                className="text-light lh-lg"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                Hello, I'm Rahul Rautela, a dedicated web designer and developer specializing in front-end development. With over 2 years of experience in crafting engaging and user-friendly websites, I’m passionate about creating visually appealing and responsive web interfaces. My journey in web design has allowed me to work on diverse projects that showcase my commitment to clean, modern design and seamless user experiences.

In addition to my extensive hands-on experience, I also completed a 3-month internship where I had the opportunity to work on exciting projects and further develop my skills in web development. I firmly believe in the power of creativity and technology to transform ideas into impactful digital solutions.

Thank you for visiting my portfolio website. Explore my projects and skills to see how I bring my passion for web design and development to life.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="about-card">
                <div
                  className="about-card-child"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  <div className="about-card-img mb-4">
                    <img
                      src={require("../images/web-design.png")}
                      className="animate__pulse animate__animated animate__infinite"
                    />
                  </div>
                  <div>
                    <h4 className="fs-5 lh-sm">Web Design</h4>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>
                <div
                  className="about-card-child"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <div className="about-card-img mb-4">
                    <img
                      src={require("../images/adobe-photoshop.png")}
                      className="animate__pulse animate__animated animate__infinite"
                    />
                  </div>
                  <div>
                    <h5 className="fs-5 lh-sm">PhotoShop</h5>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>

                <div
                  className="about-card-child"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <div className="about-card-img mb-4">
                    <img
                      src={require("../images/framework.png")}
                      className="animate__pulse animate__animated animate__infinite"
                    />
                  </div>
                  <div>
                    <h5 className="fs-5 lh-sm">React/Bootstrap</h5>
                    {/* <small>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.

</small> */}
                  </div>
                </div>
                <div
                  className="about-card-child"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <div className="about-card-img mb-4">
                    <img
                      src={require("../images/responsive.png")}
                      className="animate__pulse animate__animated animate__infinite"
                    />
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

      <div className="section  m-0" id="skills">
        <div className="container">
          <div className="row ">
            <div className="col-md-9 fs-7 ">
              <h6
                className="prim-color fw-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                SKILLS AT A GLANCE
              </h6>
              <h1
                className="title fw-bold text-light s-border position-relative px-2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Skills.
              </h1>
              <p
                className="text-light lh-lg"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                I have a strong foundation in front-end development, including
                proficiency in HTML5, CSS3, and JavaScript. Currently, I'm in
                the learning phase of React.js and am eager to further explore
                and work with this powerful JavaScript library in future
                projects. My skill set extends to responsive web design, UI/UX
                design principles, and web performance optimization. I'm
                well-versed in essential web development tools like Visual
                Studio Code and Git, utilizing GitHub for version control.
                Additionally, I have experience with design and prototyping
                tools such as Photoshop, which enhance my ability to create
                visually appealing and user-friendly web interfaces. Beyond my
                current skill set, I'm enthusiastic about continuously learning
                new technologies to stay at the forefront of web development
                trends.
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 mb-md-0 mb-5 mb-pb-0 pb-5">
              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
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

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
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

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
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

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="600"
              >
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

              <div
                className=""
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="600"
              >
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

            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
            >
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
      <div className="section  m-0" id="portfolio">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 fs-7">
              <h6
                className="prim-color fw-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                EXPLORE MY PORTFOLIO
              </h6>
              <h1
                className="title fw-bold  s-border position-relative text-light px-2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Projects.
              </h1>
              <p
                className="text-light lh-lg"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                Explore my showcase of projects that highlight my skills and
                expertise in web design and development. Each project is a
                testament to my commitment to creating visually stunning and
                user-friendly websites. Whether it's
                crafting responsive interfaces, optimizing performance, or
                ensuring seamless user experiences, I take pride in every
                project's success. Feel free to browse through the featured
                projects to get a glimpse of my creative solutions and technical
                proficiency. 
              </p>
            </div>
          </div>

          {AsNavFor()}
        </div>
      </div>
      {/* -------------------projects-end--------------- */}

      {/* -------------------------education---------------- */}
      <div className="section  m-0" id="qualification">
        <div className="container">
          <div className="row ">
            <div className="col-md-9 fs-7">
              <h6
                className="prim-color fw-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                MY ACADEMIC AND PROFESSIONAL STORY
              </h6>
              <h1
                className="title fw-bold text-light s-border position-relative px-2 "
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Qualification & Experience.
              </h1>
              <p
                className="text-light lh-lg"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                I bring a strong educational background and professional
                experience to my work as a web designer and developer.
                Currently, I am pursuing a BCA (Bachelor of Computer
                Applications) degree from IGNOU University, which is enhancing
                my understanding of computer science and technology.
                Additionally, I hold a diploma from Guru Nanak Dev Rohini Campus
                DSEU. My passion for web development led me to gain practical
                experience during a 1-year tenure at NebulaInfotech, where I
                focused on web designing, refining my skills in creating
                visually appealing and responsive web interfaces. Furthermore, I
                completed a 3-month internship at Cybernaut, further enhancing
                my knowledge and gaining insights into the industry's best
                practices. My qualifications, coupled with my commitment to
                continuous learning and exploration, enable me to create
                innovative and user-centric web solutions.
              </p>

              <div
                className="c-btn mt-5"
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <a
                  href={require("../images/my-Up.pdf")}
                  className="text-decoration-none"
                  target="blank"
                >
                  <span>Download CV</span>{" "}
                  <div className="icon">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="text-center">
              <h1
                className=" fw-bold prim-color s-border position-relative my-5 d-inline-block px-2 fs-3"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Qualification.
              </h1>
            </div>
            <div className="col-md-12">
              <ul className="t-ul">
                <li
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  <div className="date">Secondary School : 2013</div>
                  <div className="title text-dark">
                    MRL Senior Secondary School - Delhi
                  </div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                      {" "}
                      Passed Secondary(10 th) From C.B.S.E Board, Delhi.
                    </small>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  <div className="date">Senior Secondary School : 2019</div>
                  <div className="title text-dark">
                    National Institute of Open Schooling
                  </div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                      {" "}
                      passed 12th from science stream (Open Learning).
                    </small>
                  </div>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="1200"
                >
                  <div className="date">Delhi Polytechnic College : 2017</div>
                  <div className="title text-dark">
                    Guru Nanak Dev Institute of Technology, Rohini, Delhi.
                  </div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                      Diploma in Polymer Technology From Guru Nanak Dev
                      Institute of Technology, Rohini, Delhi.
                    </small>
                  </div>
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                >
                  <div className="date">IGNOU University: 2024</div>
                  <div className="title text-dark">
                    Indira Gandhi National Open University
                  </div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                    Bachelor of Computer Applications(BCA) from Indira Gandhi National Open University.
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="text-center">
              <h1
                className=" fw-bold prim-color s-border position-relative my-5 d-inline-block px-2 fs-3"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Experience.
              </h1>
            </div>
            <div className="col-md-12">
              <ul className="t-ul">
                <li
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1200"
                >
                  <div className="date">Cybernauts : 2022</div>
                  <div className="title text-dark">Web Designer/Front-end</div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                      3 month internship in Cybernaut as a Front-end developer.
                    </small>
                  </div>
                </li>
               
                <li
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="1200"
                >
                  <div className="date">Nebula Infotech: 2023</div>
                  <div className="title text-dark">Web Designer/Front-end</div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                      1 Year Experience in NebulaInfotech as a Web Designer
                    </small>
                  </div>
                </li>

                <li
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="1200"
                >
                  <div className="date">SDGM Technologies Pvt Ltd: 2024</div>
                  <div className="title text-dark">Web Designer/Front-end</div>
                  <div className="descr">
                    <small className="text-grey fw-semibold">
                    9 month Experience as a web designer and also worked with app
                    development(React Native)
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------education-end-------------- */}

      {/* -------------------contact--------------- */}
      <div className="section  m-0" id="contact">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 ">
              <h6
                className="prim-color fw-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                LET'S GET IN TOUCH
              </h6>
              <h1
                className="title fw-bold s-border position-relative text-light px-2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Contact Me.
              </h1>
              <p
                className="text-light"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                Feel free to drop me a message. I'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="c-icon d-md-flex d-block mt-4">
            <a
              className="c-icon-child"
              data-aos="fade-up"
              href="tel:919958718364"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <div className="c-img">
                <img src={require("../images/call.png")} />
              </div>
              <small className="fw-semibold fs-7 text-light">
                +91 9958718364
              </small>
            </a>
            <a
              className="c-icon-child"
              data-aos="fade-up"
              href="mailto:rahulsingh995871@gmail.com"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <div className="c-img">
                <img src={require("../images/email.png")} />
              </div>
              <small className="fw-semibold fs-7 text-light">
                rahulsingh995871@gmail.com
              </small>
            </a>
            <a
              className="c-icon-child"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <div className="c-img">
                <img src={require("../images/location.png")} />
              </div>
              <small className="fw-semibold fs-7 text-light">
                E-240/12 khajoori khas near<br></br>Karawal Nagar Delhi-94
              </small>
            </a>
          </div>
        </div>
      </div>
      {/* -------------------contact-end--------------- */}

      {/* -------------------footer------------------ */}
      <div className="section bg-dark m-0 py-4">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-10">
              <p className="fs-7 mb-0 text-light">
                Copyright © 2023 | Developed by{" "}
                <a
                  href="tel:919958718364"
                  className="text-white bg-primary text-decoration-none p-1 rounded"
                >
                  Rahul Rautela
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------footer-end------------------ */}
    </>
  );
}

export default Home;
