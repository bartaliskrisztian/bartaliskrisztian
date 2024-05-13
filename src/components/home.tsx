import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import PlaceIcon from '@mui/icons-material/Place';
import Image1 from '../assets/images/home/bartalis-krisztian-1.jpg';
import Image2 from '../assets/images/home/bartalis-krisztian-2.jpg';
import Image3 from '../assets/images/home/bartalis-krisztian-3.jpg';
import Image4 from '../assets/images/home/alex.jpg';
import Image5 from '../assets/images/home/bp.jpg';
import Image6 from '../assets/images/home/workspace.jpg';
import Fade from 'react-reveal/Fade';
import { useCallback } from "react";

const styles = {
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    objectFit: 'cover',
    opacity: 0,
    transition: 'all 0.75s ease',
    '-webkit-transition': 'all 0.75s ease',
    '-moz-transition': 'all 0.75s ease',
    '-ms-transition': 'all 0.75s ease',
    '-o-transition': 'all 0.75s ease',
  }
} as any;

export const Home = () => {
  const onImageLoad = useCallback((event: any) => event.currentTarget.style.opacity = 1, []);

  return (
    <Fade>
      <Grid pt={{ xs: 1, md: 4 }} width="100%" id="home">
        <Grid container direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
          <Typography variant="h3" sx={{ color: 'text.primary', pb: { xs: 2, md: 0 }, m: { xs: 'auto', md: 0 } }}>
            hi, I'm Krisz
            <span className="wave">👋</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', m: { xs: 'auto', md: 0 } }}>
            <PlaceIcon sx={{ pr: 1, verticalAlign: 'bottom' }} />
            Budapest, Hungary
          </Typography>
        </Grid>
        <Grid pt={2}>
          <Typography sx={{ color: 'text.primary' }}>
            I’m a full stack web developer with almost 3 years experience and I currently work as a software engineer at Sonrisa Technologies.
            As an enthusiastic software engineer, my constant pursuit involves acquiring new knowledge and seeking
            streamlined solutions to address current problems and challenges.
          </Typography>
          <Typography sx={{ color: 'text.primary', pt: 1 }}>
            I very much enjoy working on both the front-end and back-end development. I find it important to maintain
            a balance between these two areas. I typically work with the technologies listed below, but I am always open
            to exploring new things. I understand that mastering various programming techniques and methodologies is
            more crucial than delving into the details of specific technologies. Programming is a hobby for me, and I
            greatly enjoy it. However, it is equally important for me to work in a friendly environment where I can
            continually improve.
          </Typography>
        </Grid>
        <Grid container flexDirection="row" columnSpacing={1} rowSpacing={1} pt={3}>
          <Grid container item xs={6} md={4} rowSpacing={1}>
            <Grid item>
              <img src={Image6} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item>
              <img src={Image2} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
          <Grid container item xs={6} md={4} rowSpacing={1}>
            <Grid item>
              <img src={Image3} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item>
              <img src={Image4} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={4} columnSpacing={1} rowSpacing={1}>
            <Grid item xs={6} md={12}>
              <img src={Image5} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item xs={6} md={12}>
              <img src={Image1} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}
