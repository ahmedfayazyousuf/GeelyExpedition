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
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center", backgroundColor: '#002277'}}>

        <div style={{borderRadius:'10px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px', backgroundColor: '#002277', padding: '10px', flexDirection: 'column'}}>

        <h1 className="header" >LEADERBOARD</h1>
          <table style={{borderCollapse: 'collapse', fontSize: '12px', width: '100vw', maxWidth: '380px', border:'1px solid white',}}>

            <tr style={{padding: '5px', borderBottom: '1px solid white', backgroundColor: 'black', paddingTop: '100px'}}>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '20px'}}>Name</th>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '20px'}}>Email</th>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '20px'}}>Ph. No.</th>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '20px'}}>Correct Answers</th>
              <th style={{color: 'white', fontWeight: '900', borderRight: '1px solid white', padding: '20px'}}>Time Taken (Quiz/seconds)</th>

            </tr>       

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>

            <tr className="trr">
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>Adithya</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>adithya@thehanginghouse.com</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>971582155414</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>3</td>
              <td style={{padding: '10px', color: 'white', borderRight: '1px solid white'}}>33 secs</td>

            </tr>
            

          </table>

        </div> 
    </div>
)
}

export default Instruction