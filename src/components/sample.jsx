import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const destinationsData = [
  { id: 1, name: 'Haa Alif Atoll', count: '12,156', img: 'assets/images/top-destination-img/destination1.jpg' },
  { id: 2, name: 'Haa Dhaalu Atoll', count: '5,148', img: 'assets/images/top-destination-img/destination2.jpg' },
  { id: 3, name: 'Shaviyani Atoll', count: '6,143', img: 'assets/images/top-destination-img/destination3.jpg' },
  { id: 4, name: 'Noonu Atoll', count: '2,589', img: 'assets/images/top-destination-img/destination4.jpg' },
  { id: 5, name: 'Raa Atoll', count: '1,786', img: 'assets/images/top-destination-img/destination5.jpg' },
];

const DestinationCard = ({ destination }) => (
  <div className="item">
    <a href="#">
      <div className="top-destinations-box">
        <div className="top-destinations-img">
          <img src={destination.img} alt={destination.name} />
        </div>
        <div className="top-destinations-details">
          <h5>{destination.name}</h5>
          <p>{destination.count} accommodations</p>
          <a href="#" className="top-destinations-btn">View Details</a>
        </div>
      </div>
    </a>
  </div>
);

const TopDestinations = () => {
  const settings = {
    className: "owl-carousel",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="top-destinations-info-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading-info-area" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <h5>Top Destinations</h5>
                <h2>Top Rooms Destinations to Explore</h2>
              </div>
              <div className="top-destinations-btn-info">
                <a href="#">View all Destination <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            
            <div className="top-destinations-info">
              <div className="carousel-wrap">
                <Slider {...settings}>
                  {destinationsData.map(destination => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
