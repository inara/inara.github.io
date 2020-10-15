import React from 'react';
import './App.css';
import ProfilePic from "./components/ProfilePic";
import Bio from "./components/Bio";
import Grid from "@material-ui/core/Grid";
import SocialMedia from "./components/SocialMedia";

function App() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={0}
            style={{minHeight: '100vh'}}
        >
            <Grid item xs={12}>
                <ProfilePic/>
            </Grid>
            <Grid item xs={12}>
                <Bio/>
            </Grid>
            <Grid item xs={12}>
                <SocialMedia/>
            </Grid>
        </Grid>
    );
}

export default App;
