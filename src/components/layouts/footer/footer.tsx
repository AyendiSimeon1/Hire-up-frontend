
const Footer = () => {
    return (
        
        <footer className="bg-light">
        <div className="container">
            <div className="row pt-4">
                <div className="col-md-4 mb-4">
                    <h5>Contact Us</h5>
                    <p>Email: info@example.com</p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bg-white text-center p-3">
            © 2024 Your Company. All rights reserved.
        </div>
    </footer>
    )
}

export default Footer;