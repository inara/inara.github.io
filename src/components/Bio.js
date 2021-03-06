import '../index.css';
import '../Typist.scss';
import React from "react";
import "typeface-raleway";
import Grid from "@material-ui/core/Grid";
import Typist from 'react-typist';

function Bio() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{padding: '0px 20px'}}
        >
            <Grid item xs={12} style={{marginTop: '-10px', textAlign: 'center'}}>
                <h1 style={{fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '3em'}}>
                    <Typist cursor={{blink: true, hideWhenDone: true}}>Hi, I'm Inara!</Typist>
                </h1>
            </Grid>
            <Grid item xs={12} style={{marginTop: '-40px', textAlign: 'center'}}>
                <h3 style={{fontFamily: 'Raleway', fontWeight: 'normal'}}>I'm a software engineer at Google working on
                    keeping your Android devices safe and secure.</h3>
            </Grid>
        </Grid>
    )
}

export default Bio;