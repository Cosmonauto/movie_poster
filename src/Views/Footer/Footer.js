import React from "react";
import classes from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={classes.footer}>
      <div className={classes.parent}>
        <div className={classes.child}></div>
        <div className={classes.child}></div>
        <form className={classes.form}></form>
      </div>
    </footer>
  );
}

export default Footer;
