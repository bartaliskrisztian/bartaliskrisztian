import React, { useCallback, useMemo } from 'react';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConstructionIcon from '@mui/icons-material/Construction';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import InfoIcon from '@mui/icons-material/Info';
import ShieldIcon from '@mui/icons-material/Shield';
import { Box, ClickAwayListener, Tooltip } from '@mui/material';

const useStyles = ({ disabled, underConstruction }: { disabled: boolean, underConstruction: boolean }) => ({
  root: {
    border: '1px solid rgb(108 96 96)',
    borderRadius: 4,
    padding: '10px',
    margin: '10px',
    background: 'inherit',
    maxWidth: 300,
    height: 150,
    width: '100%',
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
    py: "4px",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    textAlign: 'center',
    width: "100%"
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
  },
  info: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

interface IProjectCard {
  imageUrl?: string;
  url?: string;
  name?: string;
  title?: string;
  disabled?: boolean;
  isPublic?: boolean;
  underConstruction?: boolean;
  infoComponent?: React.ReactNode;
}

export const ProjectCard = ({
  imageUrl, url, name = "", disabled = false, isPublic = true, underConstruction = false, infoComponent, title
}: IProjectCard) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const styles = useStyles({ disabled, underConstruction });
  const content = useMemo(() => (
    <Grid container item sx={{
      ...styles.root,
      ...(!imageUrl && {
        height: 'fit-content'
      })
    }}>
      {imageUrl ? <img src={imageUrl} alt="" style={styles.image} /> : <Typography sx={styles.title}>{title}</Typography>}
      <Typography variant="body1" sx={{ width: '100%', textAlign: 'center', color: '#fff' }}>
        { (disabled || underConstruction || !url) ? <>{name}</> : (
          <Link href={url} target="_blank" sx={styles.button}>
            check out
            <ArrowForwardIcon sx={styles.icon} />
            {name}
          </Link>
        )}
      </Typography>
    </Grid>
  ), [styles, imageUrl, name, url, disabled, underConstruction, title]);

  return (
    <Grid sx={styles.tooltipWrapper}>
      {content}
      <Box sx={styles.info}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={infoComponent ?? ""}
              placement="bottom-start"
              componentsProps={{
                tooltip: {
                  sx: {
                    borderRadius: '8px',
                    paddingY: '16px'
                  }
                }
              }}
            >
              <InfoIcon sx={{ color: '#fff', cursor: 'pointer' }} onClick={handleTooltipOpen} />
            </Tooltip>
          </div>
        </ClickAwayListener>
      </Box>
    </Grid>
  );
}
