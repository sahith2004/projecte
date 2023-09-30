import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Person1Image from "./sahith_pic.jpeg";
import Person2Image from "./sahith_pic.jpeg";
import Person3Image from "./sahith_pic.jpeg";
import Person4Image from "./sahith_pic.jpeg";
import Person5Image from "./sahith_pic.jpeg";
import Person6Image from "./sahith_pic.jpeg";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/react-responsive-carousel/3.2.10/styles/carousel.min.css"
/>

const Testimonial = () => {
  const testimonials = [
    {
      image: Person1Image,
      subheading: "Akula Ashish",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: Person2Image,
      subheading: "Shashank Thupakula",
      description:
        "Suspendisse euismod arcu sed odio commodo, a vestibulum tortor viverra.",
    },
    {
      image: Person3Image,
      subheading: "Shanmukha Sahith",
      description:
        "Vestibulum tincidunt odio eu urna efficitur, in bibendum quam facilisis.",
    },
    {
      image: Person4Image,
      subheading: "Nari Karthikeya",
      description:
        "Vestibulum tincidunt odio eu urna efficitur, in bibendum quam facilisis.",
    },
    {
      image: Person5Image,
      subheading: "Nandu Swapnik",
      description:
        "Vestibulum tincidunt odio eu urna efficitur, in bibendum quam facilisis.",
    },
    {
      image: Person6Image,
      subheading: "Alice Johnson",
      description:
        "Vestibulum tincidunt odio eu urna efficitur, in bibendum quam facilisis.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonial-container">
      <h1 className="primary-heading" >
        Meet Our Team
      </h1>
      <div className="testimonial-slider-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={1500} // Slide duration in milliseconds
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-image-container">
                <img
                  src={testimonial.image}
                  alt={`Person ${index + 1}`}
                  className="testimonial-image"
                />
              </div>
              <h2 className="testimonial-subheading">
                {testimonial.subheading}
              </h2>
              <p className="testimonial-description">
                {testimonial.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
