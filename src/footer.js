import React from "react";
import classes from "./footer.module.css"; // 根據您的檔案結構調整

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>© {new Date().getFullYear()} YAN WU HSU. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
