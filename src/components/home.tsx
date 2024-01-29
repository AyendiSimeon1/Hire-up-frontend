import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/navbar/navbar.tsx';
import Hero from './layouts/hero/hero.tsx';
import Footer from './layouts/footer/footer.tsx';
import ResumeTemplateSlider from './layouts/templates/templates.tsx';

const Homepage:React.FC = () => {
    return(
        <>
        <Navbar />

        <Hero />

        <ResumeTemplateSlider />

        <Footer />

        
        </>
    )


}

//  #34568B #FFFFFF #343A40

export default Homepage;