import React from 'react';
import './Footer.css';
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, VolumeDown,   PlaylistPlay } from '@material-ui/icons';
import { Slider, Grid } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://themusicnetwork.com/wp-content/uploads/The-Kid-LAROI-and-Justin-Bieber-Stay.png" alt=""/>
                <div className="footer__songInfo">
                    <h4>STAY</h4>
                    <p>The Kid LAROI</p>
                </div>
            </div>

            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
