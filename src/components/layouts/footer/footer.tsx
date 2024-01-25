
const Footer = () => {
    return (
        <footer className="bg-light">
        <div className="container">
            <div className="row pt-4">
                <div className="col-md-4 mb-4">
                    <h5>Contact Us</h5>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Facebook</a></li>
                        <li><a href="#" className="text-white">Twitter</a></li>
                        <li><a href="#" className="text-white">LinkedIn</a></li>
                        <li><a href="#" className="text-white">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bg-secondary text-center p-3">
            © 2024 Your Company. All rights reserved.
        </div>
    </footer>
    )
}

export default Footer;