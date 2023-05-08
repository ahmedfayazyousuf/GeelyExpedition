import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const  Proceed = () =>{

  const navigate = useNavigate();
  const location = useLocation();

  function submit(){

    navigate('/qrscan',{state:{id:location.state.id,no:location.state.no}})
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
        
            <button type="submit" onClick={submit} style={{maxWidth: '700px', minWidth: '250px', padding: '10px', color: 'white', backgroundColor: 'black', marginTop: '100px', cursor: 'grab', borderRadius: '30px', marginBottom: '100px', border: 'none'}}>Tap to Proceed</button>
            
        </div> 
    </div>
    </>
)
}

export default Proceed