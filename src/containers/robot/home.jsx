import React, {useState} from "react";
import AppAppBar from "./AppAppBar";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RobotIcon from '../../assets/img/Robots.png';
import CallIcon from '@mui/icons-material/Call';
import Dialog from './Dialog';
import DialogS from './Dialog2';

export default function App() {
  const handleClick = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Hola, soy tu amigo. Me interesa tu salud, te toca tu Insulina."));
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
        <AppAppBar />
        <div className="spacing90" />
        <center>
            <Typography variant="h4" gutterBottom>
              Hola, soy tu amigo. Me interesa tu salud, te toca tu Insulina.
            </Typography>
            <img src={RobotIcon} width="40%" onClick={handleClick} />
            <div className="spacing10" />
            <Dialog />
            <DialogS />
            <Button variant="contained" color="success" size="large" startIcon={<CallIcon />}>
                Llamar al Doctor
            </Button>
        </center>
    </div>
  );
}
