import $ from 'jquery';
import logo2 from '../Styles&Assets/logo2.png';
import frame from '../Styles&Assets/LockupFrame.png'
import React, { useEffect } from "react";
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from "../../firbase"
import { getElementError } from '@testing-library/react';
import '../Styles&Assets/style2.css'
// import { useNavigate } from 'react-router-dom';
// import {useLocation} from 'react-router-dom';
// import { useEffect } from "react";
// import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
const Q50Q2 = () => {

    const location = useLocation()
    const history = useNavigate()

    var question = {
        1:{
            "Question":"What is the country of origin for Geely Auto?",
            "Options":{
                1:"China",
                2:"Japan",
                3:"Germany",
                4:"United States"
            },
            "Answer":1
        },
        2:{
            "Question":"Geely Auto acquired an equity stake in which European car manufacturer in 2010?",
            "Options":{
                1:"Volvo Cars",
                2:"Aston Martin",
                3:"Mercedes",
                4:"Lotus"
            },
            "Answer":1
        },
        3:{
            "Question":"Geely Auto acquired a significant stake in which European car manufacturer? ",
            "Options":{
                1:"BMW",
                2:"Volkswagan",
                3:"Daimler AG",
                4:"Renault"
            },
            "Answer":3
        },
        4:{
            "Question":"Which Geely products will be launched as the first batch in the UAE market? ",
            "Options":{
                1:"Coolray",
                2:"Emgrand",
                3:"Geometry C",
                4:"All of the Above"
            },
            "Answer":4
        }
    }

    const [questionn, setQuestionn] = useState('')
    const [opt1, seOpt1] = useState('')
    const [opt2, setOpt2] = useState('')
    const [opt3, setOpt3] = useState('')
    const [opt4, setOpt4] = useState('')
    const [qnos, setQnos] = useState([1,2,3,4])
    const [C,setC] = useState(0)

    const [score, setScore] = useState(0)   

    const [selected, setSelected] = useState(0)

    const[ans, setAns] = useState(0)
    const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;

        const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
        };

        const TIME_LIMIT = 60;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        let remainingPathColor = COLOR_CODES.info.color;

    useEffect(()=>{

        const Users = firebase.firestore().collection("Users");
        Users.doc(location.state.id).update({Location2:firebase.firestore.FieldValue.serverTimestamp()})

        // timer code starts here

        

        // document.getElementById("app").innerHTML = `
        
        // `;

        startTimer();

        function onTimesUp() {
        clearInterval(timerInterval);
        }

        function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML =  
            timeLeft
            
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                const time = document.getElementById("base-timer-label").innerHTML
                console.log(time,'rime')

                const Users = firebase.firestore().collection("Users");

                Users.doc(location.state.id).update({
                    Time: firebase.firestore.FieldValue.serverTimestamp(),
                    Score:score,
                    TimeTaken: (60- Number(time))
                })

                
            onTimesUp();
            history('/score',{state:{score:score,time:time,no:location.state.no,id:location.state.id}})
            }
        }, 1000);
        }

        

        function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
        }
        }

        function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }

        function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
        }

        // timer code ends here




        var qno = Math.floor(Math.random() * (qnos.length-1)) + 0

        var temp = qnos

        const index = qno;






            console.log(qnos[qno],'llll')
        var qn = question[qnos[qno]]



        console.log(C,'count')
    
    
        // document.getElementById('qn').innerHTML = qn.Question
        // document.getElementById('option1').innerHTML = qn.Options[1]
        // document.getElementById('option2').innerHTML = qn.Options[2]
        // document.getElementById('option3').innerHTML = qn.Options[3]
        // document.getElementById('option4').innerHTML = qn.Options[4]
    
        setQuestionn(qn.Question)
        seOpt1(qn.Options[1])
        setOpt2(qn.Options[2])
        setOpt3(qn.Options[3])
        setOpt4(qn.Options[4])
        setAns(qn.Answer)

        
        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log(temp)
          console.log('qno',qno)

        setQnos(temp)
    },[])

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
        }

   

    // const location = useLocation();
    // const navigate = useNavigate();
    // eslint-disable-next-line
    const [bool, setBool] = useState(false); 

    // useEffect(()=>{
    //     // const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //         if(!user) {
    //             navigate(`/`); //If User is not logged in, redirect to login page
    //           }
    //           else{
    //             console.log(user)   
    //           }
    //     });
    // },[])

    

    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(false);
            setSelected(1)
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(false);
            setSelected(2)
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(true);
            setSelected(3)
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
            setBool(false);
            setSelected(4)
        }
    }



    function handleSubmit(){

        document.getElementById(`option${selected}`).style.background = "transparent";
            document.getElementById(`option${selected}`).style.color = "white";



        console.log(C)

        if(qnos.length === 0){
            if(ans === selected){
                setScore(score+1)
                console.log('yay',score)

                const time = document.getElementById('base-timer-label').innerHTML
                console.log(time,'rime')

                const Users = firebase.firestore().collection("Users");

                Users.doc(location.state.id).update({
                    Time: firebase.firestore.FieldValue.serverTimestamp(),
                    Score:score+1,
                    TimeTaken: (60- Number(time))
                })

                history('/score',{state:{score:score+1,time:time,no:location.state.no,id:location.state.id}})


            }else{
                const time = document.getElementById('base-timer-label').innerHTML
                console.log(time,'rime')

                const Users = firebase.firestore().collection("Users");

                Users.doc(location.state.id).update({
                    Time: firebase.firestore.FieldValue.serverTimestamp(),
                    Score:score,
                    TimeTaken: (60- Number(time))
                })
    
            console.log('score=',score)
            history('/score',{state:{score:score,time:time,no:location.state.no,id:location.state.id}})

            }

           
            return;

            
        }

        if(ans === selected){
          
            setScore(score+1)
            console.log('yay',score)
        }

        console.log(qnos.length-1)
        var qno = Math.floor(Math.random() * (qnos.length-1)) + 0

        var temp = qnos

        const index = qno;

        console.log(qno)






        var qn = question[qnos[qno]]

        setQnos(temp)

        setQuestionn(qn.Question)
        seOpt1(qn.Options[1])
        setOpt2(qn.Options[2])
        setOpt3(qn.Options[3])
        setOpt4(qn.Options[4])
        setAns(qn.Answer)

        setC(C+1)

        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log(temp)



        
        // if(bool === false){
        //     if(location.state.count === 2){

        //         const auth = getAuth();
        //         signOut(auth).then(() => {
        //             navigate(`/Score`,{state:{count:1,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
        //         }).catch((error) => {
        //         // An error happened.
        //         });

                
                
            
        // }

        //     else{
        //         var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
        //         var qn = location.state.qns;
        //         var n = qn[no]
        //         if (no !== -1) {
        //             qn.splice(no, 1);
        //         }

        //         console.log(no)
        //         console.log(qn)

        //         navigate(`/Q50Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
        //     }
        // }

        // else{
        //     if(location.state.count === 2){

        //         const auth = getAuth();
        //         signOut(auth).then(() => {
        //             navigate(`/Score`,{state:{count:1,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
        //         })
                
            
        // }

        //     else{
        //         var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
        //         var qn = location.state.qns;
        //         var n = qn[no]
        //         if (no !== -1) {
        //             qn.splice(no, 1);
        //         }

        //         console.log(no)
        //         console.log(qn)

        //         navigate(`/Q50Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
        //     }

        // }
    }

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px', marginTop: '-20px'}}>
                <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-20px'}}>
                <h1 className="header" >TRIVIA GAME</h1>
            </div>

            {/* <p style={{color: 'white', fontSize: '16px', marginBottom: '-5px'}}>Time: <span className='base-timer__label' id='base-timer__label'>60</span> Seconds</p> */}
            
            <div id="app">
                <div className="base-timer">
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                        <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            className="base-timer__path-remaining green ${remainingPathColor}"
                            d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0 
                            "
                        ></path>
                        </g>
                    </svg>

                    <span id="base-timer-label" className="base-timer__label">{
                        timeLeft
                    }</span>

                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p id='qn' style={{fontSize: '15px', color: 'white'}} > {questionn}</p>
            </div>  

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '350px', marginTop: '15px'}}>
                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt1}</button>
                        <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt2}</button>
                    </div>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt3}</button>
                        <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt4}</button>
                    </div>
            </div>

            <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}} onClick={handleSubmit}>NEXT</button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
            
        </div>
    </div>
)
}

export default Q50Q2