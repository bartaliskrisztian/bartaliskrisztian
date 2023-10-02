import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const styles = {
  root: {
    boxShadow: '2px 2px 1px 0px rgba(219,207,207,0.75)',
    borderRadius: 4,
    padding: '10px',
    margin: '10px',
    background: 'inherit',
    maxWidth: 300,
    height: 150,
    alignItems: 'center',
    '&:hover': {
      boxShadow: '4px 3px 1px 0px rgba(219,207,207,0.75)',
      transition: 'box-shadow 0.3s ease-in-out'
    }
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  button: {
    textDecoration: 'none',
  },
  icon: {
    verticalAlign: 'bottom',
    px: 1,
    transition: 'padding 0.2s ease-in-out',
    '&:hover': {
      px: 2,
    }
  }
};

interface IProjectCard {
  imageUrl: string;
  url: string;
  name?: string;
}

export const ProjectCard = ({ imageUrl, url, name }: IProjectCard) => {
  return (
    <Grid container item sx={styles.root}>
      <img src={imageUrl} alt="" style={styles.image} />
      <Typography variant="body1" sx={{ width: '100%', textAlign: 'center' }}>
        <Link href={url} sx={styles.button}>
          check out
          <ArrowForwardIcon sx={styles.icon} />
          {name}
        </Link>
      </Typography>
    </Grid>
  );
}
