import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Box, Tooltip } from '@mui/material';

const useStyles = ({ disabled, underConstruction }: { disabled: boolean, underConstruction: boolean }) => ({
  root: {
    border: '1px solid rgb(108 96 96)',
    borderRadius: 4,
    padding: '10px',
    margin: '10px',
    background: 'inherit',
    maxWidth: 300,
    height: 150,
    alignItems: 'center',
    ...( disabled || underConstruction ? {} : {
      '&:hover': {
        border: '1px solid #fff',
        transition: 'border 0.3s ease-in-out'
      }
    } )
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  button: {
    textDecoration: 'none',
  },
  tooltipWrapper: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#fff',
    borderRadius: 1,
    background: 'grey',
    py: "4px",
    px: "6px",
  },
  icon: {
    verticalAlign: 'bottom',
    px: 1,
    transition: 'padding 0.2s ease-in-out',
    ...(disabled || underConstruction ? {} : {
      '&:hover': {
        px: 2,
      }
    })
  }
});

interface IProjectCard {
  imageUrl: string;
  url: string;
  name?: string;
  disabled?: boolean;
  underConstruction?: boolean;
}

export const ProjectCard = ({
  imageUrl, url, name, disabled = false, underConstruction = false
}: IProjectCard) => {
  const styles = useStyles({ disabled, underConstruction });
  const content = useMemo(() => (
    <Grid container item sx={styles.root}>
      <img src={imageUrl} alt="" style={styles.image} />
      <Typography variant="body1" sx={{ width: '100%', textAlign: 'center', color: '#fff' }}>
        { (disabled || underConstruction) ? <>{name}</> : (
          <Link href={url} target="_blank" sx={styles.button}>
            check out
            <ArrowForwardIcon sx={styles.icon} />
            {name}
          </Link>
        )}
      </Typography>
    </Grid>
  ), [styles, imageUrl, name, url, disabled, underConstruction]);

  if (disabled) {
    return (
      <Grid sx={styles.tooltipWrapper}>
        {content}
        <Box sx={styles.tooltip}>
          <Typography variant='body2'>{`...not available at the moment :(`}</Typography>
        </Box>
      </Grid>
    );
  }

  if (underConstruction) {
    return (
      <Grid sx={styles.tooltipWrapper}>
        {content}
        <Box sx={styles.tooltip}>
          <Typography variant='body2' sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {`...under construction`}
            <ConstructionIcon fontSize='medium' />
          </Typography>
        </Box>
      </Grid>
    );
  }

  return content;
}
