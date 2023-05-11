import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';

const  Map = () =>{

    const navigate = useNavigate();
    const location = useLocation(); 


    function Handlesubmit(){
        if(location.state.no === 1){
            window.open("https://www.google.com/maps/place/25%C2%B014'02.3%22N+55%C2%B018'06.3%22E/@25.2341899,55.3013454,19.67z/data=!4m4!3m3!8m2!3d25.2339706!4d55.3017387?hl=en", "_blank")
        }

        if(location.state.no === 2){
            window.open("https://maps.app.goo.gl/MQtrverSHqjh1qSh7?g_st=ic", "_blank")
            
        }

        
        navigate('/Proceed',{state:{id:location.state.id,no:location.state.no+1}})
        
    }

    useEffect(()=>{

        

        if(location.state.no === 1){
            document.getElementById('img').setAttribute('src','./DUBAIFRAME.png')
        }

        if(location.state.no === 2){
            document.getElementById('img').setAttribute('src','./GEELYSHOWROOM.png')
        }




        // eslint-disable-next-line
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
                    <h1 className="header" >DESTINATION</h1>
                </div>

                
                <img style={{width: '330px'}} id='img' alt='xxx'/>

                <button onClick={Handlesubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
                    BEGIN JOURNEY
                </button>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Map