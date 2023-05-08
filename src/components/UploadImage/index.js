import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import photos from '../Z_Styles/Photos.png'
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
    <>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent:'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', width:'50%'}}>
            <img id='head' style={{width: '100px', marginLeft: '10px'}} src={nislogo2} alt="Nissan Laptop Cover"/>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', width:'50%', textAlign: 'right', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <img id='head' style={{width: '180px', textAlign: 'right', marginRight: '10px'}} src={rostawami} alt="Nissan Laptop Cover"/>
          </div>

          

        </div>


        <div style={{display:"flex", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center", marginTop: '2vh'}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>
            
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img id='head' style={{width: '270px'}} src={nislogo} alt="Nissan Laptop Cover"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5px'}}>
                    <img id='head' style={{width: '180px', textAlign: 'right', marginRight: '10px'}} src={photos} alt="Nissan Laptop Cover"/>
                </div>

                <p style={{color: 'black', fontSize: '22px', fontWeight: '0', marginBottom: '5px', marginTop: '-15px'}}>Please upload any images taken on your expedition</p>
                
                <input title="" id="image-file" multiple accept="image/*" type="file" onChange={handleChange} style={{color: 'transparent', width:"230px",display:"",textAlign:"center",justifyContent:"center", alignItems:"center", marginBottom: '-20px'}} /> 
                <label id="name">No Image Selected</label>

                <button ref={buttonRef} id="signup" name="signup" type="submit" className="grab" style={{width:"230px",height: "50px", marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={sendData}>UPLOAD</button>
        
        </div> 
    </div>
    </>
)
}

export default UploadImage