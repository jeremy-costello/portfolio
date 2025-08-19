import { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Fade, Zoom } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import { BASE_URL } from '../../data/Constants';

const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}`;
const pulse = keyframes`0%,100%{opacity:.2;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}`;

const Section = styled(Box)({
  minHeight:'100vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  position:'relative',
  overflow:'hidden',
  background:'linear-gradient(135deg,#1a237e 0%,#4a148c 50%,#283593 100%)'
});

const ParticleContainer = styled(Box)({position:'absolute',inset:0,pointerEvents:'none'});
const Particle = styled(Box)(({delay}:{delay:number})=>({
  position:'absolute',width:4,height:4,backgroundColor:'#fff',borderRadius:'50%',opacity:.2,
  animation:`${pulse} 3s ease-in-out infinite`,animationDelay:`${delay}s`
}));

const GradientText = styled(Typography)({
  background:'linear-gradient(45deg,#00bcd4 30%,#9c27b0 50%,#e91e63 90%)',
  WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'
});

const GlowWrapper = styled(Box)({
  display:'inline-block',
  borderRadius:'50%',
  padding:4,
  background:'linear-gradient(45deg,#00bcd4 30%,#9c27b0 90%)',
  '&::before':{
    content:'""',
    position:'absolute',
    inset:0,
    borderRadius:'50%',
    filter:'blur(20px)',
    opacity:.3,
    zIndex:-1,
    animation:`${pulse} 3s ease-in-out infinite`
  },
  position:'relative'
});

const Scroll = styled(Box)({position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',animation:`${float} 1.5s ease-in-out infinite`});

export default function HeroSection(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>setVisible(true),[]);
  const particles=Array.from({length:50},(_,i)=>({id:i,left:Math.random()*100,top:Math.random()*100,delay:Math.random()*3}));
  return (
    <Section id="home">
      <ParticleContainer>
        {particles.map(p=><Particle key={p.id} delay={p.delay} sx={{left:`${p.left}%`,top:`${p.top}%`}}/>)}
      </ParticleContainer>
      <Fade in={visible} timeout={1500}>
        <Box sx={{textAlign:'center',zIndex:10,px:3}}>
          <Zoom in={visible} timeout={1000}>
            <GlowWrapper>
              <Avatar src={`${BASE_URL}/images/headshot.jpg`} alt="Jeremy Costello" sx={{width:256,height:256}}/>
            </GlowWrapper>
          </Zoom>
          <GradientText variant="h1" sx={{fontSize:{xs:'3rem',md:'5rem'},fontWeight:'bold',mb:3}}>
            Jeremy Costello
          </GradientText>
          <Typography variant="h3" sx={{color:'grey.300',mb:4,fontSize:{xs:'1.5rem',md:'2rem'},fontWeight:300}}>
            ML/AI Engineer
          </Typography>
          <Typography variant="h6" sx={{color:'grey.400',maxWidth:600,mx:'auto',lineHeight:1.6,px:3}}>
            Transforming data into intelligent solutions through cutting-edge machine learning and AI technologies
          </Typography>
        </Box>
      </Fade>
      <Scroll>
        <KeyboardArrowDownIcon sx={{fontSize:32,color:'#fff',opacity:.6}}/>
      </Scroll>
    </Section>
  );
}
