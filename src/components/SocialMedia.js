import React from "react";
import {SocialIcon} from 'react-social-icons';
import Grid from "@material-ui/core/Grid";

function SocialMedia() {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item xs><SocialIcon url="https://twitter.com/inararamji"/></Grid>
            <Grid item xs><SocialIcon url="https://www.linkedin.com/in/inararamji/"/></Grid>
            <Grid item xs><SocialIcon url="mailto:inara.ramji@gmail.com"/></Grid>
        </Grid>
    )
}

export default SocialMedia;