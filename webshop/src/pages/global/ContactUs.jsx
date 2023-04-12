import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fum24bj', 'template_ld2lsyd', form.current, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="center" ref={form}>
      <br />
      <TextField name="from_name" label="Name" variant="outlined" />
      <br /><br />
      <TextField name="from_email" label="Email" variant="outlined" />
      <br /><br />
      <TextField name="message" label="Message" variant="outlined" />
      <br />
      <Button variant="contained" onClick={sendEmail}>Send</Button>
    </form>
  );
};