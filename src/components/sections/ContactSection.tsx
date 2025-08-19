import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[900],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(4),
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const IconContainer = styled(Box)(({ theme, bgcolor }: { theme?: any; bgcolor: string }) => ({
  width: 48,
  height: 48,
  backgroundColor: bgcolor,
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00bcd4 30%, #9c27b0 90%)',
  '&:hover': {
    background: 'linear-gradient(45deg, #00acc1 30%, #8e24aa 90%)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
  fontWeight: 'medium',
  padding: theme.spacing(1.5, 3),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
  },
  transition: 'background-color 0.3s ease',
}));

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <StyledSection id="contact">
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
          Get In Touch
        </Typography>
        
        {showAlert && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Message sent! (This is a demo)
          </Alert>
        )}
        
        <Grid container spacing={6} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {/* Contact Info */}
          <Grid size={{
            xs: 12,
            lg: 6
          }}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'grey.300', 
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about ML, feel free to reach out!
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <ContactInfoBox>
                <IconContainer bgcolor="#00bcd4">
                  <EmailIcon sx={{ color: 'white' }} />
                </IconContainer>
                <Box>
                  <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'medium' }}>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    your.email@example.com
                  </Typography>
                </Box>
              </ContactInfoBox>
              
              <ContactInfoBox>
                <IconContainer bgcolor="#9c27b0">
                  <PhoneIcon sx={{ color: 'white' }} />
                </IconContainer>
                <Box>
                  <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'medium' }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </ContactInfoBox>
              
              <ContactInfoBox>
                <IconContainer bgcolor="#e91e63">
                  <LocationOnIcon sx={{ color: 'white' }} />
                </IconContainer>
                <Box>
                  <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'medium' }}>
                    Location
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    Your City, Country
                  </Typography>
                </Box>
              </ContactInfoBox>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialIconButton href="#" aria-label="GitHub">
                <GitHubIcon sx={{ color: 'white' }} />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="LinkedIn">
                <LinkedInIcon sx={{ color: 'white' }} />
              </SocialIconButton>
            </Box>
          </Grid>
          
          {/* Contact Form */}
          <Grid size={{
            xs: 12,
            lg: 6
          }}>
            <ContactCard>
              <CardContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'grey.700',
                        '& input': { color: 'white' },
                        '&:hover fieldset': { borderColor: 'cyan.main' },
                        '&.Mui-focused fieldset': { borderColor: 'cyan.main' },
                      },
                      '& .MuiInputLabel-root': { color: 'white' },
                      '& .MuiInputLabel-root.Mui-focused': { color: 'cyan.main' },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'grey.700',
                        '& input': { color: 'white' },
                        '&:hover fieldset': { borderColor: 'cyan.main' },
                        '&.Mui-focused fieldset': { borderColor: 'cyan.main' },
                      },
                      '& .MuiInputLabel-root': { color: 'white' },
                      '& .MuiInputLabel-root.Mui-focused': { color: 'cyan.main' },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'grey.700',
                        '& textarea': { color: 'white' },
                        '&:hover fieldset': { borderColor: 'cyan.main' },
                        '&.Mui-focused fieldset': { borderColor: 'cyan.main' },
                      },
                      '& .MuiInputLabel-root': { color: 'white' },
                      '& .MuiInputLabel-root.Mui-focused': { color: 'cyan.main' },
                    }}
                  />
                  
                  <GradientButton
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </GradientButton>
                </Box>
              </CardContent>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default ContactSection;