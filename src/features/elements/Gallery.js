import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; //Allows for server-side rendering.

export default function Gallery({ children, myref, items, loop }) {
  const options = {
    items: items || 1,
    nav: false,
    rewind: true,
    loop: loop || true,
    // autoplay: true,
    // navText: ['<div class="sa-carousel-control tablet-control visible-md sa-carousel-prev"></div>',
    //     '<div class="sa-carousel-control tablet-control visible-md sa-carousel-next"></div>']
  };

  const events = {
    onDragged: function (event) { return true },
    onChanged: function (event) { return true }
  };

  return (
    <OwlCarousel ref={myref} options={options} events={events} >
      {children}
    </OwlCarousel>
  )
};
Gallery.propTypes = {};
Gallery.defaultProps = {};
