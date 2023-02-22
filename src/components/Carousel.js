import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
} from 'reactstrap';

function TeamCarousel() {

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      caption: 'Ghosttapper',
      src: require("assets/img/Ghost.png"),
      altText: 'Ghosttapper slide',
      description: 'Ghosttrapper, a leading voice in the Web3.0 world, with 10 years of industry experience. Now a Web3 enthusiast, NFT collector, BAYC Maxi, cannabis advocate, and inclusivity consultant. He strives toward making the Web3 space more welcoming and inclusive for all. With a unique combination of expertise and passion, Ghosttrapper is a sought-after commentator and advisor, inspiring others to explore the possibilities of Web3.',
      position: 'Founder',
      experience: '10 Years'
    },
    
  ];

  // Items array length
  const itemLength = items.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ?
      itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ?
      0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <Row className='align-items-center' >
          <Col md="6" py="2">
            <img src={item.src} alt={item.altText} />
          </Col>
          <Col md="6">
		  <div className="wrapper">
            <div className="carousel-caption position-relative">

              <h1 className="title">{item.caption} </h1>
              
                <p className="category">
                  <strong>Position:</strong> {item.position} <br />
                  <strong>Experience:</strong> {item.experience} 
                
				</p>
				<a href="https://twitter.com/GhosttrapperUSA" className="btn-icon btn-round btn btn-twitter">
                    <i className="fab fa-twitter align-items-center"></i>
                  </a>
				
                <p className="description">
                  {item.description}
                </p>
                

                
             
            </div>
			</div>
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <div style={{
      display: 'block', 
    }}>
    
      <Carousel previous={previousButton} next={nextButton}
        activeIndex={activeIndex}>
        {carouselItemData}
        <CarouselControl directionText="Prev"
          direction="prev" onClickHandler={previousButton} />
        <CarouselControl directionText="Next"
          direction="next" onClickHandler={nextButton} />
      </Carousel>
		</div>
	);
}

export default TeamCarousel;
