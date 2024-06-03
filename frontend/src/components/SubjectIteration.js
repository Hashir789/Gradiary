import { Grid, TextField, InputAdornment, Button, Box, Card, CardContent, AppBar, Tabs, Tab, Fab, Tooltip } from '@mui/material'
import React, {useContext} from 'react'
import gradeContext from '../context/gradeContext';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Formm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const context = useContext(gradeContext);
    const { setValue4, value4, value3, subjectArray, details, setSubjectArray, updateArray, setValue2, setValue1, setDetails, setSubject, addSubjects, updateSubjects } = context;
    const clean = () =>{
    document.getElementById('sn').value = '';
    document.getElementById('tch').value = 0;
    document.getElementById('tnoq').value = 0;
    document.getElementById('tqw').value = 0;
    document.getElementById('tnoa').value = 0;        
    document.getElementById('taw').value = 0;        
    document.getElementById('tnom').value = 0;        
    document.getElementById('tmw').value = 0;        
    document.getElementById('tpw').value = 0;        
    document.getElementById('tfw').value = 0;        
    document.getElementById('lch').value = 0;
    document.getElementById('lnoq').value = 0;
    document.getElementById('lqw').value = 0;
    document.getElementById('lnol').value = 0;        
    document.getElementById('llw').value = 0;        
    document.getElementById('lnom').value = 0;        
    document.getElementById('lmw').value = 0;        
    document.getElementById('lpw').value = 0;          
    document.getElementById('lfw').value = 0;        
  }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (value4===0){
            if (parseInt(document.getElementById('tch').value)<=0 && parseInt(document.getElementById('lch').value)<=0) {
                const variant = 'error';
            enqueueSnackbar('Subject with 0 credit hours is Invalid!', { variant });
        }
        else if (parseInt(document.getElementById('tch').value)>=0 || parseInt(document.getElementById('lch').value)>=0) {
            const newSubject = {};
            let flag = false;
            if (parseInt(document.getElementById('tch').value)!==0) {
                const sum = parseInt(document.getElementById('tqw').value) + parseInt(document.getElementById('taw').value) + parseInt(document.getElementById('tmw').value) + parseInt(document.getElementById('tpw').value) + parseInt(document.getElementById('tfw').value);
                if (sum!==100) {
                    flag = true;
                    const variant = 'error';
                    enqueueSnackbar('Overall weightage of Theory must be 100%', { variant });    
                }
            }
            if (parseInt(document.getElementById('lch').value)!==0) {
                const sum = parseInt(document.getElementById('lqw').value) + parseInt(document.getElementById('llw').value) + parseInt(document.getElementById('lmw').value) + parseInt(document.getElementById('lpw').value) + parseInt(document.getElementById('lfw').value);
                if (sum!==100) {
                    flag = true;
                    const variant = 'error';
                    enqueueSnackbar('Overall weightage of Lab must be 100%', { variant });    
                }
            }
            if (value3===0 && !flag) {
                const variant = 'success'; 
                newSubject.subjectName = (document.getElementById('sn').value).toUpperCase();
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
                setDetails(subjectArray.length);
                addSubjects(newSubject);
                enqueueSnackbar('Subject Added Successfully!', { variant });
                clean();
                setSubject(newSubject);
            }
            else if (value3===1 && !flag) {
                subjectArray[details].AssTotM = updateArray(subjectArray[details].AssTotM, document.getElementById('tnoa').value)
                subjectArray[details].subjectName = (document.getElementById('sn').value).toUpperCase();
                subjectArray[details].theoryCR = parseInt(document.getElementById('tch').value);
                subjectArray[details].tTotalQuiz = parseInt(document.getElementById('tnoq').value);
                subjectArray[details].tQuizWeightage = parseInt(document.getElementById('tqw').value);
                subjectArray[details].tQuizTotM = updateArray(subjectArray[details].tQuizTotM, document.getElementById('tnoq').value)
                subjectArray[details].tQuizObtM = updateArray(subjectArray[details].tQuizObtM, document.getElementById('tnoq').value)
                subjectArray[details].tQuizAvgM = updateArray(subjectArray[details].tQuizAvgM, document.getElementById('tnoq').value)
                subjectArray[details].totalAss = parseInt(document.getElementById('tnoa').value);
                subjectArray[details].AssWeightage = parseInt(document.getElementById('taw').value);
                subjectArray[details].AssTotM = updateArray(subjectArray[details].AssTotM, document.getElementById('tnoa').value)
                subjectArray[details].AssObtM = updateArray(subjectArray[details].AssObtM, document.getElementById('tnoa').value)
                subjectArray[details].AssAvgM = updateArray(subjectArray[details].AssAvgM, document.getElementById('tnoa').value)
                subjectArray[details].tTotalMid = parseInt(document.getElementById('tnom').value);
                subjectArray[details].tMidWeightage = parseInt(document.getElementById('tmw').value);
                subjectArray[details].tMidTotM = updateArray(subjectArray[details].tMidTotM, document.getElementById('tnom').value)
                subjectArray[details].tMidObtM = updateArray(subjectArray[details].tMidObtM, document.getElementById('tnom').value)
                subjectArray[details].tMidAvgM = updateArray(subjectArray[details].tMidAvgM, document.getElementById('tnom').value)
                subjectArray[details].tProjectWeightage = parseInt(document.getElementById('tpw').value);
                subjectArray[details].tFinalWeightage = parseInt(document.getElementById('tfw').value);
                subjectArray[details].labCR = parseInt(document.getElementById('lch').value);
                subjectArray[details].lTotalQuiz = parseInt(document.getElementById('lnoq').value);
                subjectArray[details].lQuizWeightage = parseInt(document.getElementById('lqw').value);
                subjectArray[details].lQuizTotM = updateArray(subjectArray[details].lQuizTotM, document.getElementById('lnoq').value)
                subjectArray[details].lQuizObtM = updateArray(subjectArray[details].lQuizObtM, document.getElementById('lnoq').value)
                subjectArray[details].lQuizAvgM = updateArray(subjectArray[details].lQuizAvgM, document.getElementById('lnoq').value)
                subjectArray[details].totalLabs = parseInt(document.getElementById('lnol').value);
                subjectArray[details].labsWeightage = parseInt(document.getElementById('llw').value);
                subjectArray[details].labsTotM = updateArray(subjectArray[details].labsTotM, document.getElementById('lnol').value)
                subjectArray[details].labsObtM = updateArray(subjectArray[details].labsObtM, document.getElementById('lnol').value)
                subjectArray[details].labsAvgM = updateArray(subjectArray[details].labsAvgM, document.getElementById('lnol').value)
                subjectArray[details].lTotalMid = parseInt(document.getElementById('lnom').value);
                subjectArray[details].lMidWeightage = parseInt(document.getElementById('lmw').value);
                subjectArray[details].lMidTotM = updateArray(subjectArray[details].lMidTotM, document.getElementById('lnom').value)
                subjectArray[details].lMidObtM = updateArray(subjectArray[details].lMidObtM, document.getElementById('lnom').value)
                subjectArray[details].lMidAvgM = updateArray(subjectArray[details].lMidAvgM, document.getElementById('lnom').value)
                subjectArray[details].lProjectWeightage = parseInt(document.getElementById('lpw').value);
                subjectArray[details].lFinalWeightage = parseInt(document.getElementById('lfw').value);
                setSubjectArray([...subjectArray.slice(0, details), newSubject, ...subjectArray.slice(details+1, subjectArray.length)]);
                const variant = 'success';
                updateSubjects(subjectArray[details], subjectArray[details]._id);
                enqueueSnackbar('Subject Updated Successfully!', { variant });
                setValue4(1);
            }
        }
    } else {
        const variant = 'error'
        enqueueSnackbar('For updating again, go to Home and click pencil button again!', { variant });
    }
    }
    return (
        <>
    <AppBar position='static' color='inherit'>
    <Tabs value={0} 
    variant='fullWidth'
    textColor='primary' 
    indicatorColor='primary'>
        <Tab label={!value3?'Add Subject':'Update Subject'}/>
    </Tabs>
    </AppBar>
    <React.Fragment>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Card sx={{ m: 1, my: 5, maxWidth: 800, boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.5)"}}>
        <CardContent>
            <form onSubmit={handleSubmit}>
            <Grid container alignItems='center' spacing={2}>
                <Grid xs={12} sm={12} item>
                  <TextField
                        label="Subject Name"
                        id='sn'
                        variant='outlined'
                        inputProps={{ maxLength: 15, minLength:2 }}
                        fullWidth
                        defaultValue={!value3?'':subjectArray[details].subjectName}
                       required
                       />
                </Grid>
                <Grid xs={12} sm={12} item sx={{mt: 5}}>
                    <TextField
                        label="Theory Credit Hours"
                        id='tch'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].theoryCR}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Quizzes"
                        id='tnoq'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tTotalQuiz}
                        fullWidth
                       required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Quizzes Weightage"
                        id='tqw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tQuizWeightage}
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                          }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Assignments"
                        id='tnoa'
                        variant='outlined'
                        inputProps={{ maxLength: 10, minLength:2 }}
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].totalAss}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                  <TextField
                        label="Assignments Weightage"
                        id='taw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].AssWeightage}
                        fullWidth
                        required 
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                          }}
                          />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Mids"
                        id='tnom'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tTotalMid}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Mids Weightage"
                        id='tmw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tMidWeightage}
                        fullWidth
                       required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Project Weightage"
                        id='tpw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tProjectWeightage}
                        fullWidth
                       required
                       InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Final Weightage"
                        id='tfw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].tFinalWeightage}
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        />
                </Grid>
                <Grid xs={12} sm={12} item sx={{mt: 5}}>
                    <TextField
                        label="Lab Credit Hours"
                        id='lch'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].labCR}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Quizzes"
                        id='lnoq'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lTotalQuiz}
                        fullWidth
                       required 
                       />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Quizzes Weightage"
                        id='lqw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lQuizWeightage}
                        fullWidth
                        required InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Labs"
                        id='lnol'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].totalLabs}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Labs Weightage"
                        id='llw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].labsWeightage}
                        fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Number of Mids"
                        id='lnom'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lTotalMid}
                        fullWidth
                        required 
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Mids Weightage"
                        id='lmw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lMidWeightage}
                        fullWidth
                       required 
                        InputProps={{
                          endAdornment: <InputAdornment position="end">%</InputAdornment>,
                          }}
                          />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Project Weightage"
                        id='lpw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lProjectWeightage}
                        fullWidth
                       required
                       InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                          }}
                        />
                </Grid>
                <Grid xs={6} sm={3} item>
                    <TextField
                        label="Final Weightage"
                        id='lfw'
                        variant='outlined'
                        type='number'
                        defaultValue={!value3?0:subjectArray[details].lFinalWeightage}
                        fullWidth
                       required
                    InputProps={{
                      endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                          />
                </Grid>
                <Grid xs={12} sm={12} item sx={{ mt: 5 }}>
                <Button variant='contained' color='primary' type='submit' fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
    </Card>
    </Box>
    <Link to='/home'>
    <Tooltip title="Home" sx={{position:"fixed", bottom:20, right:{xs:"43%", md:30}}}>
      <Fab color="primary" aria-label="add" position="sticky" onClick={()=>{ setValue2(0); setValue1(0); setValue4(0); }}>
          <HomeIcon/>
      </Fab>
    </Tooltip>
    </Link>
    </React.Fragment>
    </>
  )
}

export default function SubjectIteration() {
    return (
      <SnackbarProvider maxSnack={3}>
        <Formm/>
      </SnackbarProvider>
    );
}