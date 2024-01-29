import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Template {
  image: string;
  title: string;
  description: string;
}

const ResumeTemplateSlider: React.FC = () => {
  const templates: Template[] = [
    {
      image: 'template1.jpg',
      title: 'Professional Resume',
      description: 'This template emphasizes skills and work experience.',
    },
    {
      image: 'template2.jpg',
      title: 'Creative CV',
      description: 'A visually appealing template with a creative layout.',
    },
    // Add more templates as needed
  ];

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        {templates.map((template, index) => (
          <div key={index}>
            <img src={template.image} alt={template.title} className="img-fluid" />
            <div className="carousel-caption">
              <h5>{template.title}</h5>
              <p>{template.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResumeTemplateSlider;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}
