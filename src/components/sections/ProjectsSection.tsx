import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import { 
  OpenInNew as OpenInNewIcon, 
  PlayArrow as PlayArrowIcon 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { projects } from "../../data/Projects";
import ProjectModal from "../modals/ProjectModal";
import { BASE_URL } from "../../data/Constants";

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[800],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[20],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${theme.palette.info.main}20`,
  },
  overflow: 'hidden',
}));

const MediaContainer = styled(Box)({
  position: 'relative',
  aspectRatio: '16/9',
  backgroundColor: 'black',
  cursor: 'pointer',
  overflow: 'hidden',
});

const MediaOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
});

const OverlayContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'white',
  fontSize: '1.1rem',
  fontWeight: 'medium',
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: '0.875rem',
  height: 28,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  transition: 'background-color 0.3s ease',
}));

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <StyledSection id="projects">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'white',
            textAlign: 'center',
            mb: 8
          }}
        >
          Featured Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id} size={{
              xs: 12,
              md: 6,
              xl: 4
            }}>
              <ProjectCard>
                <MediaContainer onClick={() => setSelectedProject(project)}>
                  {project.thumbnailUrl ? (
                    <img
                      src={`${BASE_URL}/${project.thumbnailUrl}`}
                      alt={`${project.title} thumbnail`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #00bcd4 30%, #9c27b0 90%)',
                      }}
                    />
                  )}

                  <MediaOverlay>
                    <OverlayContent>
                      {project.mediaType === "video" || project.mediaType === "gif" ? (
                        <>
                          <PlayArrowIcon sx={{ fontSize: 32 }} />
                          <Typography variant="h6">View Demo Video</Typography>
                        </>
                      ) : (
                        <Typography variant="h6">View Project Overview</Typography>
                      )}
                    </OverlayContent>
                  </MediaOverlay>
                </MediaContainer>

                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: 'white',
                      mb: 2
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'grey.300',
                      lineHeight: 1.6,
                      mb: 3
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.tech.map((tech) => (
                      <TechChip key={tech} label={tech} size="small" />
                    ))}
                  </Box>
                  
                  <Button
                    onClick={() => setSelectedProject(project)}
                    startIcon={<OpenInNewIcon />}
                    sx={{
                      color: 'cyan.main',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'cyan.light',
                        backgroundColor: 'rgba(0, 188, 212, 0.08)',
                      },
                    }}
                  >
                    More Info
                  </Button>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </StyledSection>
  );
};

export default ProjectsSection;