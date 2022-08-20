/*import {useState} from 'react';*/
import Cardcontainer from './Cardcontainer';
import Cardcontainer1 from './CardContainer1';
import './Question.css';

function Question(){
    /*const ques = [
        {
            id:0, text1:"hello world"

        },
        {
            id:1, text:"Yes,I am Fine"
        }
    ]*/
   /* const [fruits,setFruits]=useState(ques);
    const clearArray=()=>{
        setFruits=([]);
    }
    */
    /*const dev=
        fruits.map((cur)=>{
            return (
            <h2>{cur.text1}</h2>
            )
        });*/
        
  
    return(
        <>
        
<div className='state'>
 <div className="greetings">
   <h2>Hii, Welcome to Career Guidance ChatBot.</h2>
</div>
    
    <Cardcontainer/> 
   

    

</div>
        </>
       
    )

}
export default Question 