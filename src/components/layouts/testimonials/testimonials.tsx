import './testimonials.css';

interface Testimonial {
    text:string;
    author: string;
    image: string;
}

const Testimonials : React.FC = () => {
    const testimonial: Testimonial[] = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula turpis at libero vestibulum.',
            author: 'John Doe',
            image: 'https://placekitten.com/100/100', // Replace with your image URL
          },
          {
            text: 'Sed ac mauris nec odio varius ornare vel eu odio. Integer vel justo eget magna fermentum.',
            author: 'Jane Doe',
            image: 'https://placekitten.com/100/101', // Replace with your image URL
          },

    ]
    
  

    return (
        <div className='testimonial-contaner'>
            <div className="testimonial">
                <div className="testimonial-content">
                    {testimonial.map((testimonials, index) => (
                        <div key={index}>
                        <div className="testimonial-container">
                            <div className="testimonial-card">
                                <div className="testimonial-content">
                                <img src={testimonials.image} alt={testimonials.author} className="testimonial-image" />
                                <p className="testimonial-text">{testimonials.text}</p>
                                <div className="testimonial-author">
                                    <h5>{testimonials.author}</h5>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
    </div> 
        </div>
    )
}


export default Testimonials;