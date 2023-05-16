import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import Instruction from './components/Instruction';
import UploadImage from './components/UploadImage';
import QRScan from './components/QRScan';
import ThankYou from './components/ThankYou';
import ThankYou2 from './components/ThankYou2';
import Leaderboard from './components/Leaderboard';
import Map from './components/Map';
import Proceed from './components/Proceed';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Instructions" element={<Instruction />} />
          <Route path="/QRScan" element={<QRScan />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/ThankYou2" element={<ThankYou2 />} />
          <Route path="/UploadImage" element={<UploadImage />} />
          <Route path="/Proceed" element={<Proceed />} />
          <Route path="/question" element={<Question />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;