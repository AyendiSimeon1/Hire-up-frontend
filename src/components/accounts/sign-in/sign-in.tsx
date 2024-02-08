const signin = () => { 
  
     return ( 
  
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
                         <div className="col-6"> 
                         <label className="form-label text-sm font-weight-medium" >First name</label> 
                      
                         </div> 
                     </div> 
                     <div className="mb-2"> 
                         <label className="form-label text-sm font-weight-medium" >Email</label> 
                         <input className="form-control" id="email" placeholder="m@example.com" /> 
                     </div> 
                     <div className="mb-2"> 
                         <label className="form-label text-sm font-weight-medium" >Password</label> 
                         <input className="form-control" id="password"  type="password" /> 
                     </div> 
                     <button className="btn btn-primary btn-block" type="submit"> 
                         Sign Up 
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
             </main> 
             </div>