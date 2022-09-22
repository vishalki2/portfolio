//import logo from './logo.svg';
import './style.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import loginLogo from './log3.png';
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
const mylogin =async (e)=>{
e.preventDefault();

const userid=document.querySelector('#exampleInputEmail1').value;
const password=document.querySelector('#exampleInputPassword1').value;
console.log(userid);

 try{const response = await axios({
 method: "get",
 url:"http://localhost:8080/login",
 params:{userid},
 });
 console.log(userid);
 console.log(response.data.password);
 let p=response.data.password
 if(password===p){
  alert("login successfull")
  navigate('/Welcome',{state : response.data})
 }
 else{ alert("wrong password !!!")}
}
catch(err ) 
{
  console.log(err);
}



};

  return (
    <div >
   
    <form onSubmit={mylogin} className="logform">
    <div className="htmlm-group">
    <div className="form-group form-check">
    <img src={loginLogo} alt="BigCo Inc. logo"/>
  </div>
    <label className="lbl" htmlFor="exampleInputEmail1">!!!! Login Here !!!!</label>
       
  </div>
  <div className="htmlm-group">
  <select className="form-select" aria-label="Select Designation ">
  <option selected>Select Your Designation</option>
  <option value="1">Junior Engineer</option>
  <option value="2">Lineman</option>
 </select>
 </div>
 <div>

    <label htmlFor="exampleInputEmail1">User ID </label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User Id "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button> <button type="reset" className="btn btn-primary">Reset</button>
  <div className="form-group form-check">
    
    <label className="form-check-label" htmlFor="exampleCheck1" ><a href><u>Forgot Password</u></a></label>
  </div>
</form>
</div>



  );
}

export default Login;
