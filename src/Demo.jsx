import { useEffect, useState } from "react"

function Demo () {

    


    useEffect ( () => {

        fetch("https://62e0d667fa8ed271c4883635.mockapi.io/users").then(() => {


            console.log("Fetch");
            
           });
     },[]);

    
     useEffect ( () => {
        
        return () => {


            console.log("Destroy")

        };

       },[]);

       useEffect ( () => {

        console.log ("Timer update");
        
        
        },[timer]);


     const [timer,SetTimer]=useState(0);

    return ( <div>
           
            <button onClick={() => SetTimer(timer+1)}>+</button>
            {timer}
            <button onClick={() => SetTimer(timer-1)}>-</button>

          </div>  
    );
}  

export default Demo