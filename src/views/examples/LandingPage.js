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
            src={require("assets/img/OnAir.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/OnAir.png")}
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
                <img 
                            alt="ghosttrapper"
                            className="img-center "
                            
                            src= {require("assets/img/BoredApeShow-Logo.png")}
                          
                       /><div />
                  
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
               <Col  className="justify-content-between align-items-center content-center-2" >
                <img
                  alt="..."
                  height="200"
                  className=" justify-content-between img-center rounded-circle shadow-lg"
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
               <div className="carousel-team carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Container>
                    <Row>
                        <Col >
                          <h1 className="title">Ghosttapper</h1>
                        
                        <Col >
                          <div className="wrapper">
                            <div className="category">
                              <strong>Position:</strong> Founder <br />
                              <strong>Experience:</strong> 10 Years
                            </div>
                            <div className="description">
                            Ghosttrapper, a Web3 enthusiast and 10-year veteran, is a leading voice in the Web3.0 world.
                             A NFT collector and BAYC Maxi, Ghosttrapper has a deep understanding of the emerging trends in the space.
                              Beyond the Web3.0 world, Ghosttrapper is a passionate cannabis lover and advocate, promoting the benefits of it Homeopathic benefits.
                               As an inclusivity consultant, Ghosttrapper strives to make the world of Web3 a more welcoming and inclusive space for 
                               all. His unique combination of expertise and passion make Ghosttrapper a sought-after commentator and advisor, inspiring others
                                to explore the endless possibilities of Web3 .
                            </div>
                            <div className="category">
                              <a
                                href="https://twitter.com/GhosttrapperUSA"
                                className="btn-icon btn-round btn btn-twitter "
                              >
                                <i className="fab fa-twitter align-items-center"></i>
                              </a>
                            </div>
                          </div>
                          </Col>
                          </Col>
                        <Col >
                          <img 
                              
                                width="100%"
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
                        </Col>
                        </Col>
                        </Row>
                      
                       <Row>
                        <Col >
                          <h1 className="title">BoredLawyer.eth</h1>
                        
                        <Col >
                          <div className="wrapper">
                            <div className="category">
                              <strong>Position:</strong> Council Member & Legal <br />
                              <strong>Experience:</strong> 8 Years
                            </div>
                            <div className="description">
                              Cqpon3 is a Web3 Lawyer who specializes in advising clients on the legal implications of blockchain, cryptocurrency, 
                               and other emerging technologies. With a deep understanding of the Web3 landscape, 
                               Cqpon3 is able to provide expert guidance on regulatory compliance, contract negotiation, 
                               and dispute resolution. He's passionate about staying up-to-date on the latest legal developments
                                and emerging trends in the industry, ensuring that his clients are always well-informed and 
                                protected.
                            </div>
                            <div className="category">
                              <a
                                href="https://twitter.com/cqpon3"
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
                            <strong>Position:</strong> Coffee Guru and News Host <br />
                            <strong>Experience:</strong> 3 Years
                          </div>
                          <div className="description">
                          BubbleQueen is a Coffee Guru and News Host with a passion for exploring the intersection of technology and coffee.
                           With a wealth of knowledge and experience in both fields, BubbleQueen is becoming a leading voice in the Web3 community, while
                            advocating for the use of emerging technologies to revolutionize the coffee industry. As a host,
                             BubbleQueen shares their expertise on everything from coffee brewing and roasting techniques to blockchain-based supply 
                             chain management systems and NFTs for rare coffee beans. 
                          </div>
                          <div className="category">
                            <a
                              href="https://twitter.com/Bubbles__Queen"
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
                              <strong>Experience:</strong> 4 Years
                            </div>
                            <div className="description">
                            Sadica is a Latina social media visionary with a passion for harnessing the power of social media to promote positive change 
                            and drive meaningful engagement. With a background in social media marketing and content creation, 
                            Sadica brings a unique perspective and understanding of the Latinx community and its evolving relationship with social media. 
                            As an influencer and thought leader, Sadica uses her platform to inspire others to use social media as a tool for social justice 
                            and empowerment, while highlighting the diverse voices and experiences within the Latinx community. With a commitment to inclusivity 
                            and representation, Sadica is dedicated to helping others amplify their voices and share their stories with the world.
                            </div>
                            <div className="category">
                              <a
                                href="https://twitter.com/Anniemariez"
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
                        <h1 className="title">Mkdev</h1>
                        <Col >

                        <div className="wrapper">
                          <div className="category">
                            <strong>Position:</strong> Dev & Security <br />
                            <strong>Experience:</strong> 10 Years
                          </div>
                          <div className="description">
                          Mkdev is a experienced cybersecurity professional with over 9 years of cumulative experience in functional, technical,
                           and managerial roles in the government, security industries. With a strong analytical and technical skillset in 
                           computer network defense, offense operations, software engineering, and cloud infrastructure, Mkdev is familiar with a range 
                           of network security technologies and frameworks. Mkdev serves as a technical resource providing guidance and advice to project
                            team members on security, technology, and designing effective solutions.
                          </div>
                          <div className="category">
                            <a
                              href="https://twitter.com/mukubass"
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
                  className="img floating img-center"
                  width="500"
                  height="250"
                  src={require("assets/img/BAPMC.jpg")}
                />

              
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
                              vulnerability assessments, and penetration testing, to identify and mitigate potential risks to our clients' 
                              systems. </p>                         
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Bored Ape Mobility Program (B.U.M.P): </h6><p>An initiative that aims to address economic inequality and lack of representation in the art and
                             digital asset world. This program allows for qualified individuals from underrepresented
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
        </section>
        <section className="section section-lg">
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                
                <h1 className="profile-title text-center">Projects</h1>
                
                <p className="profile-description text-left">
                But it's not just about the money - "The Bored Ape Show" also showcases
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
        </section>
        <section className="section align-items-center">
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
                        background-image= "linear-gradient (to bottom left, #706f6f, #4e0000, #403b3b)"
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
      
        <Footer />
      </div>
    </>
  );
}


/**   
 * 
 * 
 *                 <div className="btn-wrapper pt-3">
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