import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Alert from '@mui/material/Alert';
import RobotIcon from '../../assets/img/Robots.png';
import RobotIcon1 from '../../assets/img/Robots3.png';
import RobotIcon2 from '../../assets/img/Robots4.png';
import RobotIcon3 from '../../assets/img/Robots5.png';
import RobotIcon4 from '../../assets/img/Robots6.png';
import RobotIcon5 from '../../assets/img/Robots7.png';

const steps = [
  {
    label: 'Paso 1',
    description: `Lávate las manos con agua y jabón`,
    image: RobotIcon1,
    voz: 'Paso 1. Lávate las manos con agua y jabón'
  },
  {
    label: 'Paso 2',
    description: 'Prepara la insulina y la jeringa.',
    image: RobotIcon2,
    voz: 'Paso 2. Prepara la insulina y la jeringa.',
  },
  {
    label: 'Paso 3',
    description: `Limpia la zona de aplicación con alcohol.`,
    image: RobotIcon3,
    voz: 'Paso 3. Limpia la zona de aplicación con alcohol.',
  },
  {
    label: 'Paso 4',
    description: `Inyecta la insulina según las indicaciones médicas.`,
    image: RobotIcon4,
    voz: 'Paso 4. Inyecta la insulina según las indicaciones médicas.',
  },
  {
    label: 'Paso 5',
    description: `Descarta la aguja de forma segura.`,
    image: RobotIcon5,
    voz: 'Paso 5. Descarta la aguja de forma segura.',
  },
  {
    label: 'Paso 6',
    description: `Lávate las manos nuevamente.`,
    image: RobotIcon1,
    voz: 'Paso 6. Lávate las manos nuevamente.',
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if(activeStep === 0) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[0].voz));
  } else if(activeStep === 1) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[1].voz));
  } else if(activeStep === 2) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[2].voz));
  } else if(activeStep === 3) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[3].voz));
  } else if(activeStep === 4) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[4].voz));
  } else if(activeStep === 5) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(steps[5].voz));
  }
  

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 5 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="h6">{step.description}</Typography>
              <img src={step.image} width="50%" />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Atrás
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h6">¡Y Listo!</Typography>
          <Typography>Estos son todos los pasos a seguir para la aplicación de la Insulina</Typography>
          <Alert variant="filled" severity="info">
            Si necesitas ayuda para la aplicación de tu dosis, consulta en tu centro de salud más cercano.
          </Alert>
          <img src={RobotIcon} width="50%" />
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Volver a ver los pasos.
          </Button>
        </Paper>
      )}
    </Box>
  );
}
