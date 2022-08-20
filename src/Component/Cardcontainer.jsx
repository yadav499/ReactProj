import './Cardcontainer.css';
function Cardcontainer(){
    return(
        <div className="card3">
  <div className="card-container">
        <div className="card-container-question">
           <h3> What is Your Name?</h3>
           </div>
        <div className="card-answer">
            <input type="text" placeholder='Enter your name' />
        </div>
        <div className="card-container-question">
           <h3> What is Your Age?</h3>
           </div>
           <div className="card-answer">
            <input type="text" placeholder='Enter your age' />
        </div>
       
       </div> 
        </div>
      
    )
}
export default Cardcontainer