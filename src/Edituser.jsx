import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Edituser () {


   const params = useParams ()
   const navigate = useNavigate()

    const formik= useFormik({

           initialValues : {
  
           name:"",
           position:"",
           office:"",
           age:"",
           Stardate:"",
           salary:"",
   
        },
  
        validate : (values) =>  {
  
          let errors = {};
          if (values.name===""){
           errors.name= "Please enter name "
          }
          
          if (values.position===""){
           errors.position= "Please enter position"
          }
  
           return errors;
  
           
        } ,
  
        onSubmit : async(values) => {
  
         await axios.put (`https://62e0d667fa8ed271c4883635.mockapi.io/users/${params.id}`,values)
         navigate("/Table")
        },
     });

     useEffect (() => {

       loadUser()

     },[])

     let loadUser= async () => {

      try {

        let user = await axios.get (`https://62e0d667fa8ed271c4883635.mockapi.io/users/${params.id}`)
      //   console.log(user.data)
        formik.setValues( {

           name: user.data.name,
           position: user.data.position,
           office: user.data.office,
           age: user.data.age,
           Stardate: user.data.startdate,
           salary: user.data.salary


        } )
         
      } catch (error) {
         
      }


     }
  
     return (
     <>
     <div className="container">
         <form onSubmit={formik.handleSubmit}>
         <div className="row">
        
           <div className="col-lg-6">
              <label>name</label>
                <input className="form-control"
                 type={"text"}  
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                
                />
                <span style={{color:'red'}}>{formik.errors.name}</span>
             </div>
  
  
             <div className="col-lg-6">
              <label>position</label>
                <input className="form-control" 
                type={"text"}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position" 
                 />
                 <span style={{color:'red'}}>{formik.errors.position}</span>
             </div>
              
             <div className="col-lg-6">
              <label>office</label>
                <input className="form-control" type={"text"}
                 value={formik.values.office}
                 onChange={formik.handleChange}
                 name="office"
                
                
                />
             </div>
  
             <div className="col-lg-6">
              <label>age</label>
                <input className="form-control" type={"text"}
                 value={formik.values.age}
                 onChange={formik.handleChange}
                 name="age"   />
             </div>
              
             <div className="col-lg-6">
              <label>Stardate</label>
                <input className="form-control" type={"text"}
                value={formik.values.Stardate}
                onChange={formik.handleChange}
                name="Stardate" 
                
                />
             </div>
  
             <div className="col-lg-6">
              <label>salary</label>
                <input className="form-control" type={"text"}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary" 
                
                />
             </div>
  
             <div className="col-lg-6 mt-2">
              
                <input className="btn-primary" type={"submit"} value="Submit" disabled={!formik.isValid}/>
             </div>
           </div>
        </form>
     </div>
     </>
     )
  
  }





export default Edituser