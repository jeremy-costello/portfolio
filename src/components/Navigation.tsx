import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.grey[900], 0.9),
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid ${theme.palette.grey[700]}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.cyan?.main || theme.palette.info.main,
  },
  '&.active': {
    color: theme.palette.cyan?.main || theme.palette.info.main,
  },
}));

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const trigger = useScrollTrigger();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                color: 'white' 
              }}
            >
              Jeremy Costello
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <StyledButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                  sx={{ textTransform: 'none' }}
                >
                  {item.label}
                </StyledButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Slide>
  );
};

export default Navigation;