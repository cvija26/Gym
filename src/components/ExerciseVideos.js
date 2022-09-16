import React from 'react';
import {Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {

  return (
    <Box sx={{mt: {lg: '100px', xs:'20px'}}} p='20px' m='10px auto'>
        <Typography variant='h4' mb='33px' ml={3}>
            Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} justifyContent= 'space-between'  
        flexWrap="wrap" alignItems="center" >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
        <img className='exercise-img' style={{ borderTopLeftRadius: '20px', marginBottom: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
        <Box>
            <Typography fontSize='15px' color='#000'>
                {item.video.title}
            </Typography>
            <Typography fontSize='14px' color='#000'>
                {item.video.channelName}
            </Typography>
        </Box>
        </a>
        ))}
        </Stack>
        </Box>
  )
}

export default ExerciseVideos