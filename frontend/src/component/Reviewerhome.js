import React from "react";

const Reviewerhome = ()=>{

        return(
           <div className={"container "}>
               <div className={"container bg-danger"}>
                   <br />
               <div className="row g-2">
                   <div className="col-md">
                       <div className="form-floating">
                           <label htmlFor="floatingInputGrid">Full Name</label>
                           <input type="email" className="form-control" id="floatingInputGrid"
                                  placeholder=""  />
                       </div>
                   </div>
                   <div className="col-md">
                       <div className="form-floating">
                           <label htmlFor="floatingInputGrid">Email address</label>
                           <input type="email" className="form-control" id="floatingInputGrid"
                                  placeholder=""  />

                       </div>
                   </div>
               </div>
               <div className="row g-2">
                   <div className="col-md">
                       <div className="form-floating">
                           <label htmlFor="floatingInputGrid">Phone Number</label>
                           <input type="email" className="form-control" id="floatingInputGrid"
                                  placeholder=""  />
                       </div>
                   </div>
                   <div className="col-md">
                       <div className="form-floating">
                           <label htmlFor="floatingInputGrid">Address</label>
                           <input type="email" className="form-control" id="floatingInputGrid"
                                  placeholder=""  />

                       </div>
                   </div>
               </div>
               <br />
               <button type="button" className="btn btn-primary btn-lg ">Update Profile</button>
                   <br /><br />
            </div>
               <br />
               <div>
                   <button type="button" className="btn btn-primary btn-lg "> View review paper</button>
                   <button type="button" className="btn btn-primary btn-lg "> View Work Shop</button>
               </div>

           </div>
        );

}
export default Reviewerhome;
