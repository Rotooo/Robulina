import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ver Más Información
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            "Robot dosificador y administrador de insulina"
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          ESTRATEGIA. Control basado en una bomba de infusión que provea en tiempo real una dosis de insulina correcta, la cual pueda ser ajustada por medio de un controlador que reciba las lecturas de un sensor continuo y la mano robótica sea quien administre la insulina al paciente.
FUNCIÓN DEL PACIENTE.  Únicamente colocar la plumilla de insulina en la mano robótica, acercar su sensor para lectura y descubrir su abdomen para aplicación.
FUNCION DIGITAL DEL ROBOT, SENSOR Y BOMBA DE INFUSIÓN.  El sensor colocado en el brazo del paciente (cara antero posterior del bíceps) monitorea de manera continua la glucosa del paciente, con la aplicación descargada en el teléfono celular marca los niveles de glucosa y el mismo resultado lo pega al monitor robotizado, registra nivel de glucosa y con la base de datos que ya tiene previamente la bomba de infusión determina automáticamente las unidades de insulina que le corresponden al paciente y las muestra en la pantalla, posterior a ello el paciente coloca la plumilla de insulina con la aguja expuesta en la mano del robot, descubre el sitio de aplicación (abdomen, brazo o muslo) acercándose a la mano del robo y éste detecta con luz infrarroja el lugar correcto de aplicación y administra.  
Una vez realizado el procedimiento se apaga la bomba y la mano robótica, el paciente retira la plumilla, la tapa y guarda en el refrigerador.
TIEMPOS. A partir de la gestión y aprobación de la estrategia y contactar al proveedor tecnológico la capacitación a personal médico de enfermería, pacientes y familiares debe ser a corto plazo (3 meses).  El monitoreo continuo y acompañamiento del proveedor debe ser al menos 6 meses para determinar el control del proceso.  El seguimiento del proceso periódico dentro de los 12 meses del año.
PRESUPUESTO GENERAL.  Considero $2,000.000.00 que se subsanan entre Presidencia Municipal, Beneficencia Pública y la Clínica Sanavita.
          </DialogContentText>
          <DialogContentText>
          RECURSOS HUMANOS. Proveedor tecnológico (1 o 2 personas), 2 médicos y 2 enfermeros por turno que manejen el “robot”.
                GESTIÓN BASADA EN TIC
                Presentar Estrategia de Gestión basada en TIC en pacientes con Diabetes Mellitus Tipo 2 Insulinodependientes y número de eventos adversos o centinela provocados por error en administración de insulina.
                Adquisición de un robot dosificador y administrador de insulina al paciente.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
