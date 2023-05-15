import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const  Proceed = () =>{

  const navigate = useNavigate();
  const location = useLocation();

  function submit(){

    if(location.state.no === 2){
      navigate('/question',{state:{id:location.state.id,no:location.state.no}})
      return
    }

    navigate('/qrscan',{state:{id:location.state.id,no:location.state.no}})
  }

return(
  <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
              <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
          </div>

          {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
              <h1 className="header" >LOCATION 1</h1>
          </div> */}

          <button onClick={submit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
              TAP TO PROCEED
          </button>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
              <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
          </div>
      </div>
  </div>
)
}

export default Proceed