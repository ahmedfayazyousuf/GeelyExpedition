import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
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

        if(location.state.no === 3){
            window.open("https://goo.gl/maps/HvyhE463ETJEGgju7", "_blank")
            navigate('/Proceed',{state:{id:location.state.id,no:location.state.no+1}})
            return;
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

        if(location.state.no === 3){
            document.getElementById('img').setAttribute('src','./XHALE.png')
        }


        // eslint-disable-next-line
    },[])

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
    

                    <div style={{maxWidth: '700px', minWidth: '200px', backgroundColor: 'rgba(255,255,255,0.6)',  borderRadius: '20px', padding: '20px', margin: '20px', marginTop: '3vh'}}>
                    {/* eslint-disable-next-line */}
                        <img style={{width: '130px'}} id='img' />
                    </div>
                
                    <button type="submit" style={{maxWidth: '700px', minWidth: '250px', border: '0px', padding: '10px', color: 'white', backgroundColor: '#9E003A', cursor: 'grab', borderRadius: '30px', fontWeight:'300'}} onClick={Handlesubmit}>FOLLOW THE TRAIL</button>
    
            
            </div> 
        </div>
        </>
    )



}

export default Map