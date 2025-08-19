import {
  Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Chip, Button
} from '@mui/material';
import { Close as CloseIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReactCompareImage from "react-compare-image";
import CesiumViewer from '../extra/CesiumViewer';

const StyledDialog = styled(Dialog)(({ theme }) => ({'& .MuiDialog-paper':{backgroundColor:theme.palette.grey[900],borderRadius:theme.spacing(2),maxWidth:1000,margin:theme.spacing(2)}}));
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({color:'white',fontWeight:'bold',fontSize:'1.5rem',paddingRight:theme.spacing(8),position:'relative'}));
const CloseButton = styled(IconButton)(({ theme }) => ({position:'absolute',right:theme.spacing(1),top:theme.spacing(1),color:theme.palette.grey[400],'&:hover':{color:'white'}}));
const MediaContainer = styled(Box)(({ theme }) => ({marginBottom:theme.spacing(3),borderRadius:theme.spacing(1),overflow:'hidden','& video':{width:'100%',borderRadius:theme.spacing(1)},'& img':{width:'100%',borderRadius:theme.spacing(1)}}));
const TechChip=styled(Chip)(({theme})=>({backgroundColor:theme.palette.primary.main,color:theme.palette.common.white,fontSize:'1.0rem',height:32,fontWeight:500,'&:hover':{backgroundColor:theme.palette.primary.dark},transition:'background-color 0.3s ease'}));

const ProjectModal = ({ project, onClose }: { project:any; onClose:()=>void }) => {
  if (!project) return null;
  return (
    <StyledDialog open={!!project} onClose={onClose} maxWidth="md" fullWidth>
      <StyledDialogTitle>{project.title}
        <CloseButton onClick={onClose} aria-label="close"><CloseIcon/></CloseButton>
      </StyledDialogTitle>
      <DialogContent sx={{ p:3 }}>
        {project.mediaType==="component"?(
          <Box sx={{width:'100%',borderRadius:1,overflow:'hidden'}}>
            <Typography variant="body1" sx={{color:'grey.300',mb:3,lineHeight:1.0,fontWeight:'bold',fontSize:'1.25rem'}}>{"Try interacting with the demo below!"}</Typography>
            <Typography variant="body1" sx={{color:'grey.300',mb:3,lineHeight:1.0}}>{"Left click to pan, middle click to rotate, mouse wheel (or right click) to zoom."}</Typography>
            <CesiumViewer />
            <Typography variant="body1" sx={{color:'grey.300',mb:3,lineHeight:1.6}}>{""}</Typography>
          </Box>
        ):project.mediaUrls&&project.mediaUrls.length>0?(
          <MediaContainer>
            {project.mediaType==="video"?(
              <video src={project.mediaUrls[0]} controls autoPlay style={{width:'100%',borderRadius:8}}/>
            ):project.mediaUrls.length===2?(
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '16/9', // maintains ratio
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <ReactCompareImage
                  leftImage={project.mediaUrls[1]}
                  rightImage={project.mediaUrls[0]}
                  sliderLineWidth={3}
                  sliderLineColor="#06b6d4"
                  handleSize={40}
                />
              </Box>
            ):(
              <img src={project.mediaUrls[0]} alt={project.title} style={{width:'100%',borderRadius:8}}/>
            )}
          </MediaContainer>
        ):null}
        <Typography variant="body1" sx={{color:'grey.300',mb:3,lineHeight:1.6}}>{project.details||project.description}</Typography>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:1,mb:3}}>
          {project.tech.map((tech:string)=><TechChip key={tech} label={tech} size="small"/>)}
        </Box>
        {project.demoLink?(
          <Button href={project.demoLink} target="_blank" rel="noopener noreferrer" startIcon={<OpenInNewIcon/>}
            sx={{color:'cyan.main',textTransform:'none','&:hover':{color:'cyan.light',backgroundColor:'rgba(0,188,212,0.08)'}}}>
            Open Project Demo
          </Button>
        ):project.codeLink?(
          <Button href={project.codeLink} target="_blank" rel="noopener noreferrer" startIcon={<OpenInNewIcon/>}
            sx={{color:'cyan.main',textTransform:'none','&:hover':{color:'cyan.light',backgroundColor:'rgba(0,188,212,0.08)'}}}>
            View Code
          </Button>
        ):(
          <Typography variant="body2" sx={{color:'grey.400',fontStyle:'italic'}}>
            {project.demoNote||project.codeNote||"Demo/Code unavailable"}
          </Typography>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default ProjectModal;
