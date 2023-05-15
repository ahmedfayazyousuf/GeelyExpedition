import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import firebase from "../../firbase"

const  ThankYou = () =>{

    // const navigate = useNavigate();
    const location = useLocation();


    // function Handlesubmit(){
    //     navigate('/qrscan',{state:{id:location.state.id}})
        
    // }
    useEffect(()=>{
      const Users = firebase.firestore().collection("Users");
      
      Users.doc(location.state.id).get().then((doc)=>{
        const data = doc.data()
        var l1 = new Date(data.Location1.seconds*1000).getTime()
        var l2 = new Date(data.Location2.seconds*1000).getTime()
        // var l3 = new Date(data.Location3.seconds*1000).getTime()
        var l4 = location.state.ct
// eslint-disable-next-line
        var nikki = 0
        
        console.log(l1)
        var h = l2-l1 // m - h
        var h2 = l4 - l2 // h - d
        // var h3 = l4 -l3
        var m1 = Math.floor(h/60/1000);
        var m2 = Math.floor(h2/60/1000)
        // var m3 = Math.floor(h3/60/1000)

        document.getElementById('d1').innerHTML = `${m1} min`
        document.getElementById('d2').innerHTML = `${m2} min`
        // document.getElementById('d3').innerHTML = `${m3} min`
        document.getElementById('total').innerHTML = `${m1+m2} min`


      },[])
      // eslint-disable-next-line
    },[])
return(

  <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
    <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
      
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
          <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
          <h1 className="header" style={{letterSpacing: '4px'}}>FINISHED</h1>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', width: '100vh', gap:'5px', alignItems: 'center', justifyContent:'center'}}>
        <p style={{color: 'white', fontSize: '14px', fontWeight: '900', marginBottom: '-10px', marginTop: '-2px', letterSpacing: '2.5px'}}>YOUR JOURNEY IS NOW COMPLETE.</p>
        <p style={{color: 'white', fontSize: '14px', fontWeight: '0', marginBottom: '40px'}}>Thank you for participating.</p>
        <div style={{borderRadius:'10px',border:'1px solid white',maxwidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px', backgroundColor: '#002277', padding: '10px'}}>
          
          <table style={{borderCollapse: 'collapse', fontSize: '12px', width: '100%', maxWidth: '380px'}}>

            <tr style={{padding: '5px', borderBottom: '1px solid white'}}>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '10px', paddingTop: '0'}}>Start Location</th>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '10px', paddingTop: '0'}}>End Location</th>
              <th style={{color: 'white', fontWeight: '900', padding: '10px', paddingTop: '0'}}>Time Taken</th>
            </tr>       

            <tr style={{padding: '5px'}}>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Geely UAE Showroom</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Museum of the Future</td>
              <td style={{padding: '10px', color: 'white'}}  id='d1'>y secs</td>
            </tr>

            <tr style={{padding: '5px'}}>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Museum of the Future</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Dubai Frame</td>
              <td style={{padding: '10px', color: 'white'}}  id='d2'>x secs</td>
            </tr>

            <tr style={{padding: '5px'}}>
              <td style={{borderRight: '1px solid white'}}></td>
              <td style={{padding: '10px', color: 'white', fontWeight: '900', borderRight: '1px solid white'}}>TOTAL</td>
              <td style={{padding: '10px', color: 'white', fontWeight: '900'}} id='total'>z secs</td>
            </tr>

          </table>

        </div>  
      </div> 
      
      <Link to={{pathname:`/uploadimage`}}>
        <button style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
            UPLOAD JOURNEY
        </button>
      </Link>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
          <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
      </div>
    </div>
  </div>
)
}

export default ThankYou