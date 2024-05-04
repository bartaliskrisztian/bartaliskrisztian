import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Html5Logo from "../assets/images/skills/html5.svg";
import CSS3Logo from "../assets/images/skills/css3.svg";
import TypescriptLogo from "../assets/images/skills/typescript.svg";
import JavascriptLogo from "../assets/images/skills/javascript.svg";
import ReactLogo from "../assets/images/skills/react.svg";
import NodeLogo from "../assets/images/skills/node.svg";
import JavaLogo from "../assets/images/skills/java.svg";
import SpringLogo from "../assets/images/skills/spring.svg";
import MaterialUILogo from "../assets/images/skills/material-ui.svg";
import GraphQlLogo from "../assets/images/skills/graphql.svg";
import DockerLogo from "../assets/images/skills/docker.svg";
import GitLogo from "../assets/images/skills/git.svg";
import ShopifyLogo from "../assets/images/skills/shopify.svg";
import VSCodeLogo from "../assets/images/skills/vscode.svg";
import ElasticsearchLogo from "../assets/images/skills/elasticsearch.svg";
import GrafanaLogo from "../assets/images/skills/grafana.svg";
import IntellijLogo from "../assets/images/skills/intellij.svg";
import MongoLogo from "../assets/images/skills/mongodb.svg";
import Neo4JLogo from "../assets/images/skills/neo4j.svg";
import HerokuLogo from "../assets/images/skills/heroku.svg";
import ReduxLogo from "../assets/images/skills/redux.svg";
import PythonLogo from "../assets/images/skills/python.svg";
import CypherLogo from "../assets/images/skills/cypher.svg";
import SqlLogo from "../assets/images/skills/sql.svg";
import PostmanLogo from "../assets/images/skills/postman.svg";
import SourceTreeLogo from "../assets/images/skills/sourcetree.svg";
import AWSLogo from "../assets/images/skills/aws.svg";
import RedisLogo from "../assets/images/skills/redis.svg";
import StackOverflowLogo from "../assets/images/skills/stack-overflow.svg";
import ChatGPTLogo from "../assets/images/skills/chatgpt.svg";
import NestjsLogo from "../assets/images/skills/nestjs.svg";
import IonicLogo from "../assets/images/skills/ionic.svg";
import DynamodbLogo from "../assets/images/skills/dynamodb.svg";
import S3Logo from "../assets/images/skills/s3.svg";
import RenderLogo from "../assets/images/skills/render.svg";
import Fade from 'react-reveal/Fade';
import { Chip, Divider } from "@mui/material";

const styles = {
  icon: {
    width: '100%',
    maxHeight: 40,
  },
  text: {
    color: 'text.primary',
    textAlign: 'center'
  },
  divider: {
    "&.MuiDivider-root::before, &::after": {
      borderColor: "#808080",
    },
    color: '#808080',
    width: '80%',
    m: 'auto',
    py: 2
  },
  chip: {
    background: '#393c3f'
  },
  subtitle: {
    color: 'text.primary',
    pl: 2
  }
};

export const Skills = () => (
  <Fade>
    <Grid pt={3} width="100%" id="skills">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        skills
      </Typography>
      <Grid container pt={3} rowSpacing={2} columnSpacing={2}>
        <Grid container>
          <Divider sx={styles.divider}>
            <Chip sx={styles.chip} label="Languages" />
          </Divider>
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={4} md={2}>
            <img src={JavascriptLogo} alt="javascript logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>JavaScript</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={TypescriptLogo} alt="typescript logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>TypeScript</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={JavaLogo} alt="java logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Java</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={PythonLogo} alt="python logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Python</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={GraphQlLogo} alt="graphql logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>GraphQL</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={SqlLogo} alt="SQL logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>SQL</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={CypherLogo} alt="cypher logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Cypher</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Divider sx={styles.divider}>
            <Chip sx={styles.chip} label="Web development" />
          </Divider>
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={4} md={2}>
            <img src={Html5Logo} alt="html5 logo" style={styles.icon} className="skill-icon" />
            <Typography variant="body1" sx={styles.text}>HTML5</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={CSS3Logo} alt="css3 logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>CSS3</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={ReactLogo} alt="react logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>ReactJS</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={NodeLogo} alt="node logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>NodeJS</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={SpringLogo} alt="spring logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Spring Boot</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={NestjsLogo} alt="nestjs logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>NestJS</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={MaterialUILogo} alt="material ui logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>MUI</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={IonicLogo} alt="ionic logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Ionic</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={ReduxLogo} alt="redux logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Redux toolkit</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={ShopifyLogo} alt="shopify logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Shopify</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Divider sx={styles.divider}>
            <Chip sx={styles.chip} label="Database and data management" />
          </Divider>
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={4} md={2}>
            <img src={DynamodbLogo} alt="dynamodb logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>AWS DynamoDB</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={S3Logo} alt="s3 logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>AWS S3</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={ElasticsearchLogo} alt="elasticsearch logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Elasticsearch</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={MongoLogo} alt="mongodb logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>MongoDB</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={Neo4JLogo} alt="neo4j logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Neo4J</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={RedisLogo} alt="redis logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Redis</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Divider sx={styles.divider}>
            <Chip sx={styles.chip} label="Version control and Development Tools" />
          </Divider>
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={4} md={2}>
            <img src={DockerLogo} alt="docker logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Docker</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={GrafanaLogo} alt="grafana logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Grafana</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={GitLogo} alt="git logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Git</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={VSCodeLogo} alt="vscode logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>VSCode</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={IntellijLogo} alt="intellij logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>IntellIJ</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={PostmanLogo} alt="postman logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Postman</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={SourceTreeLogo} alt="sourcetree logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>SourceTree</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Divider sx={styles.divider}>
            <Chip sx={styles.chip} label="Cloud Services" />
          </Divider>
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={4} md={2}>
            <img src={AWSLogo} alt="aws logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>AWS</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={HerokuLogo} alt="heroku logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Heroku</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={RenderLogo} alt="render logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Render</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Typography variant="h5" sx={styles.text}>...and most importantly</Typography>
      </Grid>
      <Grid container pt={3} columnSpacing={2} justifyContent="center">
        <Grid item xs={4} md={2}>
          <img src={StackOverflowLogo} alt="stack overflow logo" style={styles.icon} />
          <Typography variant="body1" sx={styles.text}>Stack Overflow</Typography>
        </Grid>
        <Grid item xs={4} md={2}>
          <img src={ChatGPTLogo} alt="chatgpt logo" style={styles.icon} />
          <Typography variant="body1" sx={styles.text}>ChatGPT</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);