import '../index.css';
import React from "react";
import "typeface-raleway";
import Grid from "@material-ui/core/Grid";

function Bio() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <h1 style={{fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '3em'}}>Hi, I'm Inara!</h1>
            </Grid>
            <Grid item xs={12}>
                <h3 style={{fontFamily: 'Raleway', fontWeight: 'normal'}}>I'm a software engineer at Google.</h3>
            </Grid>
        </Grid>
    )
}

export default Bio;