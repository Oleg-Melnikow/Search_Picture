import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Container, Grid} from "@material-ui/core";
import {Footer} from "./components/Footer";
import {Menu} from './components/Menu/Menu';
import {Route, Switch, Redirect} from 'react-router-dom';
import {BookMarks} from "./components/BookMarks";
import {SearchBoardContainer} from "./components/SearchBoard/SearchBoardContainer";
import {PageNotFound} from "./components/PageNotFound/PageNotFound";

function App() {

    return (
        <div className="App">
            <Header/>
            <Container maxWidth="xl" className="container">
                <Grid container className="grid" justify="flex-start" direction="row">
                    <Menu/>
                    <div className="wrap-content">
                        <Switch>
                            <Route exact path="/search" render={() => <SearchBoardContainer/>}/>
                            <Route path="/bookmarks" render={() => <BookMarks/>}/>
                            <Route path="/404" render={() => <PageNotFound/>}/>
                            <Redirect exact from="/" to="/search"/>
                            <Redirect from="*" to="/404"/>
                        </Switch>
                    </div>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
