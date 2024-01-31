import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './templates.css';
import 'slick-carousel/slick/slick-theme.css';

import template1 from '../../../assets/template1.jpg';
import template2 from '../../../assets/template2.jpg';
import template3 from '../../../assets/template3.jpg';


interface Template {
    image: string;
    title: string;
    description: string;
    link:string;
  }
  
  const ResumeTemplateSlider: React.FC = () => {
    const templates: Template[] = [
      {
        image: template1,
        title: 'Professional Resume',
        description: 'This template emphasizes skills and work experience.',
        link: '/',
      },
      {
        image: template2,
        title: 'Creative CV',
        description: 'A visually appealing template with a creative layout.',
        link: '/'
      },
      {
        image: template2,
        title: 'Creative CV',
        description: 'A visually appealing template with a creative layout.',
        link: '/',
      },
    
      // Add more templates as needed
    ];
  
    const settings: SliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,  // Display 4 items at a time
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,  // Adjust the number of items for smaller screens
          },
        },
      ],
    };
  
    return (
      <div className="container mt-5">
        <Slider {...settings}>
          {templates.map((template, index) => (
            <div key={index}>
              <img
                src={template.image}
                alt={template.title}
                className="img-fluid"
              />
              <div className="carousel-caption">
                
                <button className='btn btn-secondary'>
                  <a href={template.link} target="_blank" rel="noopener noreferrer">Use Template</a>
                  </button>
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
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow: number;
      };
    }>;
  }