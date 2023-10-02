import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

const styles = {
  linkWrapper: {
    pr: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#779393'
    } 
  }
};

export const Header = () => (
  <Fade>
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: 'inherit' }}>
        <Toolbar variant="dense" sx={{ padding: '0 !important' }}>
          <Typography sx={styles.linkWrapper}>
            <HashLink smooth to="#home" style={styles.link}>
              home
            </HashLink>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <HashLink smooth to="#work" style={styles.link}>
              work
            </HashLink>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <HashLink smooth to="#skills" style={styles.link}>
              skills
            </HashLink>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <a href="static/bartalis_krisztian_resume.pdf" target="_blank" style={styles.link}>
              resume
            </a>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <HashLink smooth to="#contact" style={styles.link}>
              contact
            </HashLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </Fade>
);
