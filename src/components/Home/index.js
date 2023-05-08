import { Link } from "react-router-dom";
import xtrail from '../Z_Styles/xtrail.png'
import nislogo from '../Z_Styles/nislogo.png'

const  Home = () =>{
return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'100vh'}}>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height:'70%'}}>

          <div style={{justifyContent: 'center', alignItems: 'center'}}>
              <img id='head' style={{width: '150px'}} src={nislogo} alt="Nissan Laptop Cover"/>
          </div>

          <h1 style={{fontWeight:'1000', fontSize: '60px', marginTop: '15px', marginBottom: '14px'}}>WELCOME</h1>
          <Link to={{pathname:"/registration"}}>
            <button type="submit" style={{width:"180px", borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}}>ENTER</button>
          </Link>
        </div> 

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height:'30%'}}>
          <img style={{minWidth: '100px', maxWidth: '250px', margin: '20px'}} src={xtrail} alt="tick"/>
        </div>

    </div>
)
}

export default Home