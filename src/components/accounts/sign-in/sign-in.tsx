import axios from 'axios';
import { useState } from 'react';
import { useAuth }  from '../../../authContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => { 
    const { user, login, logout } = useAuth();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChange = (e:any) => {       
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        await axios.post('http://localhost:8000/core/login/', userData)
            .then(response => {
                console.log('Success:', response.data);
                login(response.data.user);
                console.log('User:', user);
                const userEmail = response.data.user.email;
                console.log('User email:', userEmail);

                navigate('/');
              }).catch(error => {
                console.error('Error:', error)
            });

            
        }
  
     return ( 
        <div>
            {user ? (
                <div>
                <p>Welcome, {user.email}!</p>
                <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                <form onSubmit={handleSubmit}>
             <div className="container-fluid d-flex flex-column min-vh-100 bg-light"> 
             <main className="container-sm py-5"> 
                 <div className="mx-auto max-w-sm space-y-6"> 
                 <div className="space-y-2 text-center"> 
                     <h1 className="display-4 font-weight-bold">Sign In</h1> 
                     <p className="text-muted"> 
                     Enter your information to Sign In 
                     </p> 
                 </div> 
                 <div> 
                     <div className="space-y-4"> 
                     <div className="row g-4"> 
                     <div className="mb-2"> 
                         <label className="form-label text-sm font-weight-medium" >Email</label> 
                         <input className="form-control" name="email" onChange={handleChange} value={userData.email} /> 
                     </div> 
                     <div className="mb-2"> 
                         <label className="form-label text-sm font-weight-medium" >Password</label> 
                         <input className="form-control" name="password"  type="password" onChange={handleChange} value={userData.password} /> 
                     </div> 
                     <button className="btn btn-primary btn-block" type="submit"> 
                         Sign In 
                     </button> 
                     </div> 
                     <hr className="my-4 bg-gray-100" /> 
                     <div className="space-y-4"> 
  
                     <div className="mt-4 text-center text-sm"> 
                         Don't  have an account? 
                         <a className="underline" href="/signup"> 
                         Login 
                         </a> 
                     </div> 
                     </div> 
                 </div> 
                 </div> 
                 </div>
             </main> 
             </div>
             </form>
             </div>
            )}
            </div>
    
        
             
             )}

export default Signin;