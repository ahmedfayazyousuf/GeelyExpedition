import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import photos from '../Styles&Assets/Photos.png';
import { useState } from "react";
 // eslint-disable-next-line
import firebase from "../../firbase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
 // eslint-disable-next-line
import axios from "axios";

const  UploadImage = () =>{

    const [file, setFile] = useState("");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const buttonRef = useRef(null);
     
    function handleChange(event) {
      setCount(count+event.target.files.length)
      console.log(event.target.files[0])
      
      if(count !== 0){
        document.getElementById("name").innerHTML = `${count+1} images selected`
      }
      
      for (let i = 0; i < event.target.files.length; i++) { 
        if(event.target.files.length>1){
          document.getElementById("name").innerHTML = `${count + event.target.files.length} images selected`
        }

        if(count === 0 && event.target.files.length === 1){
          document.getElementById("name").innerHTML = document.getElementById("name").innerHTML = event.target.files[i].name
        }
        // else if(i===0){
        //   document.getElementById("name").innerHTML = event.target.files[i].name
        // }


        const newImage = event.target.files[i];
        newImage["id"] = Math.random();
        setFile((prevState) => [...prevState, newImage]);
      }

    }





    function sendData (){

      buttonRef.current.disabled = true;
      document.getElementById("buttontext").innerHTML = "";

      document.getElementById("loader").style.display = "initial";
 // eslint-disable-next-line
      file.map((file,index)=>{

        //   console.log(data)
          const storage = getStorage();
          var storagePath = 'uploads/' + file.name ;
          const storageRef = ref(storage, storagePath);
          const uploadTask = uploadBytesResumable(storageRef, file);
  
          uploadTask.on('state_changed', (snapshot) => {
              // progrss function ....
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            }, 
            (error) => { 
              // error function ....
              console.log(error);
            }, 
            () => {
              // complete function ....
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                navigate('/ThankYou2')
              });
            });
    
      })
      
 
    }

return(



  <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
    <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
          <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '20px'}}>
          <img id='head' style={{width: '130px', textAlign: 'right', marginRight: '10px'}} src={photos} alt="Cover"/>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginTop: '-20px'}}>
          <p style={{color: 'white', fontSize: '13px', fontWeight: '3000', marginBottom: '15px', letterSpacing: '2px'}}>Please upload photos taken on<br></br>your journey.</p>
        </div>

        <input title="" id="image-file" multiple accept="image/*" type="file" onChange={handleChange} style={{color: 'transparent', width:"230px",display:"",textAlign:"center",justifyContent:"center", alignItems:"center", marginBottom: '-20px'}} /> 
        <label style={{color: 'white', marginTop: '15px'}} id="name">No Image Selected</label>

        <div style={{padding: '0', margin: '0',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <button ref={buttonRef} id="signup" name="signup" type="submit" className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignSelf: 'center'}} onClick={sendData}>
            <p id="buttontext" style={{margin: '0', padding: '0'}}>UPLOAD</p>
            <div id="loader" className="loader"></div>
          </button>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15px'}}>
            <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
        </div>
    </div>
  </div>

)
}

export default UploadImage