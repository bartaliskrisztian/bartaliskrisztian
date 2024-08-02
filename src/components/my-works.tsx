import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';
import { ProjectCard } from "./project-card";
import JohnHairImage from "../assets/images/work/johnhair.avif";
import OilsPowerImage from '../assets/images/work/oilspower.svg';
import TherapistiImage from '../assets/images/work/therapisti.svg';
import BoldingatlanImage from '../assets/images/work/boldingatlan.svg';
import ConstructionIcon from '@mui/icons-material/Construction';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import InfoIcon from '@mui/icons-material/Info';
import { Chip, Divider } from "@mui/material";
import ShieldIcon from '@mui/icons-material/Shield';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { techStacks } from "../assets/techStacks";

const styles = {
  icon: {
    width: 20,
    height: 20
  },
  explanation: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#817b7b',
    fontStyle: 'italic'
  },
  divider: {
    width: '100%',
    background: '#fff',
    my: 1
  },
  chip: {
    background: '#393c3f',
    mx: 'auto',
    my: 4,
  },
};

const ProjectInfo = ({ description, techStack, duration }: any) => (
  <Grid container>
    <Grid>
      <Typography variant="subtitle1" fontWeight={700} mb={1}>General</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </Grid>
    <Divider sx={styles.divider} />
    <Grid>
      <Typography variant="subtitle1" fontWeight={700} mb={1}>Tech stack</Typography>
      <Grid container gap="8px">
        {techStack?.map((techName: string) => {
          const tech = techStacks?.[techName];
          return (
            <Typography variant="body2" display="flex" gap="4px">
              <img src={tech?.logo} alt={tech?.alt} style={styles.icon} />
              {tech?.name}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
    <Divider sx={styles.divider} />
    <Grid>
      <Typography variant="subtitle1" fontWeight={700} mb={1}>Duration</Typography>
      <Typography variant="body2" display="flex" gap="4px">
        <HourglassBottomIcon />
        {duration}
      </Typography>
    </Grid>
  </Grid>
)

export const MyWorks = () => (
  <Fade>
    <Grid pt={3} width="100%" id="work">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        my recent work
      </Typography>
      <Typography variant="body1" pt={2} sx={{ color: 'text.primary' }}>
        Here are a few past projects I've worked on.
      </Typography>
      <Grid container gap={3} mt={2}>
        <Grid>
          <Typography variant='body2' sx={styles.explanation}>
            <InfoIcon fontSize='medium' sx={{ color: '#fff' }} />
            {` - info about the project`}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body2' sx={styles.explanation}>
            <ConstructionIcon fontSize='medium' sx={{ color: '#d08e36' }} />
            {` - under construction`}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body2' sx={styles.explanation}>
            <ShieldIcon fontSize='medium' sx={{ color: '#fff' }} />
            {` - not public`}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body2' sx={styles.explanation}>
            <DoDisturbIcon fontSize='medium' sx={{ color: '#da0c0c' }} />
            {` - not available :(`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Chip sx={styles.chip} label="Side projects" />
      </Grid>
      <Grid container pt={3} gap={2} justifyContent="center">
        <ProjectCard
          imageUrl={JohnHairImage}
          name="johnhair.ro"
          url="https://johnhair.ro"
          infoComponent={(
            <ProjectInfo
              description="Webshop created and hosted by Shopify. Responsive design, payment gateway setup, improved SEO."
              techStack={['shopify', 'html', 'css']}
              duration="1 month"
            />
          )}
        />
        <ProjectCard
          imageUrl={OilsPowerImage}
          name="oilspower.ro"
          url="https://oilspower.ro"
          infoComponent={(
            <ProjectInfo
              description={(
                <Grid>
                  <Typography variant="body2">Webshop built from scratch (with CMS functionalities) for purchasing essential oil products.</Typography>
                  <Typography variant="body2">Responsive design.</Typography>
                  <Typography variant="body2">Hosted on Render with CI/CD.</Typography>
                </Grid>
              )}
              techStack={['javascript', 'mongodb', 'html', 'css']}
              duration="6 months"
            />
          )}
          disabled
        />
        <ProjectCard
          imageUrl={TherapistiImage}
          name="therapisti.ro"
          url="https://therapisti.ro"
          infoComponent={(
            <ProjectInfo
              description={(
                <Grid container flexDirection="column" gap="8px">
                  <Typography variant="body2">This website is built for a manual therapist, providing a platform for both marketing and appointment management. Users can easily schedule appointments online and receive email notifications to confirm their bookings.</Typography>
                  <Typography variant="body2">The website also features a comprehensive admin panel, where the therapist can define and manage services, set up available appointment times by configuring a calendar, and approve or decline appointment requests. This ensures streamlined management of the therapist's schedule and enhances the overall client experience.</Typography>
                </Grid>
              )}
              techStack={['react', 'typescript', 'node', 'nest', 'mongodb', 'html', 'css', 'mui']}
              duration="...in progress"
            />
          )}
          underConstruction
        />
        <ProjectCard
          imageUrl={BoldingatlanImage}
          name="boldingatlan.hu"
          url="https://boldingatlan.hu"
          infoComponent={(
            <ProjectInfo
              description={(
                <Grid container flexDirection="column" gap="8px">
                  <Typography variant="body2">This website is designed to advertise real estate properties, offering robust features for both property management and site customization. Properties can be created, edited, and deleted through the admin interface, allowing for efficient management of listings.</Typography>
                  <Typography variant="body2">In addition to these capabilities, the site also includes CMS functionalities, enabling customization of the page's appearance to better align with branding and marketing goals.</Typography>
                </Grid>
              )}
              techStack={['php', 'html', 'css', 'sql']}
              duration="3 months"
            />
          )}
        />
      </Grid>
      <Grid container>
        <Chip sx={styles.chip} label="Projects from work" />
      </Grid>
      <Grid container pt={3} gap={4} justifyContent="center">
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
              techStack={[ 'react', 'javascript', 'node', 'aws', 'lambda', 's3', 'dynamodb', 'redux', 'html', 'css', 'ionic']}
              duration="feb. 2024 - present"
            />
          )}
        />
      </Grid>
    </Grid>
  </Fade>
);