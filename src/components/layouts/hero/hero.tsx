import './hero.css';
import resume from '../../../assets/resumes.png';

const Hero = () => {
    return (
        <div className="container mt-5">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-md-6">
            <h1 className="display-4">Build An AI Resume</h1>
            <p className="lead">
              Create a professional resume with the help of AI technology.
            </p>
            <button className='btn btn-lg gradient-button'>Gradient Button</button>
          </div>
          
  
          {/* SVG Column */}
          <div className="col-md-6">
            <div className="svg-container">
              <img src={resume} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero;