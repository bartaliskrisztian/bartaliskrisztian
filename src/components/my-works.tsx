import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import JohnHairImage from "../assets/images/work/johnhair.avif";
import TherapistiImage from '../assets/images/work/therapisti.svg';
import HFNImage from '../assets/images/work/hfn_logo.png';
import BoldingatlanImage from '../assets/images/work/boldingatlan.png';
import { Box, Chip } from "@mui/material";
import useImageLoading from "../hooks/use-image-loading";
import { useDrawer } from "../providers/DrawerProvider";
import { ReactNode, useCallback } from "react";
import { ProjectDrawer } from "./project-drawer";

const styles = {
  chip: {
    background: '#393c3f',
    mx: 'auto',
    my: 4,
  },
  imageWrapper: {
    height: 90,
    border: '1px solid #6c6060',
    borderRadius: '8px',
    padding: '20px',
    transition: 'all 300ms ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#fff'
    }
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down'
  }
};

type Project = {
  image: string;
  description: ReactNode;
  techStack: any[];
  duration: string;
  url?: {
    displayName: string;
    link: string;
  };
};

const projects: Project[] = [
  {
    image: HFNImage,
    description: (
      <Grid container flexDirection="column" gap="8px">
        <Typography variant="subtitle1">
          A simple SPA developed with React and MUI for an MMA organization, showcasing events, fighters, a gallery,
          and more.
        </Typography>
      </Grid>
    ),
    url: {
      displayName: "hargitafightnight.ro",
      link: "https://hargitafightnight.ro"
    },
    techStack: ['react', 'typescript', 'html', 'css', 'mui'],
    duration: "1 week"
  },
  {
    image: TherapistiImage,
    description: (
      <Grid container flexDirection="column" gap="8px">
        <Typography variant="subtitle1">This website is built for a manual therapist, providing a platform for both marketing and appointment management. Users can easily schedule appointments online and receive email notifications to confirm their bookings.</Typography>
        <Typography variant="subtitle1">The website also features a comprehensive admin panel, where the therapist can define and manage services, set up available appointment times by configuring a calendar, and approve or decline appointment requests. This ensures streamlined management of the therapist's schedule and enhances the overall client experience.</Typography>
      </Grid>
    ),
    techStack: ['react', 'typescript', 'node', 'nest', 'mongodb', 'html', 'css', 'mui'],
    duration: "...in progress"
  },
  {
    image: BoldingatlanImage,
    description: (
      <Grid container flexDirection="column" gap="8px">
        <Typography variant="subtitle1">This website is designed to advertise real estate properties, offering robust features for both property
          management and site customization. Properties can be created, edited, and deleted through the admin
          interface, allowing for efficient management of listings.</Typography>
        <Typography variant="subtitle1">
          In addition to these capabilities, the site also includes CMS functionalities, enabling customization of the
          page’s appearance to better align with branding and marketing goals.
        </Typography>
        <Typography variant="subtitle1">
          At the client’s request, the initial PHP/MySQL stack was retained and completely refactored by me, along
          with a complete redesign of the UI.
        </Typography>
      </Grid>
    ),
    url: {
      displayName: "boldingatlan.hu",
      link: "https://boldingatlan.hu"
    },
    techStack: ['php', 'html', 'css', 'sql'],
    duration: "3 months"
  },
  {
    image: JohnHairImage,
    description: (
      <Grid container flexDirection="column" gap="8px">
        <Typography variant="subtitle1">Webshop created with Shopify.</Typography>
        <Typography variant="subtitle1">Some coding in Liquid scripts, payment gateway setup, SEO improvements, and domain configuration.</Typography>
      </Grid>
    ),
    url: {
      displayName: "johnhair.ro",
      link: "https://johnhair.ro"
    },
    techStack: ['shopify', 'html', 'css'],
    duration: "1 month"
  },
];

export const MyWorks = () => {
  const { onImageLoad } = useImageLoading();
  const { showDrawer } = useDrawer();

  const onProjectClick = useCallback((project: Project) => {
    showDrawer({
      component: ProjectDrawer,
      componentProps: project
    })
  }, [showDrawer]);

  return (
      <Grid pt={3} width="100%" id="work">
        <Typography variant="h3" sx={{ color: 'text.primary' }}>
          my recent work
        </Typography>
      <Typography variant="body1" pt={2} sx={{ color: '#8d8d8d' }}>
          Here are a few past projects I've worked on.
        </Typography>
        <Grid container>
          <Chip sx={styles.chip} label="Side projects" />
        </Grid>
        <Grid container pt={1} gap={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} sx={styles.imageWrapper} onClick={() => onProjectClick(project)}>
              <Box
                component="img"
                className="smooth-loading"
                onLoad={onImageLoad}
                src={project.image}
                sx={styles.image}
              />
            </Grid>
          ))}
        </Grid>
        {/* <Grid container pt={5}>
          <Chip sx={styles.chip} label="Projects from work" />
        </Grid>
        <Grid container gap={4} justifyContent="center">
          <ProjectCard
            title="GEARS"
            isPublic={false}
            infoComponent={(
              <ProjectInfo
                description="A tool designed for MLM companies that automates commission calculations through a configurable engine, allowing all commission rules to be customized. Payouts are also automated, streamlining the process. The tool integrates with eCommerce platforms like Shopify to feed data into the system. Clients can access analytics, track the growth of their company, manage users, and oversee various aspects of their business through a comprehensive dashboard."
                techStack={['react', 'typescript', 'java', 'spring', 'node', 'nest', 'lambda', 'elasticsearch', 'sql', 'grafana', 'graphql', 'aws', 's3', 'neo4j', 'cypher', 'redis', 'shopify', 'html', 'css', 'mui', 'redux', 'docker']}
                duration="2 and a half years"
              />
            )}
          />
          <ProjectCard
            title="SENSEI"
            isPublic={false}
            infoComponent={(
              <ProjectInfo
                description="Support work for Sensei, a company that leverages data-driven health knowledge and technology to create premier wellbeing retreats in Hawaii and California, promoting preventative care and healthy lifestyle practices. This role involves addressing production bug fixes, developing small feature requests, and communicating in English with American clients, with most meetings taking place in the late afternoon."
                techStack={['react', 'typescript', 'node', 'sql', 'graphql', 'aws', 's3', 'html', 'css', 'mui', 'redux', 'docker']}
                duration="6 months"
              />
            )}
          />
          <ProjectCard
            title="Socialbud"
            isPublic={false}
            infoComponent={(
              <ProjectInfo
                description="This tool is designed for individuals and companies to automate and streamline their marketing efforts, effectively replacing the need for manual content creation. By providing detailed information about their company, goals, target audience, and follower demographics, users can leverage the power of OpenAI to generate tailored social media posts. The tool continuously creates content that aligns with the user’s brand and objectives, and it automatically schedules these posts for publication across all connected social media platforms. This ensures a consistent and engaging online presence without the ongoing need for manual input, allowing users to focus on other aspects of their business while their social media strategy is handled seamlessly."
                techStack={['react', 'javascript', 'node', 'aws', 'lambda', 's3', 'dynamodb', 'redux', 'html', 'css', 'ionic']}
                duration="feb. 2024 - present"
              />
            )}
          />
        </Grid> */}
      </Grid>
  );
}