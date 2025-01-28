import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <>
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Conclusiones
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          La TD debe ser <b>Desde dentro</b> (iniciarse de manera conjunta y estar
todos alineados). <b>Con cabeza (no empezar porque el vecino lo haga,</b> debe estar
dentro de una estrategia y un objetivo definido y Pasar a la acción. En el momento,
no lo dejen para mañana.
ME PARECIÓ MUY INTERESANTE. Que todo su personal de cada una de las
empresas participaron en la detección de los RETOS ESTRATÉGICOS identificados
por el personal, todos los empleados aportaron a las mejoras porque conocen toda la
empresa, detectan necesidades y participan en las mejoras.
<b>La Etapa de Transformación Digital en la que se encuentra.</b> Optimización ya que
llevó a cabo todas las etapas de la TD involucrando a todo el personal para que
propusieran sus Retos Estratégicos que incluye la etapa mencionada.
          </Typography>
          <div className="spacing20" />
          <Typography component="h2" variant="h4">
            Opinion Personal
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Me interesó mucho el trabajo de la última empresa Transformación Digital en las
organizaciones. Experiencias y buenas prácticas. CANARY CONCRETE.

Para ellos la Transformación Digital incluye innovación, modernización, mejora
tecnológica y digitalización todos los componentes de una era moderna y digital y que
muchas empresas no toman el riesgo de hacerlo por miedo al fracaso.
La centro en mi institución de salud en donde me desempeño con rezago digital
importante y el no hacer mucho por mejorarlo, tanto así que no hemos logrado
“expediente médico electrónico” y eso habla de un retraso en la innovación tecnológica
y transformación digital.
Algunas de las barreras que detectó en su momento Canary Concrete me son muy
familiares en mi organización como falta de recurso financiero, resistencia al cambio,
falta de apoyo directivo y objetivos no claros, además del desconocimiento tecnológico
y ganas de no innovar en salud, esto definitivamente afecta en la eficiencia de atención
médica a los pacientes.
Me encantó las seis claves que presentan para una transformación exitosa como
pensar grande y actuar rápido, involucrar a los usuarios, conocer a fondo el punto de
vista del cliente, formación continua del personal y encontrar proveedores adecuados
que si los llevo a mi organización son muy buenas estrategias que tal vez para salud le
parezcan muy complicadas de implantar sin pensar en el avance tecnológico y servicios
de salud eficientes y de calidad.
Concuerdo con los cuatro casos en que la base de la transformación es el “cambio de
cultura digital”.
          </Typography>
        </Box>
      </Container>
    </Box>
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        textAlign: { sm: 'left', md: 'center' },
      }}
    >
<Typography component="h2" variant="h4">
            REFERENCIAS BIBLIOGRÁFICAS
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.400' }}>
          1.- Guía metodológica Transformación Digital (2022)
Fondo Europeo para la Paz y la Agencia Española de Cooperación Internacional para
el Desarrollo.
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.400' }}>
          2.- Casos de ejemplo de Transformación Digital (2022)
You Tube
          </Typography>

    </Box>
    </>
  );
}