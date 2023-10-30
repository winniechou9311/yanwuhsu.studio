import React from 'react';
import classes from './Contact.module.css';
import Footer from 'src/footer';

const Contact = () => {
  return (
    <div className={classes.contactPage}>
      <div className={classes.form}>
        <h1>Contact Us</h1>
        <form className={classes.registerForm}>
          <input
            placeholder="Your name"
            type="text"
            tabIndex="1"
            required
            autoFocus
            className={classes.input}
          />
          <input
            placeholder="Your Email Address"
            type="email"
            tabIndex="2"
            required
            className={classes.input}
          />
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabIndex="3"
            required
            className={classes.input}
          />
          <input
            placeholder="Your Web Site (optional)"
            type="url"
            tabIndex="4"
            required
            className={classes.input}
          />
          <textarea
            placeholder="Type your message here...."
            tabIndex="5"
            required
            className={classes.input}
          ></textarea>
          <button
            name="submit"
            type="submit"
            id={classes['contact-submit']}
            data-submit="...Sending"
            className={classes.button}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
