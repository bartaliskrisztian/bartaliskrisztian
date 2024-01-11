import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { useWindowPosition } from "../hooks/use-window-position";
import { useMemo } from "react";

const styles = {
  root: {
    width: '100%',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    transition: 'background-color 1s ease',
    zIndex: 1000,
  },
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

export const Header = () => {
  const { scrollPosition } = useWindowPosition();
  const rootSx = useMemo(() => ({
    ...styles.root,
    backgroundColor: scrollPosition > 30 ? 'rgba(1, 1, 1, 0.9)' : 'transparent',
  }), [scrollPosition]);

  return (
    <Fade>
      <Box sx={rootSx}>
        <AppBar position="static" sx={{ backgroundColor: 'inherit', pt: 2 }}>
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
}
