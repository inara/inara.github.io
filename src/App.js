import React from 'react';
import './App.css';
import ProfilePic from "./components/ProfilePic";
import Bio from "./components/Bio";
import Grid from "@material-ui/core/Grid";

function App() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <ProfilePic/>
            </Grid>
            <Grid item xs={12}>
                <Bio/>
            </Grid>
        </Grid>
    );
}

export default App;
