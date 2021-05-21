import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Container, Grid} from "@material-ui/core";
import {Footer} from "./components/Footer";
import {Menu} from './components/Menu';
import {Route, withRouter} from 'react-router-dom';
import {SearchBoard} from "./components/SearchBoard/SearchBoard";
import {BookMarks} from "./components/BookMarks";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container maxWidth="xl" style={{padding: "0", height: "calc(100vh - 128px)"}}>
                <Grid container style={{height: "100%"}}
                      justify="flex-start"
                      direction="row">
                    <Menu/>
                    <div className="wrap-content">
                        <Route path="/search" render={() => <SearchBoard/>}/>
                        <Route path="/bookmarks" render={() => <BookMarks/>}/>
                    </div>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
}

export default withRouter(App);
