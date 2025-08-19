import {
  Box,
  Typography,
  Container,
  Grid,
  Chip,
  Card,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[900],
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 384,
  background: 'linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[20],
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  overflow: 'hidden',
}));

const BackgroundCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -16,
  right: -16,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(45deg, #00bcd4 30%, #2196f3 90%)',
  borderRadius: theme.spacing(2),
  zIndex: -1,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '1rem',
  height: 40,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  transition: 'background-color 0.3s ease',
}));

const AboutSection = () => {
  const technologies = ['Python', 'PyTorch', 'scikit-learn', 'Docker', 'JS/TS', 'React', 'SQL'];

  return (
    <StyledSection id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{
            xs: 12,
            lg: 6
          }}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  mb: 4
                }}
              >
                About Me
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'grey.300', 
                  mb: 3,
                  lineHeight: 1.6,
                  textAlign: 'justify'
                }}
              >
                I'm a passionate machine learning specialist with expertise in developing AI-powered solutions 
                that solve real-world problems. My journey in ML spans from traditional algorithms to cutting-edge 
                deep learning architectures.
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'grey.300', 
                  mb: 4,
                  lineHeight: 1.6,
                  textAlign: 'justify'
                }}
              >
                I thrive on transforming complex data into actionable insights and building scalable ML systems 
                that make a difference. Whether it's computer vision, NLP, or predictive modeling, I bring both 
                technical expertise and creative problem-solving to every project.
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'space-between' }}>
              {technologies.map((tech) => (
                <StyledChip
                  key={tech}
                  label={tech}
                  size="small"
                />
              ))}
            </Box>
          </Grid>
          
          <Grid size={{
            xs: 12,
            lg: 6
          }}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image="/images/hiking.jpg"
                  alt="Hiking Mount Lafayette"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </StyledCard>
              <BackgroundCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default AboutSection;