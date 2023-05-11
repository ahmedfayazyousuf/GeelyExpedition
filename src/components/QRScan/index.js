import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { useEffect, useState } from "react";
// import '../Z_Styles/Nissan.css'

import '../Styles&Assets/style.css'

import firebase from "../../firbase"
// eslint-disable-next-line
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
// eslint-disable-next-line
import axios from "axios";
import {QrReader} from "react-qr-reader";
import './qrscan.css'
import {useLocation} from 'react-router-dom';
import desterrain from '../Z_Styles/Desert Terrain.png'
import scan from '../Styles&Assets/qrsquare.png'


const QRScan = () =>{
    // eslint-disable-next-line
    const [c, setC] = useState(0);
    const [count, setCount] = useState(0);
    // eslint-disable-next-line
    const [map, setMap] = useState("");
    const navigate = useNavigate();
    // eslint-disable-next-line
    const buttonRef = useRef(null);
    const location = useLocation();

    function handleScan  (data)  {   

      const Users = firebase.firestore().collection("Users");

      if(data!=null){  
        console.log(data.text)
          if(data.text === '1'){


            if(c===0){
              Users.doc(location.state.id).update({Location1:firebase.firestore.FieldValue.serverTimestamp()})
              navigate('/map',{state:{no:1,id:location.state.id}})
            }
            
            
          }

          if(data.text === '2'){

            if(c===0){
              Users.doc(location.state.id).update({Location2:firebase.firestore.FieldValue.serverTimestamp()})
              navigate('/map',{state:{no:2,id:location.state.id}})
            }
            
          }


          if(data.text === '3'){

            var ct = new Date().getTime()

            if(c===0){
              Users.doc(location.state.id).update({Location4:firebase.firestore.FieldValue.serverTimestamp()})
              navigate('/ThankYou',{state:{no:4,id:location.state.id,ct:ct}})
            }
            setCount('3')
          }

      }
    };


      
  
    function handleError (err)  {
      console.error(err);
    };

    function Handlesubmit(){
      window.open(map, '_blank', 'noreferrer')
      document.getElementById('hide').style.visibility = 'visible'
      if(count === '5'){
        document.getElementById('hide').innerHTML = 'End Ride'
      }
      
      // document.getElementById('modal').style.visibility = 'hidden';
      // document.getElementById('back').style.visibility = 'hidden';
    }

    function Close(){
      if(count === '5'){
        navigate('/ThankYou')
      }
      document.getElementById('modal').style.visibility = 'hidden';
      document.getElementById('back').style.visibility = 'hidden';
      document.getElementById('hide').style.visibility = 'hidden';
    }


                   

    return(
      <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100%", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                <h1 className="header" >SCAN QR CODE</h1>
            </div>

            <div className="qrscan">

              <div id="modal" style={{position:'absolute', height:'250px', border:'2px solid',zIndex:'1000', width:'300px', background:'white', display:'flex', justifyContent:'center', alignItems:'center', visibility:'hidden',borderRadius:'10px'}}>
                <button id="location" style={{background:'transparent', borderRadius:'10px', width:'90px', height:'50px', marginRight:'15px', border:'2px solid'}} onClick={Handlesubmit}>View Location</button>
                <button  id="hide" style={{visibility:'hidden',background:'transparent', borderRadius:'10px', width:'100px', height:'50px', border:'2px solid'}} onClick={Close}>Scan Next Qr</button>
              </div>

              <div id="back" style={{height:'100%', width:'100vw', position:'absolute', background:'black', opacity:'0.5', zIndex:'999', visibility:'hidden'}}></div>

              <div className="scan"></div>

              <div className="scanframe" style={{zIndex:'1'}}>

                <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                  <img id='head' style={{width: '20%', zIndex: '100000000000000',marginBottom:'75px'}} src={scan} alt="Nissan Laptop Cover"/>
                </div>

                <QrReader
                    constraints = {{facingMode: 'environment'} }
                    onError={handleError}
                    onResult={handleScan}
                    videoStyle={{height:'100%',width:'97%',padding:0,left:4,top:0,alignSelf:'center'}}
                    videoContainerStyle={{height:'100%', width:'100%',left:0,padding:0}}
                    containerStyle={{height:'80%',left:'15%',width:'70%',top:0}}
                />
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
        </div>
</div>
    )
}

export default QRScan



