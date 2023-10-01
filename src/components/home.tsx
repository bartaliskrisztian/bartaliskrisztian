import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image1 from '../assets/images/home/bartalis-krisztian-1.jpg';
import Image2 from '../assets/images/home/bartalis-krisztian-2.jpg';
import Image3 from '../assets/images/home/bartalis-krisztian-3.jpg';
import Image4 from '../assets/images/home/alex.jpg';
import Image5 from '../assets/images/home/bp.jpg';
import Image6 from '../assets/images/home/workspace.jpg';
import Fade from 'react-reveal/Fade';

const styles = {
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    objectFit: 'cover',
  }
} as any;

export const Home = () => (
  <Fade>
    <Grid pt={3} width="100%" id="home">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        hi, I'm Krisz
        <WavingHandIcon sx={{ px: 1 }} />
      </Typography>
      <Grid pt={2}>
        <Typography sx={{ color: 'text.primary' }}>
          I'm a full stack developer. I currently work as a software engineer at Sonrisa Technologies.
        </Typography>
        <Typography sx={{ color: 'text.primary', pt: 1 }}>
          As a passionate software engineer, I am always trying to learn new things and look for elegant and simple
          solutions for current problems, deficiencies. I am mostly interested in modern problem solving, software
          development and artificial intelligence.
        </Typography>
      </Grid>
      <Grid container flexDirection="row" columnSpacing={1} rowSpacing={1} pt={3}>
        <Grid container item xs={6} md={4} rowSpacing={1}>
          <Grid item>
            <img src={Image6} alt="" style={styles.image} />
          </Grid>
          <Grid item>
            <img src={Image2} alt="" style={styles.image} />
          </Grid>
        </Grid>
        <Grid container item xs={6} md={4} rowSpacing={1}>
          <Grid item>
            <img src={Image3} alt="" style={styles.image} />
          </Grid>
          <Grid item>
            <img src={Image4} alt="" style={styles.image} />
          </Grid>
        </Grid>
        <Grid container item xs={12} md={4} columnSpacing={1} rowSpacing={1}>
          <Grid item xs={6} md={12}>
            <img src={Image5} alt="" style={styles.image} />
          </Grid>
          <Grid item xs={6} md={12}>
            <img src={Image1} alt="" style={styles.image} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);
