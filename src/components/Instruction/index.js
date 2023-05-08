import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const  Instruction = () =>{

    const navigate = useNavigate();
    const location = useLocation();


    function Handlesubmit(){
        navigate('/qrscan',{state:{id:location.state.id,no:1}})
        
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

                <p style={{color: 'black', fontSize: '22px', fontWeight: '0', marginBottom: '5px'}}>YOUR COMPASS</p>

                <div style={{maxWidth: '700px', minWidth: '250px', backgroundColor: 'white', opacity: '0.7', borderRadius: '20px', paddingLeft: '20px', paddingRight: '20px', margin: '20px', marginTop: '0', fontSize: '14px'}}>
                    <p>Welcome to The Great Nissan X-Trail Expedition!</p>
                    <p>Track your progress on this site, Expedition staff will guide you at each stop.</p>
                </div>
            
                <button type="submit" style={{maxWidth: '700px', minWidth: '250px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab', borderRadius: '30px', marginBottom: '100px', border: 'none'}} onClick={Handlesubmit}>Start</button>

        
        </div> 
    </div>
    </>
)
}

export default Instruction