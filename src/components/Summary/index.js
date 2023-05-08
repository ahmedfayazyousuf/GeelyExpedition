import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import { Link } from "react-router-dom";

const  Summary = () =>{
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

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh'}}>
                <h1 style={{color: 'black', fontSize: '16px', fontWeight: '0', marginBottom: '-8px', marginTop: '30px'}}>Nissan X-Trail Expedition mission complete!</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh'}}>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '0', marginBottom: '-8px'}}>Thank you for participating!</p>
            </div>  

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh'}}>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '0', marginBottom: '8px'}}>Your Summary:</p>
            </div>   

            <div style={{backgroundColor: 'white', opacity: '0.7', width: '120%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px'}}>
              <table style={{borderCollapse: 'collapse', fontSize: '12px', width: '100%'}}>

                <tr style={{padding: '5px'}}>
                  <th style={{backgroundColor: 'black', color: 'white', borderColor: 'black'}}>Start Location</th>
                  <th style={{backgroundColor: 'black', color: 'white', borderColor: 'black'}}>End Location</th>
                  <th style={{backgroundColor: 'black', color: 'white', borderColor: 'black'}}>Time Taken</th>
                </tr>

                <tr style={{padding: '5px'}}>
                  <td>Meydan Hotel</td>
                  <td>Half Desert Terrain</td>
                  <td id='d1'>30 mins</td>
                </tr>

                <tr style={{padding: '5px'}}>
                  <td>Half Desert Terain</td>
                  <td>Dubai Frame</td>
                  <td id='d2'>40 mins</td>
                </tr>

                <tr style={{padding: '5px'}}>
                  <td>Dubai Frame</td>
                  <td>Nikki Beach</td>
                  <td id='d3'>50 mins</td>
                </tr>

                <tr style={{padding: '5px'}}>
                  <td></td>
                  <td className="bold">Total</td>
                  <td className="bold" id='total'>120 mins</td>
                </tr>

              </table>
            </div>
        
            <Link to={{pathname:`/uploadimage`}}> 
              <button type="submit" style={{maxWidth: '700px', minWidth: '250px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab', borderRadius: '30px', marginBottom: '100px', border: 'none'}}>Proceed</button>
            </Link>
            
        </div> 
    </div>
    </>
)
}

export default Summary