import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const  Instruction = () =>{

    const navigate = useNavigate();
    const location = useLocation();


    function Handlesubmit(){
        navigate('/qrscan',{state:{id:location.state.id,no:1}})
        
    }

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                <h1 className="header" >INSTRUCTIONS</h1>
            </div>

            <div style={{maxWidth: '700px', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '100px', backgroundColor: 'white', opacity: '0.7', borderRadius: '20px', paddingLeft: '20px', paddingRight: '20px', margin: '20px', marginTop: '0', fontSize: '14px'}}>
                    <p style={{fontWeight: '900'}}>Welcome to The Great GEELY Expedition!</p>
                    <p>Track your progress on this site, the <br></br>expedition staff shall guide you at each stop.</p>
                </div>

            <button onClick={Handlesubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
                START
            </button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
        </div>
    </div>
)
}

export default Instruction