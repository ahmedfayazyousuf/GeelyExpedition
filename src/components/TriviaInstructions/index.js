import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { getAuth, signInAnonymously } from "firebase/auth";

const  Instruction = () =>{

    const navigate = useNavigate();
    const location = useLocation();

 
    function Handlesubmit(){
        const auth = getAuth();
        signInAnonymously(auth).then(()=>{
            navigate('/question',{state:{id:location.state.id,no:location.state.no}})
        })
        
    }

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'-15px'}}>
                <h1 className="header">TRIVIA<br></br>INSTRUCTIONS</h1>
            </div>

            <div style={{maxWidth: '700px', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '250px', backgroundColor: '#002377', paddingLeft: '20px', paddingRight: '20px', margin: '20px', marginTop: '0', fontSize: '14px', border: '1px solid white', borderRadius: '10px'}}>
                    <p style={{fontWeight: '900', letterSpacing: '2px', color: 'white'}}>GEAR UP FOR THE GEELY<br></br>KNOWLEDGE CHALLENGE</p>
                    <p style={{color: 'white'}}>Answer all four questions<br></br>correctly in the quickest time, and<br></br>stand a chance to be one of the<br></br>first to drive the future.</p>
                </div>

            <button onClick={Handlesubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '15px'}}>
                START
            </button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
        </div>
    </div>
)
}

export default Instruction