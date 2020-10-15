import React from 'react';
import './App.css';
import ProfilePic from "./components/ProfilePic";
import Grid from "@material-ui/core/Grid";

function App() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} >
                <ProfilePic/>
            </Grid>
        </Grid>
    );
}

export default App;
