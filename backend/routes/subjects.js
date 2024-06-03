const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Subject = require('../models/Subjects')
const { body, validationResult } = require('express-validator');
const { NotBeforeError } = require('jsonwebtoken');

router.get('/fetchallsubjects', fetchuser, async(req, res) =>{
    try{
        const subjects = await Subject.find({user: req.user.id});
        res.json(subjects);
    } catch(error) {
        res.status(500).send("Internal Server Error")
    }
})
router.post('/addnote', fetchuser, async(req, res) =>{
    try{
        const { subjectName, labCR, totalLabs, labsWeightage, labsTotM, labsAvgM, labsObtM, lTotalQuiz, lQuizWeightage, lQuizTotM, lQuizAvgM, lQuizObtM, lProjectWeightage, lProjectTotM, lProjectAvgM, lProjectObtM, lTotalMid, lMidWeightage, lMidTotM, lMidAvgM, lMidObtM, lFinalWeightage, lFinalTotM, lFinalAvgM, lFinalObtM, theoryCR, totalAss, AssWeightage, AssTotM, AssAvgM, AssObtM, tTotalQuiz, tQuizWeightage, tQuizTotM, tQuizAvgM, tQuizObtM, tProjectWeightage, tProjectTotM, tProjectAvgM, tProjectObtM, tTotalMid, tMidWeightage, tMidTotM, tMidAvgM, tMidObtM, tFinalWeightage, tFinalTotM, tFinalAvgM, tFinalObtM } = req.body;
        const subject = new Subject({subjectName, labCR, totalLabs, labsWeightage, labsTotM, labsAvgM, labsObtM, lTotalQuiz, lQuizWeightage, lQuizTotM, lQuizAvgM, lQuizObtM, lProjectWeightage, lProjectTotM, lProjectAvgM, lProjectObtM, lTotalMid, lMidWeightage, lMidTotM, lMidAvgM, lMidObtM, lFinalWeightage, lFinalTotM, lFinalAvgM, lFinalObtM, theoryCR, totalAss, AssWeightage, AssTotM, AssAvgM, AssObtM, tTotalQuiz, tQuizWeightage, tQuizTotM, tQuizAvgM, tQuizObtM, tProjectWeightage, tProjectTotM, tProjectAvgM, tProjectObtM, tTotalMid, tMidWeightage, tMidTotM, tMidAvgM, tMidObtM, tFinalWeightage, tFinalTotM, tFinalAvgM, tFinalObtM, user: req.user.id});
        const savedSubject = await subject.save();
        res.json(savedSubject);
    } catch(error) {
        res.status(500).send("Internal Server Error")
    }
})
router.put('/updatenote/:id', fetchuser, async(req, res) =>{
    try{
        const { subjectName, labCR, totalLabs, labsWeightage, labsTotM, labsAvgM, labsObtM, lTotalQuiz, lQuizWeightage, lQuizTotM, lQuizAvgM, lQuizObtM, lProjectWeightage, lProjectTotM, lProjectAvgM, lProjectObtM, lTotalMid, lMidWeightage, lMidTotM, lMidAvgM, lMidObtM, lFinalWeightage, lFinalTotM, lFinalAvgM, lFinalObtM, theoryCR, totalAss, AssWeightage, AssTotM, AssAvgM, AssObtM, tTotalQuiz, tQuizWeightage, tQuizTotM, tQuizAvgM, tQuizObtM, tProjectWeightage, tProjectTotM, tProjectAvgM, tProjectObtM, tTotalMid, tMidWeightage, tMidTotM, tMidAvgM, tMidObtM, tFinalWeightage, tFinalTotM, tFinalAvgM, tFinalObtM } = req.body;
        const newSub = {};
        if (subjectName) { newSub.subjectName = subjectName; }
        if (labCR) { newSub.labCR = labCR; }
        if (totalLabs) { newSub.totalLabs = totalLabs; }
        if (labsWeightage) { newSub.labsWeightage = labsWeightage; }
        if (labsTotM) { newSub.labsTotM = labsTotM; }
        if (labsAvgM) { newSub.labsAvgM = labsAvgM; }
        if (labsObtM) { newSub.labsObtM = labsObtM; }
        if (lTotalQuiz) { newSub.lTotalQuiz = lTotalQuiz; }
        if (lQuizWeightage) { newSub.lQuizWeightage = lQuizWeightage; }
        if (lQuizTotM) { newSub.lQuizTotM = lQuizTotM; }
        if (lQuizAvgM) { newSub.lQuizAvgM = lQuizAvgM; } 
        if (lQuizObtM) { newSub.lQuizObtM = lQuizObtM; }
        if (lProjectWeightage || lProjectWeightage===0) { newSub.lProjectWeightage = lProjectWeightage; }
        if (lProjectTotM || lProjectTotM===0) { newSub.lProjectTotM = lProjectTotM; }
        if (lProjectAvgM || lProjectAvgM===0) { newSub.lProjectAvgM = lProjectAvgM; }
        if (lProjectObtM || lProjectObtM===0) { newSub.lProjectObtM = lProjectObtM; }
        if (lTotalMid) { newSub.lTotalMid = lTotalMid; }
        if (lMidWeightage) { newSub.lMidWeightage = lMidWeightage; }
        if (lMidTotM) { newSub.lMidTotM = lMidTotM; }
        if (lMidAvgM) { newSub.lMidAvgM = lMidAvgM; }
        if (lMidObtM) { newSub.lMidObtM = lMidObtM; } 
        if (lFinalWeightage || lFinalWeightage===0) { newSub.lFinalWeightage = lFinalWeightage; } 
        if (lFinalTotM || lFinalTotM===0) { newSub.lFinalTotM = lFinalTotM; } 
        if (lFinalAvgM || lFinalAvgM===0) { newSub.lFinalAvgM = lFinalAvgM; } 
        if (lFinalObtM || lFinalObtM===0) { newSub.lFinalObtM = lFinalObtM; } 
        if (theoryCR) { newSub.theoryCR = theoryCR; } 
        if (totalAss) { newSub.totalAss = totalAss; } 
        if (AssWeightage) { newSub.AssWeightage = AssWeightage; } 
        if (AssTotM) { newSub.AssTotM = AssTotM; } 
        if (AssAvgM) { newSub.AssAvgM = AssAvgM; } 
        if (AssObtM) { newSub.AssObtM = AssObtM; } 
        if (tTotalQuiz) { newSub.tTotalQuiz = tTotalQuiz; } 
        if (tQuizWeightage) { newSub.tQuizWeightage = tQuizWeightage; }
        if (tQuizTotM) { newSub.tQuizTotM = tQuizTotM; } 
        if (tQuizAvgM) { newSub.tQuizAvgM = tQuizAvgM; } 
        if (tQuizObtM) { newSub.tQuizObtM = tQuizObtM; } 
        if (tProjectWeightage || tProjectWeightage===0) { newSub.tProjectWeightage = tProjectWeightage; } 
        if (tProjectTotM || tProjectTotM===0) { newSub.tProjectTotM = tProjectTotM; } 
        if (tProjectAvgM || tProjectAvgM===0) { newSub.tProjectAvgM = tProjectAvgM; } 
        if (tProjectObtM || tProjectObtM===0) { newSub.tProjectObtM = tProjectObtM; } 
        if (tTotalMid) { newSub.tTotalMid = tTotalMid; } 
        if (tMidWeightage) { newSub.tMidWeightage = tMidWeightage; } 
        if (tMidTotM) { newSub.tMidTotM = tMidTotM; } 
        if (tMidAvgM) { newSub.tMidAvgM = tMidAvgM; } 
        if (tMidObtM) { newSub.tMidObtM = tMidObtM; } 
        if (tFinalWeightage || tFinalWeightage===0) { newSub.tFinalWeightage = tFinalWeightage; } 
        if (tFinalTotM || tFinalTotM===0) { newSub.tFinalTotM = tFinalTotM; } 
        if (tFinalAvgM || tFinalAvgM===0) { newSub.tFinalAvgM = tFinalAvgM; } 
        if (tFinalObtM || tFinalObtM===0) { newSub.tFinalObtM = tFinalObtM; }
        let sub = await Subject.findById(req.params.id);
        if(!sub) {
            return res.status(404).send("Not Found");
        }
        if (sub.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        sub = await Subject.findByIdAndUpdate(req.params.id, {$set: newSub}, {new: true}) 
        res.json({sub})
    } catch(error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
})
router.delete('/deletenote/:id', fetchuser, async(req, res) =>{
    try{
        let sub = await Subject.findById(req.params.id);
        if(!sub) {
            return res.status(404).send("Not Found");
        }
        if (sub.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        sub = await Subject.findByIdAndDelete(req.params.id) 
        res.json({"success": "Note has been deleted"})
    } catch(error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router;