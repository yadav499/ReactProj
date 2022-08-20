import './Header.css';
import {Link} from 'react-router-dom';
function Header(){
    return(
        // <div className="navbar">
        //     <img src="./C-removebg-preview.png" alt="" />
        //     <div className="navbar-link">
        //     <ul>
        //         <li><Link to='/'>Home</Link></li>
        //         <li><Link to='/syllabus'>Syllabus</Link></li>
        //         <li><Link to='/about'>About</Link></li>
        //         <li><Link to='#'>Contact US</Link></li>
                
        //     </ul>
        //     </div>
           
        // </div>
       
        <div>

<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#"><img class="imgLogo" src="C-removebg-preview.png" alt=""></a> */}
          <img src='./C-removebg-preview.png'/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    For Students
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Class 8 to 10</a></li>
                  <li><a class="dropdown-item" href="#">Class 10 to 12</a></li>
                  <li><a class="dropdown-item" href="#">Under Graduation</a></li>
                  <li><a class="dropdown-item" href="#">Post Graduation</a></li>
                 
                </ul>
              </li>
              
              <li class="nav-item">
                <a class="nav-link active" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Exams</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Available Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#aboutUs">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Contact Us</a>
              </li>
            </ul>
            
            <form action="" class="formhomeSearch" role="search">
              {/* <a href="login/loginpg.html"><input type="button" class="btn btn-outline-success navbarright1" value="Click here for login or signup"></a> */}
                
               </form> 
          </div>
        </div>
      </nav>

        </div>


      )
}
export default Header             



 