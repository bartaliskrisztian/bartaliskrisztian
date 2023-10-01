import Grid from "@mui/material/Grid/Grid";
import Link from "@mui/material/Link/Link";
import Typography from "@mui/material/Typography/Typography";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';

const styles = {
  icon: {
    width: '100%',
    height: 40,
    color: 'text.primary',
  },
  iconWrapper: {
    textDecoration: 'none',
  }
};

export const Contact = () => (
  <Fade>
    <Grid pt={3} width="100%" id="contact">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        contact
      </Typography>
      <Grid pt={2}>
        <Typography sx={{ color: 'text.primary' }}>
          follow me
        </Typography>
      </Grid>
      <Grid container pt={3} rowSpacing={2} columnSpacing={2}>
        <Grid item>
          <Link href='mailto:bartaliskrisztian4@gmail.com'>
            <EmailIcon style={styles.icon} />
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://github.com/bartaliskrisztian'>
            <GitHubIcon style={styles.icon} />
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.facebook.com/bartalis.krisztian'>
            <FacebookIcon style={styles.icon} />
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.instagram.com/__burai'>
            <InstagramIcon style={styles.icon} />
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.linkedin.com/in/bartaliskrisztian'>
            <LinkedInIcon style={styles.icon} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);