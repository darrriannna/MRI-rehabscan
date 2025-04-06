import React from 'react';
import Slider from 'react-slick';
import '../styles/ad-info.css';
 // Download a small transparent Google "G" icon

const reviews = [
  {
    name: "mi ca",
    rating: 5,
    date: "1 månad sedan",
    text: "Toppenbra bemötande och snabb hjälp! Rekommenderas starkt! :) ",
    avatar: null,
  },
  {
    name: "Benjamin Sandberg",
    rating: 5,
    date: "1 månad sedan",
    text: "Professionellt och trevligt bemötande som ger snabb hjälp efter kontakt! Rekommenderas starkt!",
    avatar: null,
  },
  {
    name: "Isac Vermelin DRe",
    rating: 5,
    date: "2 veckor sedan",
    text: "Trevligt, kunnigt och engagerat bemötande. Mycket snabb hjälp. Rekommenderas.",
    avatar: null,
  },
  {
    name: "Hampus Liberg",
    rating: 5,
    date: "3 veckor sedan",
    text: "fick tid redan dag 3, snabb hjälp. Gjorde min MR i Göteborg",
    avatar: null,
  }
];

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const GoogleReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-top">
      <div className="avatar-circle">
        {review.avatar ? (
          <img src={review.avatar} alt={review.name} className="avatar-img" />
        ) : (
          <span className="avatar-initials">{getInitials(review.name)}</span>
        )}
      </div>
      <div className="review-info">
        <p className="review-name">{review.name}</p>
        <p className="review-date">{review.date}</p>
      </div>
    </div>
    <p className="review-text">{review.text}</p>
    <div className="review-bottom">
      <div className="stars">
        {'★'.repeat(review.rating)}
      </div>
      <img src='./assets/google-logo.webp' alt="Google logo" className="google-icon" />
    </div>
  </div>
);

const GoogleReviews = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true, 
  autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <GoogleReviewCard key={index} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default GoogleReviews;



  