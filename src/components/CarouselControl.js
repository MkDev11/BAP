import React from 'react';

function CarouselControlPrev(props) {
  return (
    <a className="carousel-control-prev" data-slide="prev" href="#pablo" role="button">
      <i className="tim-icons icon-minimal-left"></i>
      <span className="sr-only">Previous</span>
    </a>
  );
}

function CarouselControlNext(props) {
  return (
    <a className="carousel-control-next" data-slide="next" href="#pablo" role="button">
      <i className="tim-icons icon-minimal-right"></i>
      <span className="sr-only">Next</span>
    </a>
  );
}

export { CarouselControlPrev, CarouselControlNext };
