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
            window.open("https://www.google.com/maps?q=25.119007110595703,55.46257019042969&z=17&hl=en", "_blank")
        }

        if(location.state.no === 2){
            window.open("https://www.google.com/maps?q=25.233905792236328,55.30161666870117&z=17&hl=en", "_blank")
        }

        
        navigate('/Proceed',{state:{id:location.state.id,no:location.state.no+1}})
        
    }

    useEffect(()=>{

        

        if(location.state.no === 1){
            document.getElementById('img').setAttribute('src','./XPLORE.png')
        }

        if(location.state.no === 2){
            document.getElementById('img').setAttribute('src','./XPAND.png')
        }




        // eslint-disable-next-line
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                    <h1 className="header" >LOCATION 1</h1>
                </div>

                <div style={{maxWidth: '700px', minWidth: '200px', backgroundColor: 'rgba(255,255,255,0.6)',  borderRadius: '20px', padding: '20px', margin: '20px', marginTop: '3vh'}}>
                {/* eslint-disable-next-line */}
                    <img style={{width: '130px'}} id='img' />
                </div>

                <button onClick={Handlesubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
                    FOLLOW THE TRAIL
                </button>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Map