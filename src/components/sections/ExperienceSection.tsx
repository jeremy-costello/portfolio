import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BASE_URL } from "../../data/Constants";

// --- Skill images map (relative to /public/skills) ---
const skillIcons: Record<string, string> = {
  python: "python.svg",
  pytorch: "pytorch.svg",
  docker: "docker.png",
  cloud: "cloud.png",
  pandas: "pandas.png",
  lightning: "lightning.png",
  research: "research.png",
  // add more here...
};

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[900],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const TimelineContainer = styled(Box)(() => ({
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
  backgroundColor: theme.palette.info.main,
  borderRadius: '50%',
  marginTop: theme.spacing(1),
  flexShrink: 0,
  boxShadow: `0 0 0 4px ${theme.palette.info.main}33`,
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
    backgroundColor: theme.palette.grey[700],
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
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    transform: 'scale(1.1)',
  },
  overflow: 'hidden',
}));

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Machine Learning Specialist / Software Developer",
      company: "Compusult",
      duration: "April 2024 - Present",
      description: [
        "• Leading the development of various machine learning and artificial intelligence systems, from AI chatbots to computer vision for robotic navigation. Mentoring other developers on ML best practices.",
        "• Developing back-end and front-end code in Python, Java, and Javascript/Typescript. Versioning with Git, code review with Gerrit, and Agile project management with Jira.",
        "• Maintaining and updating multiple PostgreSQL databases using DBeaver.",
        "• Contributed to a JPEG2000 encoder/decoder using the Rust programming language."
      ],
      technologies: [] // ["python", "pytorch", "java", "typescript", "postgresql", "docker", "git", "gerrit", "jira", "react", "ollama", "rust", "c++",]
    },
    {
      title: "Machine Learning Engineering Intern",
      company: "University of Alberta - Department of Pediatrics",
      duration: "Sept. 2021 - Aug. 2022",
      description: [
        "• Developed a Neo4j knowledge graph containing information on neurodevelopmental disorders. Scraped the web, cleaned data, and trained ML models using Python, scikit-learn, and PyTorch.",
        "• Developed a medical chatbot to enable caretakers of children with neurodevelopmental disorders to find better resources and services.",
        "• Developed data labeling software and used labeled data to fine-tune transformer models."
      ],
      technologies: [] // ["python", "pytorch", "hugging_face", "scikit-learn", "numpy", "pandas"]
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
                          color: 'info.light', // brighter than before
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
                  
                  {/* Bullet point description */}
                  <List dense disablePadding sx={{ mb: 3 }}>
                    {exp.description.map((point, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemText 
                          primary={point} 
                          primaryTypographyProps={{
                            variant: "body1",
                            sx: { color: 'grey.300', lineHeight: 1.6 }
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  {/* Technologies */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {exp.technologies.map((tech, idx) => (
                      <TechIconBox key={idx}>
                        {skillIcons[tech] ? (
                          <img 
                            src={`${BASE_URL}/skills/${skillIcons[tech]}`} 
                            alt={tech} 
                            style={{ width: '70%', height: '70%', objectFit: 'contain' }}
                          />
                        ) : (
                          <Typography variant="caption" sx={{ color: 'white' }}>
                            {tech}
                          </Typography>
                        )}
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
