// import { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   LinearProgress,
//   Tooltip,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const StyledSection = styled(Box)(({ theme }) => ({
//   minHeight: '100vh',
//   backgroundColor: theme.palette.grey[800],
//   paddingTop: theme.spacing(10),
//   paddingBottom: theme.spacing(10),
// }));

// const SkillCard = styled(Card)(({ theme }) => ({
//   backgroundColor: theme.palette.grey[700],
//   borderRadius: theme.spacing(1.5),
//   cursor: 'pointer',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: theme.palette.grey[600],
//     transform: 'scale(1.1)',
//     boxShadow: `0 8px 24px ${theme.palette.cyan?.main}30` || `0 8px 24px ${theme.palette.info.main}30`,
//   },
// }));

// const SkillIcon = styled(Box)({
//   width: 80,
//   height: 80,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '3rem',
//   margin: '0 auto',
// });

// const StyledTooltip = styled(Tooltip)(({ theme }) => ({
//   '& .MuiTooltip-tooltip': {
//     backgroundColor: theme.palette.grey[900],
//     borderRadius: theme.spacing(1),
//     padding: theme.spacing(2),
//     boxShadow: theme.shadows[20],
//     minWidth: 200,
//   },
//   '& .MuiTooltip-arrow': {
//     color: theme.palette.grey[900],
//   },
// }));

// const GradientProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 8,
//   borderRadius: 4,
//   backgroundColor: theme.palette.grey[600],
//   '& .MuiLinearProgress-bar': {
//     background: 'linear-gradient(45deg, #00bcd4 30%, #9c27b0 90%)',
//     borderRadius: 4,
//   },
// }));

// const SkillsSection = () => {
//   const [hoveredSkill, setHoveredSkill] = useState<any>(null);

//   const skills = [
//     { name: "Python", level: 95, icon: "🐍" },
//     { name: "TensorFlow", level: 90, icon: "🧠" },
//     { name: "PyTorch", level: 85, icon: "🔥" },
//     { name: "Scikit-learn", level: 90, icon: "📊" },
//     { name: "AWS", level: 80, icon: "☁️" },
//     { name: "Docker", level: 75, icon: "🐳" },
//     { name: "Kubernetes", level: 70, icon: "⚙️" },
//     { name: "SQL", level: 85, icon: "💾" },
//     { name: "Git", level: 90, icon: "🔄" },
//     { name: "Jupyter", level: 95, icon: "📓" },
//     { name: "MLflow", level: 80, icon: "🚀" },
//     { name: "Apache Spark", level: 75, icon: "⚡" }
//   ];

//   const TooltipContent = ({ skill }: { skill: any }) => (
//     <Box>
//       <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'medium', mb: 1 }}>
//         {skill.name}
//       </Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//         <GradientProgress
//           variant="determinate"
//           value={skill.level}
//           sx={{ flex: 1 }}
//         />
//         <Typography 
//           variant="body2" 
//           sx={{ 
//             color: 'cyan.main',
//             fontWeight: 'medium',
//             minWidth: '3ch'
//           }}
//         >
//           {skill.level}%
//         </Typography>
//       </Box>
//     </Box>
//   );

//   return (
//     <StyledSection id="skills">
//       <Container maxWidth="lg">
//         <Typography 
//           variant="h2" 
//           component="h2" 
//           sx={{ 
//             fontWeight: 'bold', 
//             color: 'white',
//             textAlign: 'center',
//             mb: 8
//           }}
//         >
//           Technical Skills
//         </Typography>
        
//         <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
//           {skills.map((skill) => (
//             <Grid key={skill.name} size={{
//               xs: 6,
//               sm: 4,
//               md: 3,
//               lg: 2
//             }}>
//               <StyledTooltip
//                 title={<TooltipContent skill={skill} />}
//                 arrow
//                 placement="top"
//                 enterDelay={300}
//                 leaveDelay={200}
//               >
//                 <SkillCard
//                   onMouseEnter={() => setHoveredSkill(skill)}
//                   onMouseLeave={() => setHoveredSkill(null)}
//                 >
//                   <CardContent sx={{ p: 2 }}>
//                     <SkillIcon>
//                       {skill.icon}
//                     </SkillIcon>
//                   </CardContent>
//                 </SkillCard>
//               </StyledTooltip>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </StyledSection>
//   );
// };

// export default SkillsSection;