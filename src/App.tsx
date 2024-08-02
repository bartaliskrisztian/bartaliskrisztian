import Box from '@mui/material/Box/Box';
import React from 'react';
import './assets/styles/app.css';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Home } from './components/home';
import { MyWorks } from './components/my-works';
import { Skills } from './components/skills';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';
import { Divider } from '@mui/material';

const styles = {
  app: {
    width: {
      xs: '80%',
      md: '60%',
    },
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: 4,
  },
  divider: {
    width: '100%',
    background: 'grey',
    mt: 2
  }
};

function App() {
  return (
    <Box className="App" sx={styles.app}>
      <Header />
      <Home />
      <Divider sx={styles.divider} />
      <MyWorks />
      <Divider sx={styles.divider} />
      <Skills />
      <Divider sx={styles.divider} />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}

export default App;
