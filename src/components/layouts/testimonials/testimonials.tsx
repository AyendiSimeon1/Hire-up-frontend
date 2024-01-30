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
        <div>
            <div className="testimonial">
                <div className="testimonial-content">
                    {testimonial.map((testimonials, index) => (
                        <div key={index}>
                        <p className="testimonial-text">{ testimonials.text}</p>
                        <p className=" testimonial-author">{ testimonials.author}</p>
                        { testimonials.image && <img src={ testimonials.image} alt={ testimonials.author} className=" testimonials-image" />}
                        </div>
                    ))}
                    
                    
                </div>
    </div> 
        </div>
    )
}


export default Testimonials;