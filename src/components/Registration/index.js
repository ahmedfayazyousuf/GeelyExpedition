import firebase from '../../firbase';
import { useNavigate } from 'react-router-dom';
import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';

const Registration = () =>{

  const navigate = useNavigate();

  function Handlesubmit() {
    const Users = firebase.firestore().collection("Users");
    const Email = document.getElementById("email").value;
    const Number = document.getElementById("no").value;
    const Name = document.getElementById("Name").value;

    if(Name === ''){
      // buttonRef.current.disabled = false;
      document.getElementById('error').innerHTML = "PLEASE ENTER YOUR NAME"
      return;
  }

      var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (Email === "" || !Email.match(validRegex))
      {
          document.getElementById('error').innerHTML = "PLEASE ENTER A VALID EMAIL"
          return;
      }

      // eslint-disable-next-line
      if (document.getElementById("no").value === "" ){
          console.log('Hello')
          // buttonRef.current.disabled = false;
          document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
          return;
          
      }

    Users.add({
      Name:Name,
      Email:Email,
      Number:Number,
      time: firebase.firestore.FieldValue.serverTimestamp()

  }).then((doc)=>{
      navigate('/instructions',{state:{id:doc.id}})
  })

  }

    return(
      <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                <h1 className="header" style={{letterSpacing: '4px'}}>REGISTRATION</h1>
            </div>

            <div className="inputdiv">
                <input type="text" placeholder='NAME' id="Name" style={{textAlign: 'center', background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
            </div>
            
            <div className="inputdiv">
                <input type="email" placeholder='EMAIL' id='email' style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
            </div>

            <div className="inputdiv">
                <input  type="number" placeholder='971 xx xxx xxxx' id='no' style={{textAlign: 'center', background:"transparent", border:"1px solid black", width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
            </div>

            <div style={{width: '300px', height: '20px', padding: '0', margin: '0'}}>
                <p id="error" style={{color: 'red', padding: '0', margin: '0', fontSize: '10px'}}></p>
            </div>

            <button onClick={Handlesubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
                SUBMIT
            </button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
        </div>
      </div>
    )
}

export default Registration