import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import tickicon from '../Z_Styles/tickicon.png'

const  ThankYou2 = () =>{

return(

  <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                <h1 className="header" >THANK YOU!</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <img id='head' style={{width: '120px', marginTop: '5px'}} src={tickicon} alt="Nissan Laptop Cover"/>
            </div>


            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
        </div>
    </div>
)
}

export default ThankYou2