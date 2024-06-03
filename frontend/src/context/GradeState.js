import React, { useState, useLayoutEffect} from "react";
import GradeContext from "./gradeContext";

const GradeState = (props) =>{
    const host = 'http://localhost:4000/';
    const [subjectArray, setSubjectArray] = useState([]);
    const getSubjects = async () => {
        const response = await fetch(`${host}/api/subjects/fetchallsubjects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setSubjectArray(json);
    }
    const [userInfo, setUserInfo] = useState({});
    const getUser = async () => {
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setUserInfo([json.name, json.username, json.date]);
    }
    const trimm = (str) =>{
        for (let i = 0; i < str.length; i++) {
            if (str[i]===' ') {
                return 0;
            }
        }
        return 1;
    }
    const addSubjects = async (newSubject) => {
        const response = await fetch(`${host}/api/subjects/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(newSubject)
        });
        // eslint-disable-next-line
        const nSubject = await response.json();
    }
    const updateSubjects = async (newSubject, id) => {
        // eslint-disable-next-line 
        const response = await fetch(`${host}/api/subjects/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(newSubject)
        });
    }
    const deleteSubjects = async (id, a) => {
        // eslint-disable-next-line 
        const response = await fetch(`${host}/api/subjects/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        setSubjectArray([...subjectArray.slice(0, a), ...subjectArray.slice(a+1, subjectArray.length)]);
    }
    const loggin = async(userInfo) =>{
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
          });
          const json = await response.json();      
          if (json.success) {
            localStorage.setItem('token', json.auth);
          }
    }
    const [details, setDetails] = useState(0);
    const [subject, setSubject] = useState(subjectArray[details]);
    const [value3, setValue3] = useState(0);
    const trash = (index) =>{
        if (pencil5===0) {
            updateSubjects({ tQuizTotM: [...subject.tQuizTotM.slice(0, index), 0, ...subject.tQuizTotM.slice(index+1, subject.tQuizTotM.length)], tQuizObtM: [...subject.tQuizObtM.slice(0, index), 0, ...subject.tQuizObtM.slice(index+1, subject.tQuizObtM.length)], tQuizAvgM: [...subject.tQuizAvgM.slice(0, index), 0, ...subject.tQuizAvgM.slice(index+1, subject.tQuizAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, tQuizTotM: [...subject.tQuizTotM.slice(0, index), 0, ...subject.tQuizTotM.slice(index+1, subject.tQuizTotM.length)], tQuizObtM: [...subject.tQuizObtM.slice(0, index), 0, ...subject.tQuizObtM.slice(index+1, subject.tQuizObtM.length)], tQuizAvgM: [...subject.tQuizAvgM.slice(0, index), 0, ...subject.tQuizAvgM.slice(index+1, subject.tQuizAvgM.length)]})
        }
        else if (pencil5===1) {
            updateSubjects({ AssTotM: [...subject.AssTotM.slice(0, index), 0, ...subject.AssTotM.slice(index+1, subject.AssTotM.length)], AssObtM: [...subject.AssObtM.slice(0, index), 0, ...subject.AssObtM.slice(index+1, subject.AssObtM.length)], AssAvgM: [...subject.AssAvgM.slice(0, index), 0, ...subject.AssAvgM.slice(index+1, subject.AssAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, AssTotM: [...subject.AssTotM.slice(0, index), 0, ...subject.AssTotM.slice(index+1, subject.AssTotM.length)], AssObtM: [...subject.AssObtM.slice(0, index), 0, ...subject.AssObtM.slice(index+1, subject.AssObtM.length)], AssAvgM: [...subject.AssAvgM.slice(0, index), 0, ...subject.AssAvgM.slice(index+1, subject.AssAvgM.length)]})
        }
        else if (pencil5===2) {
            updateSubjects({ tProjectTotM: 0, tProjectObtM: 0, tProjectAvgM: 0}, subjectArray[details]._id)
            setSubject({ ...subject, tProjectTotM: 0, tProjectObtM: 0, tProjectAvgM: 0})
        }
        else if (pencil5===3) {
            updateSubjects({ tMidTotM: [...subject.tMidTotM.slice(0, index), 0, ...subject.tMidTotM.slice(index+1, subject.tMidTotM.length)], tMidObtM: [...subject.tMidObtM.slice(0, index), 0, ...subject.tMidObtM.slice(index+1, subject.tMidObtM.length)], tMidAvgM: [...subject.tMidAvgM.slice(0, index), 0, ...subject.tMidAvgM.slice(index+1, subject.tMidAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, tMidTotM: [...subject.tMidTotM.slice(0, index), 0, ...subject.tMidTotM.slice(index+1, subject.tMidTotM.length)], tMidObtM: [...subject.tMidObtM.slice(0, index), 0, ...subject.tMidObtM.slice(index+1, subject.tMidObtM.length)], tMidAvgM: [...subject.tMidAvgM.slice(0, index), 0, ...subject.tMidAvgM.slice(index+1, subject.tMidAvgM.length)]})
        }
        else if (pencil5===4) {
            updateSubjects({ tFinalTotM: 0, tFinalObtM: 0, tFinalAvgM: 0}, subjectArray[details]._id);
            setSubject({ ...subject, tFinalTotM: 0, tFinalObtM: 0, tFinalAvgM: 0})
        }
        else if (pencil5===6) {
            updateSubjects({ lQuizTotM: [...subject.lQuizTotM.slice(0, index), 0, ...subject.lQuizTotM.slice(index+1, subject.lQuizTotM.length)], lQuizObtM: [...subject.lQuizObtM.slice(0, index), 0, ...subject.lQuizObtM.slice(index+1, subject.lQuizObtM.length)], lQuizAvgM: [...subject.lQuizAvgM.slice(0, index), 0, ...subject.lQuizAvgM.slice(index+1, subject.lQuizAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, lQuizTotM: [...subject.lQuizTotM.slice(0, index), 0, ...subject.lQuizTotM.slice(index+1, subject.lQuizTotM.length)], lQuizObtM: [...subject.lQuizObtM.slice(0, index), 0, ...subject.lQuizObtM.slice(index+1, subject.lQuizObtM.length)], lQuizAvgM: [...subject.lQuizAvgM.slice(0, index), 0, ...subject.lQuizAvgM.slice(index+1, subject.lQuizAvgM.length)]})
        }
        else if (pencil5===7) {
            updateSubjects({ labsTotM: [...subject.labsTotM.slice(0, index), 0, ...subject.labsTotM.slice(index+1, subject.labsTotM.length)], labsObtM: [...subject.labsObtM.slice(0, index), 0, ...subject.labsObtM.slice(index+1, subject.labsObtM.length)], labsAvgM: [...subject.labsAvgM.slice(0, index), 0, ...subject.labsAvgM.slice(index+1, subject.labsAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, labsTotM: [...subject.labsTotM.slice(0, index), 0, ...subject.labsTotM.slice(index+1, subject.labsTotM.length)], labsObtM: [...subject.labsObtM.slice(0, index), 0, ...subject.labsObtM.slice(index+1, subject.labsObtM.length)], labsAvgM: [...subject.labsAvgM.slice(0, index), 0, ...subject.labsAvgM.slice(index+1, subject.labsAvgM.length)]})
        }
        else if (pencil5===8) {
            updateSubjects({ lProjectTotM: 0, lProjectObtM: 0, lProjectAvgM: 0}, subjectArray[details]._id)
            setSubject({ ...subject, lProjectTotM: 0, lProjectObtM: 0, lProjectAvgM: 0})
        }
        else if (pencil5===9) {
            updateSubjects({ lMidTotM: [...subject.lMidTotM.slice(0, index), 0, ...subject.lMidTotM.slice(index+1, subject.lMidTotM.length)], lMidObtM: [...subject.lMidObtM.slice(0, index), 0, ...subject.lMidObtM.slice(index+1, subject.lMidObtM.length)], lMidAvgM: [...subject.lMidAvgM.slice(0, index), 0, ...subject.lMidAvgM.slice(index+1, subject.lMidAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, lMidTotM: [...subject.lMidTotM.slice(0, index), 0, ...subject.lMidTotM.slice(index+1, subject.lMidTotM.length)], lMidObtM: [...subject.lMidObtM.slice(0, index), 0, ...subject.lMidObtM.slice(index+1, subject.lMidObtM.length)], lMidAvgM: [...subject.lMidAvgM.slice(0, index), 0, ...subject.lMidAvgM.slice(index+1, subject.lMidAvgM.length)]})
        }
        else {
            updateSubjects({ lFinalTotM: 0, lFinalObtM: 0, lFinalAvgM: 0}, subjectArray[details]._id)
            setSubject({ ...subject, lFinalTotM: 0, lFinalObtM: 0, lFinalAvgM: 0})
        }
    }
    function useWindowSize() {
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    const [nav, setNav] = useState(0);
    const width = useWindowSize();
    const [value1, setValue1] = useState(0);
    const handleChange1 = (event, newValue) =>{
        setValue1(newValue);
        setValue2(0);
        if (value1===1) {
            if (subject.tTotalQuiz) { setpencil5(0); }
            else if (subject.totalAss) { setpencil5(1); }
            else if (subject.tProjectWeightage) { setpencil5(2); }
            else if (subject.tTotalMid) { setpencil5(3); }
            else if (subject.tFinalWeightage) { setpencil5(4); }
            else { setpencil5(5); }
        }
        else {
            if (subject.lTotalQuiz) { setpencil5(6); }
            else if (subject.totalLabs) { setpencil5(7); }
            else if (subject.lProjectWeightage) { setpencil5(8); }
            else if (subject.lTotalMid) { setpencil5(9); }
            else if (subject.lFinalWeightage) { setpencil5(10); }
            else { setpencil5(11); }
        }
    }
    const pointer = () =>{
        setpencil5(0);
    }
    const pointer2 = () =>{
        if (subject.tTotalQuiz) { setpencil5(0); }
        else if (subject.totalAss) { setpencil5(1); }
        else if (subject.tProjectWeightage) { setpencil5(2); }
        else if (subject.tTotalMid) { setpencil5(3); }
        else if (subject.tFinalWeightage) { setpencil5(4); }
        else if (subject.lTotalQuiz) { setpencil5(6); }
        else if (subject.totalLabs) { setpencil5(7); }
        else if (subject.lProjectWeightage) { setpencil5(8); }
        else if (subject.lTotalMid) { setpencil5(9); }
        else if (subject.lFinalWeightage) { setpencil5(10); }
        else {}
    }
    const [value2, setValue2] = useState(0);
    const handleChange2 = (event, newValue) =>{
        setValue2(newValue);
    }
    const [ open, setOpen ] = useState(false);
    const [ close, setClose ] = useState(true);
    const [ pencil1, setpencil1 ] = useState(0);
    const [ pencil2, setpencil2 ] = useState(0);
    const [ pencil3, setpencil3 ] = useState(0);
    const [ pencil4, setpencil4 ] = useState(0);
    const [ pencil5, setpencil5 ] = useState(5);
    const handlepencil = (p1, p2, p3, p4) =>{
        p1 = p1 - 1;
        p1 = parseInt(p1);
        p2 = parseInt(p2);
        p3 = parseInt(p3);
        p4 = parseInt(p4);
        if (pencil5===0) {
            updateSubjects({ tQuizObtM: [...subject.tQuizObtM.slice(0, p1), p2, ...subject.tQuizObtM.slice(p1+1, subject.tQuizObtM.length)], tQuizTotM: [...subject.tQuizTotM.slice(0, p1), p3, ...subject.tQuizTotM.slice(p1+1, subject.tQuizTotM.length)], tQuizAvgM: [...subject.tQuizAvgM.slice(0, p1), p4, ...subject.tQuizAvgM.slice(p1+1, subject.tQuizAvgM.length)]}, subjectArray[details]._id);
            setSubject({ ...subject, tQuizObtM: [...subject.tQuizObtM.slice(0, p1), p2, ...subject.tQuizObtM.slice(p1+1, subject.tQuizObtM.length)], tQuizTotM: [...subject.tQuizTotM.slice(0, p1), p3, ...subject.tQuizTotM.slice(p1+1, subject.tQuizTotM.length)], tQuizAvgM: [...subject.tQuizAvgM.slice(0, p1), p4, ...subject.tQuizAvgM.slice(p1+1, subject.tQuizAvgM.length)]})
        }
        else if (pencil5===1) {
            updateSubjects({ AssObtM: [...subject.AssObtM.slice(0, p1), p2, ...subject.AssObtM.slice(p1+1, subject.AssObtM.length)], AssTotM: [...subject.AssTotM.slice(0, p1), p3, ...subject.AssTotM.slice(p1+1, subject.AssTotM.length)], AssAvgM: [...subject.AssAvgM.slice(0, p1), p4, ...subject.AssAvgM.slice(p1+1, subject.AssAvgM.length)]}, subjectArray[details]._id);
            setSubject({ ...subject, AssObtM: [...subject.AssObtM.slice(0, p1), p2, ...subject.AssObtM.slice(p1+1, subject.AssObtM.length)], AssTotM: [...subject.AssTotM.slice(0, p1), p3, ...subject.AssTotM.slice(p1+1, subject.AssTotM.length)], AssAvgM: [...subject.AssAvgM.slice(0, p1), p4, ...subject.AssAvgM.slice(p1+1, subject.AssAvgM.length)]})
        }
        else if (pencil5===2) {
            updateSubjects({ tProjectTotM: p3, tProjectObtM: p2, tProjectAvgM: p4}, subjectArray[details]._id);
            setSubject({ ...subject, tProjectTotM: p3, tProjectObtM: p2, tProjectAvgM: p4})
        }
        else if (pencil5===3) {
            updateSubjects({ tMidObtM: [...subject.tMidObtM.slice(0, p1), p2, ...subject.tMidObtM.slice(p1+1, subject.tMidObtM.length)], tMidTotM: [...subject.tMidTotM.slice(0, p1), p3, ...subject.tMidTotM.slice(p1+1, subject.tMidTotM.length)], tMidAvgM: [...subject.tMidAvgM.slice(0, p1), p4, ...subject.tMidAvgM.slice(p1+1, subject.tMidAvgM.length)]}, subjectArray[details]._id)
            setSubject({ ...subject, tMidObtM: [...subject.tMidObtM.slice(0, p1), p2, ...subject.tMidObtM.slice(p1+1, subject.tMidObtM.length)], tMidTotM: [...subject.tMidTotM.slice(0, p1), p3, ...subject.tMidTotM.slice(p1+1, subject.tMidTotM.length)], tMidAvgM: [...subject.tMidAvgM.slice(0, p1), p4, ...subject.tMidAvgM.slice(p1+1, subject.tMidAvgM.length)]})
        }
        else if (pencil5===4) {
            updateSubjects({ tFinalTotM: p3, tFinalObtM: p2, tFinalAvgM: p4}, subjectArray[details]._id)
            setSubject({ ...subject, tFinalTotM: p3, tFinalObtM: p2, tFinalAvgM: p4})
        }
        else if (pencil5===6) {
            updateSubjects({lQuizObtM: [...subject.lQuizObtM.slice(0, p1), p2, ...subject.lQuizObtM.slice(p1+1, subject.lQuizObtM.length)], lQuizTotM: [...subject.lQuizTotM.slice(0, p1), p3, ...subject.lQuizTotM.slice(p1+1, subject.lQuizTotM.length)], lQuizAvgM: [...subject.lQuizAvgM.slice(0, p1), p4, ...subject.lQuizAvgM.slice(p1+1, subject.lQuizAvgM.length)]}, subjectArray[details]._id);
            setSubject({ ...subject, lQuizObtM: [...subject.lQuizObtM.slice(0, p1), p2, ...subject.lQuizObtM.slice(p1+1, subject.lQuizObtM.length)], lQuizTotM: [...subject.lQuizTotM.slice(0, p1), p3, ...subject.lQuizTotM.slice(p1+1, subject.lQuizTotM.length)], lQuizAvgM: [...subject.lQuizAvgM.slice(0, p1), p4, ...subject.lQuizAvgM.slice(p1+1, subject.lQuizAvgM.length)]})
        }
        else if (pencil5===7) {
            updateSubjects({labsObtM: [...subject.labsObtM.slice(0, p1), p2, ...subject.labsObtM.slice(p1+1, subject.labsObtM.length)], labsTotM: [...subject.labsTotM.slice(0, p1), p3, ...subject.labsTotM.slice(p1+1, subject.labsTotM.length)], labsAvgM: [...subject.labsAvgM.slice(0, p1), p4, ...subject.labsAvgM.slice(p1+1, subject.labsAvgM.length)]}, subjectArray[details]._id);
            setSubject({ ...subject, labsObtM: [...subject.labsObtM.slice(0, p1), p2, ...subject.labsObtM.slice(p1+1, subject.labsObtM.length)], labsTotM: [...subject.labsTotM.slice(0, p1), p3, ...subject.labsTotM.slice(p1+1, subject.labsTotM.length)], labsAvgM: [...subject.labsAvgM.slice(0, p1), p4, ...subject.labsAvgM.slice(p1+1, subject.labsAvgM.length)]})
        }
        else if (pencil5===8) {
            updateSubjects({lProjectObtM: p2, lProjectTotM: p3, lProjectAvgM: p4}, subjectArray[details]._id);
            setSubject({ ...subject, lProjectObtM: p2, lProjectTotM: p3, lProjectAvgM: p4})
        }
        else if (pencil5===9) {
            updateSubjects({lMidObtM: [...subject.lMidObtM.slice(0, p1), p2, ...subject.lMidObtM.slice(p1+1, subject.lMidObtM.length)], lMidTotM: [...subject.lMidTotM.slice(0, p1), p3, ...subject.lMidTotM.slice(p1+1, subject.lMidTotM.length)], lMidAvgM: [...subject.lMidAvgM.slice(0, p1), p4, ...subject.lMidAvgM.slice(p1+1, subject.lMidAvgM.length)]}, subjectArray[details]._id);
            setSubject({ ...subject, lMidObtM: [...subject.lMidObtM.slice(0, p1), p2, ...subject.lMidObtM.slice(p1+1, subject.lMidObtM.length)], lMidTotM: [...subject.lMidTotM.slice(0, p1), p3, ...subject.lMidTotM.slice(p1+1, subject.lMidTotM.length)], lMidAvgM: [...subject.lMidAvgM.slice(0, p1), p4, ...subject.lMidAvgM.slice(p1+1, subject.lMidAvgM.length)]})
        }
        else {
            updateSubjects({lFinalTotM: p3, lFinalObtM: p2, lFinalAvgM: p4}, subjectArray[details]._id);
            setSubject({ ...subject, lFinalTotM: p3, lFinalObtM: p2, lFinalAvgM: p4})
        }
    }
    const arrayCount = (a) =>{
        let sum = 0;
        if (Array.isArray(a)) {
            for (let i = 0; i < a.length; i++) {
                if (a[i]!==0) {
                    sum = sum + 1;
                }
            }
        }
        return sum;
    }
    const arrayPercentage = (a, b) =>{
        let sum1 = 0;
        if (Array.isArray(a)) {
            for (let i = 0; i < a.length; i++) {
                sum1 = sum1 + a[i];
            }
        }
        let sum2 = 0;
        if (Array.isArray(b)) {
            for (let i = 0; i < b.length; i++) {
                sum2 = sum2 + b[i];
            }
        }
        if (sum2===0) {
            sum2 = sum2 + 1;
        }
        return (sum1/sum2)*100;
    }
    const addSubject = (e, variant) =>{
        e.preventDefault();
        const newSubject = {};
        newSubject.subjectName = document.getElementById('sn').value;
        newSubject.theoryCR = parseInt(document.getElementById('tch').value);
        newSubject.tTotalQuiz = parseInt(document.getElementById('tnoq').value);
        newSubject.tQuizWeightage = parseInt(document.getElementById('tqw').value);
        newSubject.tQuizTotM = Array(parseInt(document.getElementById('tnoq').value)).fill(0);
        newSubject.tQuizObtM = Array(parseInt(document.getElementById('tnoq').value)).fill(0);
        newSubject.tQuizAvgM = Array(parseInt(document.getElementById('tnoq').value)).fill(0);
        newSubject.totalAss = parseInt(document.getElementById('tnoa').value);        
        newSubject.AssWeightage = parseInt(document.getElementById('taw').value);        
        newSubject.AssTotM = Array(parseInt(document.getElementById('tnoa').value)).fill(0);        
        newSubject.AssObtM = Array(parseInt(document.getElementById('tnoa').value)).fill(0);        
        newSubject.AssAvgM = Array(parseInt(document.getElementById('tnoa').value)).fill(0);
        newSubject.tTotalMid = parseInt(document.getElementById('tnom').value);        
        newSubject.tMidWeightage = parseInt(document.getElementById('tmw').value);        
        newSubject.tMidTotM = Array(parseInt(document.getElementById('tnom').value)).fill(0);        
        newSubject.tMidObtM = Array(parseInt(document.getElementById('tnom').value)).fill(0);        
        newSubject.tMidAvgM = Array(parseInt(document.getElementById('tnom').value)).fill(0);
        newSubject.tProjectWeightage = parseInt(document.getElementById('tpw').value);        
        newSubject.tProjectTotM = 0;        
        newSubject.tProjectAvgM = 0;
        newSubject.tProjectObtM = 0;
        newSubject.tFinalWeightage = parseInt(document.getElementById('tfw').value);        
        newSubject.tFinalTotM = 0;        
        newSubject.tFinalAvgM = 0;
        newSubject.tFinalObtM = 0;
        newSubject.labCR = parseInt(document.getElementById('lch').value);
        newSubject.lTotalQuiz = parseInt(document.getElementById('lnoq').value);
        newSubject.lQuizWeightage = parseInt(document.getElementById('lqw').value);
        newSubject.lQuizTotM = Array(parseInt(document.getElementById('lnoq').value)).fill(0);
        newSubject.lQuizObtM = Array(parseInt(document.getElementById('lnoq').value)).fill(0);
        newSubject.lQuizAvgM = Array(parseInt(document.getElementById('lnoq').value)).fill(0);
        newSubject.totalLabs = parseInt(document.getElementById('lnol').value);        
        newSubject.labsWeightage = parseInt(document.getElementById('llw').value);        
        newSubject.labsTotM = Array(parseInt(document.getElementById('lnol').value)).fill(0);        
        newSubject.labsObtM = Array(parseInt(document.getElementById('lnol').value)).fill(0);        
        newSubject.labsAvgM = Array(parseInt(document.getElementById('lnol').value)).fill(0);
        newSubject.lTotalMid = parseInt(document.getElementById('lnom').value);        
        newSubject.lMidWeightage = parseInt(document.getElementById('lmw').value);        
        newSubject.lMidTotM = Array(parseInt(document.getElementById('lnom').value)).fill(0);        
        newSubject.lMidObtM = Array(parseInt(document.getElementById('lnom').value)).fill(0);        
        newSubject.lMidAvgM = Array(parseInt(document.getElementById('lnom').value)).fill(0);
        newSubject.lProjectWeightage = parseInt(document.getElementById('lpw').value);        
        newSubject.lProjectTotM = 0;        
        newSubject.lProjectAvgM = 0;
        newSubject.lProjectObtM = 0;
        newSubject.lFinalWeightage = parseInt(document.getElementById('lfw').value);        
        newSubject.lFinalTotM = 0;        
        newSubject.lFinalAvgM = 0;
        newSubject.lFinalObtM = 0;
        setSubjectArray([...subjectArray, newSubject]);
    }
    const updateArray = (d, e) =>{
        if (d.length > e) {
            d = d.slice(0, e);
        }
        else if (d.length < e) {
            let f = e - d.length;
            let g = Array(f).fill(0);
            d = [...d, ...g];
        }
        else {}
        return d;
    }
    const theoryAvgMarks = (index) => { return (arrayPercentage(subjectArray[index].tQuizAvgM, subjectArray[index].tQuizTotM)*(arrayCount(subjectArray[index].tQuizTotM))*((subjectArray[index].tQuizWeightage)/(parseInt(subjectArray[index].tTotalQuiz)?subjectArray[index].tTotalQuiz:1))/100) + (arrayPercentage(subjectArray[index].AssAvgM, subjectArray[index].AssTotM)*(arrayCount(subjectArray[index].AssTotM))*((subjectArray[index].AssWeightage)/(parseInt(subjectArray[index].totalAss)?subjectArray[index].totalAss:1))/100) + (parseInt(subjectArray[index].tProjectTotM)?(((subjectArray[index].tProjectAvgM)/(parseInt(subjectArray[index].tProjectTotM)?subjectArray[index].tProjectTotM:1))*100*(subjectArray[index].tProjectWeightage/100)):0) + (arrayPercentage(subjectArray[index].tMidAvgM, subjectArray[index].tMidTotM)*(arrayCount(subjectArray[index].tMidTotM))*((subjectArray[index].tMidWeightage)/(parseInt(subjectArray[index].tTotalMid)?subjectArray[index].tTotalMid:1))/100) + (subjectArray[index].tFinalTotM?(((subjectArray[index].tFinalAvgM)/(parseInt(subjectArray[index].tFinalTotM)?subjectArray[index].tFinalTotM:1))*100*(subjectArray[index].tFinalWeightage/100)):0)};
  const theoryObtMarks = (index) => { return ((arrayPercentage(subjectArray[index].tQuizObtM, subjectArray[index].tQuizTotM)*(arrayCount(subjectArray[index].tQuizTotM))*((subjectArray[index].tQuizWeightage)/(parseInt(subjectArray[index].tTotalQuiz)?subjectArray[index].tTotalQuiz:1))/100) + (arrayPercentage(subjectArray[index].AssObtM, subjectArray[index].AssTotM)*(arrayCount(subjectArray[index].AssTotM))*((subjectArray[index].AssWeightage)/(parseInt(subjectArray[index].totalAss)?subjectArray[index].totalAss:1))/100) + (parseInt(subjectArray[index].tProjectTotM)?(((subjectArray[index].tProjectObtM)/(parseInt(subjectArray[index].tProjectTotM)?subjectArray[index].tProjectTotM:1))*100*(subjectArray[index].tProjectWeightage/100)):0) + (arrayPercentage(subjectArray[index].tMidObtM, subjectArray[index].tMidTotM)*(arrayCount(subjectArray[index].tMidTotM))*((subjectArray[index].tMidWeightage)/(parseInt(subjectArray[index].tTotalMid)?subjectArray[index].tTotalMid:1))/100) + (subjectArray[index].tFinalTotM?(((subjectArray[index].tFinalObtM)/(parseInt(subjectArray[index].tFinalTotM)?subjectArray[index].tFinalTotM:1))*100*(subjectArray[index].tFinalWeightage/100)):0)).toFixed(2)};
  const labTotM = (index) => { return (((arrayCount(subjectArray[index].lQuizTotM))*((subjectArray[index].lQuizWeightage)/(parseInt(subjectArray[index].lTotalQuiz)?subjectArray[index].lTotalQuiz:1))) + ((arrayCount(subjectArray[index].labsTotM))*((subjectArray[index].labsWeightage)/(parseInt(subjectArray[index].totalLabs)?subjectArray[index].totalLabs:1))) + (parseInt(subjectArray[index].lProjectTotM)?subjectArray[index].lProjectWeightage:0) + ((arrayCount(subjectArray[index].lMidTotM))*((subjectArray[index].lMidWeightage)/(parseInt(subjectArray[index].lTotalMid)?subjectArray[index].lTotalMid:1))) + (parseInt(subjectArray[index].lFinalTotM)?subjectArray[index].lFinalWeightage:0)).toFixed(2)}
  const theoryTotM = (index) => { return (((arrayCount(subjectArray[index].tQuizTotM))*((subjectArray[index].tQuizWeightage)/(parseInt(subjectArray[index].tTotalQuiz)?subjectArray[index].tTotalQuiz:1))) + ((arrayCount(subjectArray[index].AssTotM))*((subjectArray[index].AssWeightage)/(parseInt(subjectArray[index].totalAss)?subjectArray[index].totalAss:1))) + (parseInt(subjectArray[index].tProjectTotM)?subjectArray[index].tProjectWeightage:0) + ((arrayCount(subjectArray[index].tMidTotM))*((subjectArray[index].tMidWeightage)/(parseInt(subjectArray[index].tTotalMid)?subjectArray[index].tTotalMid:1))) + (parseInt(subjectArray[index].tFinalTotM)?subjectArray[index].tFinalWeightage:0)).toFixed(2)}
  const labAvgMarks = (index) => { return ((arrayPercentage(subjectArray[index].lQuizAvgM, subjectArray[index].lQuizTotM)*(arrayCount(subjectArray[index].lQuizTotM))*((subjectArray[index].lQuizWeightage)/(parseInt(subjectArray[index].lTotalQuiz)?subjectArray[index].lTotalQuiz:1))/100) + (arrayPercentage(subjectArray[index].labsAvgM, subjectArray[index].labsTotM)*(arrayCount(subjectArray[index].labsTotM))*((subjectArray[index].labsWeightage)/(parseInt(subjectArray[index].totalLabs)?subjectArray[index].totalLabs:1))/100) + (subjectArray[index].lProjectTotM?(((subjectArray[index].lProjectAvgM)/(parseInt(subjectArray[index].lProjectTotM)?subjectArray[index].lProjectTotM:1))*100*(subjectArray[index].lProjectWeightage/100)):0) + (arrayPercentage(subjectArray[index].lMidAvgM, subjectArray[index].lMidTotM)*(arrayCount(subjectArray[index].lMidTotM))*((subjectArray[index].lMidWeightage)/(parseInt(subjectArray[index].lTotalMid)?subjectArray[index].lTotalMid:1))/100) + (parseInt(subjectArray[index].lFinalTotM)?(((subjectArray[index].lFinalAvgM)/(parseInt(subjectArray[index].lFinalTotM)?subjectArray[index].lFinalTotM:1))*100*(subjectArray[index].lFinalWeightage/100)):0)).toFixed(2)};
  const labObtMarks = (index) => { return ((arrayPercentage(subjectArray[index].lQuizObtM, subjectArray[index].lQuizTotM)*(arrayCount(subjectArray[index].lQuizTotM))*((subjectArray[index].lQuizWeightage)/(parseInt(subjectArray[index].lTotalQuiz)?subjectArray[index].lTotalQuiz:1))/100) + (arrayPercentage(subjectArray[index].labsObtM, subjectArray[index].labsTotM)*(arrayCount(subjectArray[index].labsTotM))*((subjectArray[index].labsWeightage)/(parseInt(subjectArray[index].totalLabs)?subjectArray[index].totalLabs:1))/100) + (subjectArray[index].lProjectTotM?(((subjectArray[index].lProjectObtM)/(parseInt(subjectArray[index].lProjectTotM)?subjectArray[index].lProjectTotM:1))*100*(subjectArray[index].lProjectWeightage/100)):0) + (arrayPercentage(subjectArray[index].lMidObtM, subjectArray[index].lMidTotM)*(arrayCount(subjectArray[index].lMidTotM))*((subjectArray[index].lMidWeightage)/(parseInt(subjectArray[index].lTotalMid)?subjectArray[index].lTotalMid:1))/100) + (parseInt(subjectArray[index].lFinalTotM)?(((subjectArray[index].lFinalObtM)/(parseInt(subjectArray[index].lFinalTotM)?subjectArray[index].lFinalTotM:1))*100*(subjectArray[index].lFinalWeightage/100)):0)).toFixed(2)};
  const [value4, setValue4] = useState(0);
  const [deleted, setDeleted] = useState(0);
  const editDate = (str) =>{
    let a = str.slice(5, 7);
    if (a==='01') { a = "January"; }
    else if (a==='02') { a = "February"; }
    else if (a==='03') { a = "March"; }
    else if (a==='04') { a = "April"; }
    else if (a==='05') { a = "May"; }
    else if (a==='06') { a = "June"; }
    else if (a==='07') { a = "July"; }
    else if (a==='08') { a = "August"; }
    else if (a==='09') { a = "September"; }
    else if (a==='10') { a = "October"; }
    else if (a==='11') { a = "November"; }
    else if (a==='12') { a = "December"; }
    else { }
    let b = str.slice(8, 10);
    if (parseInt(b) < 10) { 
        if (b==='01') { b = "1"; }
        else if (b==='02') { b = "2"; }
        else if (b==='03') { b = "3"; }
        else if (b==='04') { b = "4"; }
        else if (b==='05') { b = "5"; }
        else if (b==='06') { b = "6"; }
        else if (b==='07') { b = "7"; }
        else if (b==='08') { b = "8"; }
        else if (b==='09') { b = "9"; }
        else { }
    }
    let c = str.slice(0, 4);
    return a + ' ' + b + ', ' + c;
  }
  return(
        <GradeContext.Provider value={{editDate, userInfo, getUser, trimm, loggin, deleteSubjects, nav, setNav, pointer2, value4, setValue4, setSubject, subject, width, value1, handleChange1, value2, handleChange2, trash, open, close, setOpen, setClose, pencil1, pencil2, pencil3, pencil4, pencil5, setpencil1, setpencil2, setpencil3, setpencil4, setpencil5, handlepencil, arrayCount, arrayPercentage, addSubject, subjectArray, setSubjectArray, labAvgMarks, theoryAvgMarks, labObtMarks, theoryObtMarks, labTotM, theoryTotM, details, setDetails, updateArray, value3, setValue3, pointer, setValue2, setValue1, deleted, setDeleted, getSubjects, addSubjects, updateSubjects}}>
            {props.children}
        </GradeContext.Provider>
    )
}
export default GradeState;