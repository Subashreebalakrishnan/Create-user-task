import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"



function Userview () {

    const params = useParams()
    console.log(params)


    const [searchParams,setSearchParams]= useSearchParams()
    console.log(...searchParams)

 
    const [userData,setUserData]= useState({})



    useEffect(() => {

      loadUser()

    },[])
    

    let loadUser = async () => {

      try { 

      let user = await axios.get(`https://62e0d667fa8ed271c4883635.mockapi.io/users/${params.id}`)

      console.log(user.data)

      setUserData(user.data)   
      
      } catch (error) {


        
      }
    }
    
    return (

        <div> 
          <h2>{userData.name}</h2>
          <h2>{userData.position}</h2>
          <h2>{userData.office}</h2>
          <h2>{userData.age}</h2>
          <h2>{userData.startdate}</h2>
          <h2>{userData.salary}</h2>
       </div>
       
    )


}

export default Userview