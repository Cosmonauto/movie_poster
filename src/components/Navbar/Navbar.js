import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    },
}));

const Navbar = () => {

    const classes = useStyles();

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">

            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                <img src="https://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_Netflix_Logo_Digital-Video-e1424532515143.png" alt="neflix_logo" height="60px"></img>
            </NavLink>

            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="outlined-secondary"
                    label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                />
            </form>


            <button
                className="navbar-toggler"
                onClick={function () {
                    setTimeout(function () { animation(); });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div
                className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i
                                className="fas fa-tachometer-alt">
                            </i>Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" exact>
                            <i
                                className="far fa-address-book">
                            </i>About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service" exact>
                            <i
                                className="far fa-clone">
                            </i>Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/testimonial" exact>
                            <i
                                className="far fa-chart-bar">
                            </i>Testimonial
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" exact>
                            <i
                                className="far fa-copy">
                            </i>Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;