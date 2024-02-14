import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const signup = () => {
    const [ formData, setFormData] = useState ({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password1: '',
        password2: ''

    });
    
    const navigate = useNavigate();
    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/core/register/', formData);
            console.log('It was successful');
            console.log(response.data)
            navigate("/signin");

            
        } catch(error) {
            console.error('Signup failed')
        }
    }
    return (
            <form onSubmit={handleSubmit}>
            <div className="container-fluid d-flex flex-column min-vh-100 bg-light">
            <main className="container-sm py-5">
                <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="display-4 font-weight-bold">Sign Up</h1>
                    <p className="text-muted">
                    Enter your information to create an account
                    </p>
                </div>
                <div>
                    <div className="space-y-4">
                    
                    <div className="mb-2">
                        <label className="form-label text-sm font-weight-medium" >Email</label>
                        <input className="form-control" name="email" placeholder="m@example.com" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label text-sm font-weight-medium" >Username</label>
                        <input className="form-control" name="username" placeholder="m@example.com" value={formData.username} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label text-sm font-weight-medium" >Password</label>
                        <input className="form-control" name="password1"  type="password" value={formData.password1} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label text-sm font-weight-medium" >Password</label>
                        <input className="form-control" name="password2"  type="password" value={formData.password2} onChange={handleChange}/>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                        Sign Up
                    </button>
                    </div>
                    <hr className="my-4 bg-gray-100" />
                    <div className="space-y-4">
                    
                    <div className="mt-4 text-center text-sm">
                        Already have an account?
                        <a className="underline" href="#">
                        Login
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
            </form>
    )
}

export default signup;