import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[900],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: 800,
  margin: '0 auto',
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: 16,
  height: 16,
  backgroundColor: theme.palette.cyan?.main || theme.palette.info.main,
  borderRadius: '50%',
  marginTop: theme.spacing(1),
  flexShrink: 0,
  boxShadow: `0 0 0 4px ${theme.palette.cyan?.main}33` || `0 0 0 4px ${theme.palette.info.main}33`,
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 8,
  top: 32,
  width: 2,
  height: 80,
  backgroundColor: theme.palette.grey[700],
}));

const ExperienceCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  borderRadius: theme.spacing(1.5),
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[750],
  },
  flex: 1,
}));

const TechIconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.grey[700],
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    transform: 'scale(1.1)',
  },
}));

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "Tech Corp",
      duration: "2022 - Present",
      description: "Leading ML initiatives and building scalable AI systems",
      technologies: ["🐍", "🧠", "☁️", "🐳", "📊", "⚡"]
    },
    {
      title: "Data Scientist",
      company: "Analytics Inc",
      duration: "2020 - 2022",
      description: "Developed predictive models and data pipelines",
      technologies: ["🐍", "📊", "🔍", "📈", "💾", "🌐"]
    },
    {
      title: "ML Research Intern",
      company: "AI Lab",
      duration: "2019 - 2020",
      description: "Researched novel deep learning architectures",
      technologies: ["🧠", "🔬", "📝", "💡", "🎯", "🚀"]
    }
  ];

  return (
    <StyledSection id="experience">
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
          Experience
        </Typography>
        
        <TimelineContainer>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineDot />
              {index < experiences.length - 1 && <TimelineLine />}
              
              <ExperienceCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    justifyContent: 'space-between',
                    mb: 3
                  }}>
                    <Box>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 'bold', 
                          color: 'white',
                          mb: 1
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'cyan.main',
                          fontWeight: 'medium'
                        }}
                      >
                        {exp.company}
                      </Typography>
                    </Box>
                    <Chip 
                      label={exp.duration}
                      size="small"
                      sx={{ 
                        color: 'grey.400',
                        backgroundColor: 'transparent',
                        border: '1px solid',
                        borderColor: 'grey.600',
                        mt: { xs: 2, md: 0 }
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'grey.300',
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    {exp.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {exp.technologies.map((icon, idx) => (
                      <TechIconBox key={idx}>
                        {icon}
                      </TechIconBox>
                    ))}
                  </Box>
                </CardContent>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </StyledSection>
  );
};

export default ExperienceSection;