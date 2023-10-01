import Box from '@mui/material/Box/Box';
import React from 'react';
import './assets/styles/app.css';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Home } from './components/home';
import { MyWorks } from './components/my-works';
import { Skills } from './components/skills';
import { Footer } from './components/footer';

const styles = {
  app: {
    width: {
      xs: '80%',
      md: '50%',
    },
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: 4,
  }
};

function App() {
  return (
    <Box className="App" sx={styles.app}>
      <Header />
      <Home />
      <MyWorks />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
