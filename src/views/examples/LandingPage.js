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
  UncontrolledTooltip
} from "reactstrap";



// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/FHP.gif"),
    
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/GFC.jpg"),
  
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/ddegens.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
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
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />

            
              <div className="content-center">
                <Row className="row-grid justify-content-between align-items-center ">
                 <Col >
                <h3 className="text-white">
                <img lg="6" md="5"
                            alt="ghosttrapper"
                            className="ghost"
                            height="10px"
                            src= {require("assets/img/BoredApeShow-Logo.png")}
                          
                       /><div />
                  
                           </h3>
                  <div />
                <p className="text-white mb-3">
             
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-discord" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </div>
                </div>
                </Col>
                </Row>
               <Col  className="justify-content-between align-items-center" >
                <img
                  alt="..."
                  className=" justify-content-between align-items-center"
                  src={require("assets/img/GhostApeshow.png")}
                />
               </Col>
              </div> 
          
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
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
                      <Card className="card-stats upper bg-default">
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
                  <div className="pl-md-5">
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
                        - Vetting Projects, Projects Founders. <br />
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
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />

          <Container>
           <Row>
                <Col className="ml-auto mr-auto text-center col-md-8">
                <h2 className="title">About Us </h2>
                <h4 className="description">
                  In addition to providing funding for promising projects, 
                  the investors also offer their expertise and insights on the world of cryptocurrency. 
                  From blockchain technology to digital asset management,
                  "The Bored Ape Show" educates viewers on the latest trends and developments in the world of all things NFT's, de-fi, and crypto.
                </h4>
              </Col>
            </Row>
              <Row>
              <div className="carousel-team carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Container>
                      <Row>
                        <Col >
                          <h1 className="title">GhostTrapper.eth</h1>
                        
                        <Col >
                          <div className="wrapper">
                            <div className="category">
                              <strong>Position:</strong> Founder <br />
                              <strong>Experience:</strong> 10 Years
                            </div>
                            <div className="description">
                              GhostTrapper .....
                              .......
                            </div>
                            <div className="footer">
                              <a
                                href="#pablo"
                                className="btn-icon btn-round btn btn-twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                          </Col>
                          </Col>
                        <Col >
                          <img
                            alt="ghosttrapper"
                            className="ghost"
                            src= {require("assets/img/Ghost.png")}
                          
                          />
                        </Col>

                      </Row>
                      <Row>
                        <Col >
                        
                          <img
                            alt="Muka"
                            className="ghost"
                            size="100%"
                            src= {require("assets/img/missbayc.png")}
                          
                          />
                       
                          </Col>
                        <Col >
                        <h1 className="title">MissBayc</h1>
                        <Col >

                        <div className="wrapper">
                          <div className="category">
                            <strong>Position:</strong> Council Members<br />
                            <strong>Experience:</strong> 10 Years
                          </div>
                          <div className="description">
                            MissBayc.....
                            .......
                          </div>
                          <div className="footer">
                            <a
                              href="#pablo"
                              className="btn-icon btn-round btn btn-twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        </Col>
                        </Col>
                       </Row>
                      
                      <Row>
                        <Col >
                          <h1 className="title">Cqpon3</h1>
                        
                        <Col >
                          <div className="wrapper">
                            <div className="category">
                              <strong>Position:</strong> Council Member & Legal <br />
                              <strong>Experience:</strong> 10 Years
                            </div>
                            <div className="description">
                              Cqpon3.....
                              .......
                            </div>
                            <div className="footer">
                              <a
                                href="#pablo"
                                className="btn-icon btn-round btn btn-twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                          </Col>
                          </Col>
                        <Col >
                          <img
                            alt="ghosttrapper"
                            className="ghost"
                            src= {require("assets/img/Cqpone.png")}
                          
                          />
                        </Col>

                      </Row>
                      <Row>
                        <Col >
                        
                          <img
                            alt="ghosttrapper"
                            className="ghost"
                            src= {require("assets/img/BubbleQ.png")}
                          
                          />
                       
                          </Col>
                        <Col >
                        <h1 className="title">Bubble Queen</h1>
                        <Col >

                        <div className="wrapper">
                          <div className="category">
                            <strong>Position:</strong> Council Member & Graphic Artist <br />
                            <strong>Experience:</strong> 10 Years
                          </div>
                          <div className="description">
                            Bubble Queen .....
                            .......
                          </div>
                          <div className="footer">
                            <a
                              href="#pablo"
                              className="btn-icon btn-round btn btn-twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        </Col>
                      </Col>
                      </Row>
                       <Row>
                        <Col >
                          <h1 className="title">Sadica</h1>
                        
                        <Col >
                          <div className="wrapper">
                            <div className="category">
                              <strong>Position:</strong> Social Media <br />
                              <strong>Experience:</strong> 10 Years
                            </div>
                            <div className="description">
                              Sadica .....
                              .......
                            </div>
                            <div className="footer">
                              <a
                                href="#pablo"
                                className="btn-icon btn-round btn btn-twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                          </Col>
                          </Col>
                        <Col >
                          <img
                            alt="ghosttrapper"
                            className="ghost"
                            src= {require("assets/img/Sadica.png")}
                          
                          />
                        </Col>

                      </Row>
                      <Row>
                        <Col >
                        
                          <img
                            alt="Muka"
                            className="ghost"
                            size="100%"
                            src= {require("assets/img/2065.png")}
                          
                          />
                       
                          </Col>
                        <Col >
                        <h1 className="title">Mukubass</h1>
                        <Col >

                        <div className="wrapper">
                          <div className="category">
                            <strong>Position:</strong> Dev & Security <br />
                            <strong>Experience:</strong> 10 Years
                          </div>
                          <div className="description">
                            Mukubass .....
                            .......
                          </div>
                          <div className="footer">
                            <a
                              href="#pablo"
                              className="btn-icon btn-round btn btn-twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        </Col>
                        </Col>
                       </Row>
                      
                    
                    
                  
                    </Container>
                   
                </div>
              </div>
              </div>
              </Row>
              
              
         </Container>
      

        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/BAPMC.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p"></CardTitle>
                        <p className="card-category text-white"></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p"></CardTitle>
                        <p className="card-category text-white">
                          
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p"></CardTitle>
                        <p className="card-category text-white"></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Initiatives</h3>
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
                          <h6>Bored Ape Upward Mobility Program</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
        <div className="section">
          <Container>
            <Row >

              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <Col md="6">
                <Row className="align-items-center">
                  <br></br>
                  <UncontrolledCarousel items={carouselItems} />
                  <br></br>
                </Row>
                <Row>
                  <div> </div>
                </Row> 
              </Col>
                <p className="profile-description text-left">
                But it's not just about the money - "The Bored Ape Show" also showcases
                 the human stories behind the tech. 
                 From college students with big ideas to experienced professionals looking to revolutionize their industry, the show follows the entrepreneurs as they navigate the ups and downs of starting a crypto/defi/nft project.
                </p>

                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                  
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
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
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
      
        <Footer />
      </div>
    </>
  );
}


/**   
                   <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6></h6> <br />

                          
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6></h6>
                        </div>
                      </div>
                    </li>


<a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>     
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the coin{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Light Coin</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dark Coin</h4>
                        <span>Plan</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>150 messages</ListGroupItem>
                        <ListGroupItem>1000 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>350 messages</ListGroupItem>
                        <ListGroupItem>10K emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>  */