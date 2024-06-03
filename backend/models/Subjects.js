const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    subjectName:{
        type: String
    },
    labCR:{
        type: Number
    },
    totalLabs:{
        type: Number
    },
    labsWeightage:{
        type: Number
    },
    labsTotM:{
        type: [Number]
    },
    labsAvgM:{
        type: [Number]
    },
    labsObtM:{
        type: [Number]
    },
    lTotalQuiz:{
        type: Number
    },
    lQuizWeightage:{
        type: Number
    },
    lQuizTotM:{
        type: [Number]
    },
    lQuizAvgM:{
        type: [Number]
    },
    lQuizObtM:{
        type: [Number]
    },
    lProjectWeightage:{
        type: Number
    },
    lProjectTotM:{
        type: Number
    },
    lProjectAvgM:{
        type: Number
    },
    lProjectObtM:{
        type: Number
    },
    lTotalMid:{
        type: Number
    },
    lMidWeightage:{
        type: Number
    },
    lMidTotM:{
        type: [Number]
    },
    lMidAvgM:{
        type: [Number]
    },
    lMidObtM:{
        type: [Number]
    },
    lFinalWeightage:{
        type: Number
    },
    lFinalTotM:{
        type: Number
    },
    lFinalAvgM:{
        type: Number
    },
    lFinalObtM:{
        type: Number
    },
    theoryCR:{
        type: Number
    },
    totalAss:{
        type: Number
    },
    AssWeightage:{
        type: Number
    },
    AssTotM:{
        type: [Number]
    },
    AssAvgM:{
        type: [Number]
    },
    AssObtM:{
        type: [Number]
    },
    tTotalQuiz:{
        type: Number
    },
    tQuizWeightage:{
        type: Number
    },
    tQuizTotM:{
        type: [Number]
    },
    tQuizAvgM:{
        type: [Number]
    },
    tQuizObtM:{
        type: [Number]
    },
    tProjectWeightage:{
        type: Number
    },
    tProjectTotM:{
        type: Number  
    },
    tProjectAvgM:{
        type: Number
    },
    tProjectObtM:{
        type: Number
    },
    tTotalMid:{
        type: Number
    },
    tMidWeightage:{
        type: Number
    },
    tMidTotM:{
        type: [Number]
    },
    tMidAvgM:{
        type: [Number]
    },
    tMidObtM:{
        type: [Number]
    },
    tFinalWeightage:{
        type: Number
    },
    tFinalTotM:{
        type: Number
    },
    tFinalAvgM:{
        type: Number
    },
    tFinalObtM:{
        type: Number
    },
})

module.exports = mongoose.model('subject', SubjectSchema);