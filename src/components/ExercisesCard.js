import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material'

const ExercisesCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button className='left-btn' sx={{ml: '21px', color:'#fff', background:'#ffa9a9', fontSize: '12px', 
            borderRadius:'20px', textTransform:'capitalize', mt: '10px'}}>{exercise.bodyPart}</Button>
             <Button className='right-btn' sx={{ml: '21px', color:'#fff', background:'#fcc757', fontSize: '12px', 
            borderRadius:'20px', textTransform:'capitalize', mt: '10px'}}>{exercise.target}</Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt= '10px' mr='21px'
    pb='10px' textTransform='capitalize' fontSize='14px'>
        {exercise.name}
    </Typography>
    </Link>
  )
}

export default ExercisesCard