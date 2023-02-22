import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Form,
  FormGroup,
  Input,
  UncontrolledTooltip,
  CarouselItem
} from "reactstrap";
import Ghosttrapper from "components/caro/ghosttrapper.js";

import CarouselControlNext from "components/CarouselControl.js";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/FHP.gif"),
    
    altText: "Slide 1",
    caption: "Friends in High Places"
  },
  {
    src: require("assets/img/GFC.jpg"),
  
    altText: "Slide 2",
    caption: "Galaxy Fight Club"
  },
  {
    src: require("assets/img/ddegens.jpg"),
    altText: "Slide 3",
    caption: "DecentraDegens"
  }
];
const carouselItemss = [
  {
    src: Ghosttrapper,
    
    altText: "Slide 1",
    caption: "Friends in High Places"
  },
  {
    
  
    altText: "Slide 2",
    caption: "Galaxy Fight Club"
  },
  {
    
    altText: "Slide 3",
    caption: "DecentraDegens"
  }
];

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path img-center"
            src={require("assets/img/OnAir.png")} />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")} />


          <img
            alt="..."

            className="shapes squares"
            src={require("assets/img/OnAir.png")} />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")} />


          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center ">
              <Col>
                <h3 className="text-white">
                  <img
                    alt="ghosttrapper"
                    className="img-center "

                    src={require("assets/img/BoredApeShow-Logo.png")} /><div />

                </h3>
                <div />
                <p className="text-white mb-3">

                </p>

                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.twitter.com/boredapeshow"

                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://discord.gg/apb4cURFpW"

                    >
                      <i className="fab fa-discord" />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="content-center-2">
            <Col className="justify-content-between align-items-center content-center-2">
              <img
                alt="..."
                height="200"
                className=" justify-content-between img-center rounded-circle shadow-lg"
                src={require("assets/img/GhostApeshow.png")} />
            </Col>
          </div>

        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")} />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Security</CardTitle>
                                <p />
                                <p className="card-category"></p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Safety</CardTitle>
                                <p />
                                <p className="card-category"></p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Marketing</CardTitle>
                                <p />
                                <p className="card-category"></p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Diversity</CardTitle>
                                <p />
                                <p className="card-category"></p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="ml-auto mr-auto text-center col-md-8">
                    <h1>
                      Mission <br />

                    </h1>
                    <p>
                      "The Bored Ape Show" is a new show that combines the excitement and entrepreneurship of "Shark Tank"
                      with the innovative world of cryptocurrency. Each episode features aspiring crypto entrepreneurs
                      pitching their ideas to a panel of investors,
                      who are all members of the exclusive Certified Bored Ape Yacht Club.

                    </p>
                    <br />
                    <p>
                      -Vetting Projects, Projects Founders. <br />
                      -Provide Project Security services. <br />
                      -Providing Reliable trackable marketing services <br />
                    </p>
                    <br />

                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")} />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")} />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")} />


          <Row>
            <Col className="ml-auto mr-auto text-center col-md-4">
              <h2 className="title">About Us </h2>
              <h4 className="description">
                In addition to providing funding for promising projects,
                the investors also offer their expertise and insights on the world of cryptocurrency.
                From blockchain technology to digital asset management,
                "The Bored Ape Show" educates viewers on the latest trends and developments in the world of all things NFT's, de-fi, and crypto.
              </h4>
            </Col>
          </Row>
          <Container>


            <div className="container-fluid py-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <a className="h1" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span>&lt;</span>
                  </a>
                </div>
                <div className="col">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row align-items-center">
                          <div className="col-md py-2">
                            <div className="col-md-5">
                              <img
                                className="d-block-true img-fluid"
                                height="auto"
                                width="100%"
                                alt="ghosttrapper"
                                src={require("assets/img/Ghost.png").default} />
                            </div>
                            <div className="col-md-6">
                              <h1 className="title">Ghosttapper</h1>
                              <p className="wrapper">
                                <p className="category">
                                  <strong>Position:</strong> Founder <br />
                                  <strong>Experience:</strong> 10 Years
                                </p>
                                <p className="description">
                                  Ghosttrapper, a leading voice in the Web3.0 world, with 10 years of industry experience. Now a Web3 enthusiast,
                                  NFT collector, BAYC Maxi, cannabis advocate, and inclusivity consultant. he strives toward making the Web3 space more welcoming and inclusive
                                  for all. With a unique combination of expertise and passion, Ghosttrapper is a sought-after commentator
                                  and advisor, inspiring others to explore the possibilities of Web3.
                                </p>
                                <button className="">
                                  <a
                                    href="https://twitter.com/GhosttrapperUSA"
                                    className="btn-icon btn-round btn btn-twitter "
                                  >
                                    <i className="fab fa-twitter align-items-center"></i>
                                  </a>
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-5">
                            <img
                              className="d-block img-fluid"
                              alt="Muka"
                              size="100%"
                              src={require("assets/img/missbayc.png").default} />
                          </div>
                          <div className="col-md-6">
                            <h1 className="title">MissBayc</h1>
                            <div className="wrapper">
                              <div className="category">
                                <strong>Position:</strong> Council Members<br />
                                <strong>Experience:</strong> 7 Years
                              </div>
                              <div className="description">
                                MissBayc
                              </div>
                              <div className="category">
                                <a
                                  href="https://twitter.com/IamTequilaaa"
                                  className="btn-icon btn-round btn btn-twitter"
                                >
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                 
                            <div className="carousel-item ">
                              <div className="row align-items-center">
                                <div className="col-md py-2">
                                  <div className="col-md-5">
                                    <img
                                      className="d-block img-fluid"
                                      height="auto"
                                      width="100%"
                                      alt="ghosttrapper d-block img-fluid"
                                      src={require("assets/img/Cqpone.png").default} />
                                  </div>
                                  <div className="col-md-6">
                                    <h1 className="title">BoredLawyer.eth</h1>
                                    <p className="wrapper">
                                      <p className="category">
                                        <strong>Position:</strong> Council Member & Legal <br />
                                        <strong>Experience:</strong> 8 Years
                                      </p>
                                      <p className="description">
                                        Cqpon3, a Web3 Lawyer specializing in advising on legal implications of blockchain, cryptocurrency,
                                        and other emerging technologies. He offers expert guidance on regulatory compliance, contract negotiation,
                                        and dispute resolution, staying up-to-date with the latest legal developments and emerging trends to ensure projects
                                        are well-informed and protected.
                                      </p>
                                      <div className="category">
                                        <a
                                          href="https://twitter.com/cqpon3"
                                          className="btn-icon btn-round btn btn-twitter"
                                        >
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                      </div>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row justify-content-between align-items-center">
                                <div className="col-md-5">
                                  <img
                                    className="d-block img-fluid"
                                    alt="Muka"
                                    size="100%"
                                    src={require("assets/img/missbayc.png").default} />
                                </div>
                                <div className="col-md-6">
                                  <h1 className="title">Bubble Queen</h1>
                                  <div className="wrapper">
                                    <div className="category">
                                      <strong>Position:</strong> Coffee Guru and News Host <br />
                                      <strong>Experience:</strong> 3 Years
                                    </div>
                                    <p className="description">
                                      BubbleQueen, a coffee expert and news host who advocates for the use of blockcahin tech to revolutionize the coffee industry.
                                      With expertise in both fields, she is becoming a leading voice in the Web3 community, sharing insights on brewing and
                                      roasting techniques, blockchain-based supply chain management, and NFT coffee alpha.
                                    </p>
                                    <button className="category">
                                      <a
                                        href="https://twitter.com/Bubbles__Queen"
                                        className="btn-icon btn-round btn btn-twitter"
                                      >
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div Row className="justify-content-between align-items-center">
                              <div Col md={5}>
                                <img
                                  d-block img-fluid
                                  alt="ghosttrapper"
                                  className="ghost" />
                              </div>
                              <div>

                                <div Col md={5}>


                                  <div Col>
                                    <p className="wrapper">
                                      <p className="category">
                                        <strong>Position:</strong> Social Media visionary <br />
                                        <strong>Experience:</strong> 4 Years
                                      </p>
                                      <p className="description">
                                        Sadica, a visionary and influencer with expertise in social media marketing and content creation.
                                        She is passionate about using social media as a tool for social justice and empowerment, particularly in the Latinx community.
                                        As a thought leader, she highlights diverse voices and experiences, inspiring others to use social media to promote positive change
                                        and drive engagement. She is committed to inclusivity and representation, amplifying voices and sharing stories to the world.
                                      </p>
                                      <button className="category">
                                        <a
                                          href="https://twitter.com/Anniemariez"
                                          className="btn-icon btn-round btn btn-twitter"
                                        >
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                      </button>

                                      </p>                     </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>





                      </div>

                      <div className="carousel-item">
                        <div Row className="justify-content-between align-items-center">
                          <div Col md={6}>

                            <img

                              alt="ghosttrapper"
                              className="ghost d-block img-fluid"
                              src={require("assets/img/BubbleQ.png")} />

                          </div>
                          <div>
                            <div Col>
                              <h1 className="title">Mkdev</h1>
                              <Col>

                                <p className="wrapper">
                                  <p className="category">
                                    <strong>Position:</strong> Dev & Security <br />
                                    <strong>Experience:</strong> 10 Years
                                  </p>
                                  <p className="description">
                                    Mkdev, a cybersecurity professional with 9 years of experience in the government and security industries.
                                    With expertise in computer network defense, offense operations, and blockchain technology,
                                    Mkdev provides technical guidance and advice to project teams on security.
                                  </p>

                                  <a
                                    href="https://twitter.com/mukubass"
                                    className="btn-icon btn-round btn btn-twitter"
                                  >
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </p>
                          
                          
                        </Col>
                      </div>
                    </div>
                  </div>
                 
                    </div>
                  </div>
                </div>
              </div>
            

            <div class="col-md-6">
              <a className="carouselcontrolnext">
                <span>&gt;</span>
              </a>

            </div>
          
        </Container>
      </section>
      <Container md={15}>
        <img
          alt="..."
          width="600"
          height="50"
          margin-left="auto"
          margin-right="auto"

          className="shapes wave image-center"
          src={require("assets/img/waves.png")} />
      </Container>
    <section className="section section-lg section-safe">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path55.png")} />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md="5">
              <img
                alt="..."
                className="img floating img-center"
                width="500"
                height="250"
                src={require("assets/img/BAPMC.jpg")} />


            </Col>

            <Col md="6">
              <div className="px-md-5 align-items-center">
                <hr className="line-success line-center" />
                <h3 className="text-center">Initiatives</h3>
                <p>
                  To Promote a Safer & Diverse space Bored Ape Productions has implented the following initiatives
                </p>
                <ul className="list-unstyled mt-5">

                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Web3 Coffee and News: </h6><p> A latinx women-led news show that dives into all things Crypto and Web3 </p>
                      </div>

                    </div>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6> NIFTYSAFE:</h6><p> An initiative that specializes in protecting decentralized finance (DeFi) projects
                            and blockchain-based applications from security threats. We offer a range of services, including auditing,
                            vulnerability assessments, and penetration testing, to identify and mitigate potential risks to projectss. </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Bored Ape Mobility Program (B.U.M.P): </h6><p>An initiative that allows for qualified individuals from underrepresented
                            communities a pathway to earn their way to owning a coveted Bored Ape Yacht Club NFT.
                            The success of this program will benefit not only the participants but also the broader art and
                            digital asset community. </p>
                        </div>
                      </div>
                    </li>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section><section className="section section-lg">
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">

                <h1 className="profile-title text-center">Projects</h1>

                <p className="profile-description text-left">
                  It's not just about the money - "The Bored Ape Show" also showcases
                  the human stories behind the tech.
                  From college students with big ideas to experienced professionals looking to revolutionize their industry, the show follows the entrepreneurs as they navigate the ups and downs of starting a crypto/defi/nft project.
                </p>


                <Col md="6">

                </Col>
              </Col>
              <Col>
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />

                </Row>

              </Col>

            </Row>
          </Container>
        </div>
      </section><section className="section align-items-center">
        <Container>
          <Row className="ml-auto mr-auto text-center col-md-8">
            <Col>
              <Card className="card-plain ">
                <CardHeader>
                  <h1 className="profile-title text-center">Contact</h1>

                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Your Name</label>
                          <Input placeholder="Jimmy The Ape" type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Email address</label>
                          <Input placeholder="mike@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>

                      <Col md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input placeholder="Bored Ape Show" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Message</label>
                          <Input placeholder="Hello there!" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-round float-right"
                      background-image="linear-gradient (to bottom left, #706f6f, #4e0000, #403b3b)"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button"
                    >
                      Contact Us
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip341148792"
                    >
                      Can't wait for your message
                    </UncontrolledTooltip>
                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
      <Footer ></Footer>
        
    </div>
    </>

 
 );
 }
 



