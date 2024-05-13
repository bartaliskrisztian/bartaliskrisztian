import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';
import { ProjectCard } from "./project-card";
import JohnHairImage from "../assets/images/work/johnhair.avif";
import OilsPowerImage from '../assets/images/work/oilspower.svg';
import TherapistiImage from '../assets/images/work/therapisti.svg';

export const MyWorks = () => (
  <Fade>
    <Grid pt={3} width="100%" id="work">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        my recent work
      </Typography>
      <Typography variant="body1" pt={2} sx={{ color: 'text.primary' }}>
        Here are a few past projects I've worked on.
      </Typography>
      <Grid container pt={3} rowSpacing={2}>
        <ProjectCard imageUrl={JohnHairImage} name="johnhair.ro" url="https://johnhair.ro" />
        <ProjectCard imageUrl={OilsPowerImage} name="oilspower.ro" url="https://oilspower.ro" disabled />
        <ProjectCard imageUrl={TherapistiImage} name="therapisti.ro" url="https://oilspower.ro" underConstruction />
      </Grid>
    </Grid>
  </Fade>
);