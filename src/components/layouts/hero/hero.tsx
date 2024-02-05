import './hero.css';
import resume from '../../../assets/resume-svg.jpg';

const Hero = () => {
    return (
      <div className='hero'>
        <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Best AI Resume Builder</h1>
            <p className="lead">
            Easily create the perfect resume for any job using our best-in-class resume builder platform.
            </p>
            <button className='btn btn-lg gradient-button'>Build Resume </button>
          </div>
          
  
          {/* SVG Column */}
          <div className="col-md-6">
            <div className="svg-containers">
              <img src={resume} width={500}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Hero;