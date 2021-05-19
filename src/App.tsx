import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Container, Grid} from "@material-ui/core";
import {Footer} from "./components/Footer";
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
        <Container maxWidth="xl" style={{padding: "0", height: "calc(100vh - 128px)"}}>
            <Grid container style={{height: "100%"}}
                  justify="flex-start"
                  direction="row">
                <Menu/>
                <div>Main content</div>
            </Grid>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
