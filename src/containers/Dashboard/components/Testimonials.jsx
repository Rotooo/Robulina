import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Introducción
        </Typography>
        <Typography variant="body1" color="text.secondary">
        La definición de la estrategia de manejo de la información, tanto en cantidad como en calidad y oportunidad, incluyendo el desarrollo de aquellos sistemas que respalden eficientemente la gestión de la organización y que luego se definen como sistemas de información de la gerencia.
El uso de tecnología en diabetes ha demostrado, de forma general, mejorar el control glucémico de las personas con diabetes que los utilizan y mejorar también la calidad de vida, así como otros aspectos relacionados con la salud, como la calidad del sueño, y la satisfacción global con el tratamiento, sin embargo en los pacientes insulinodependientes se generan gran cantidad de Eventos Adversos por administrar dosis equivocada de insulina o aplicación incorrecta de la misma (esta estrategia puede incluso evitar situaciones médico-legales en la clínica por muerte del paciente aplicando dosis equivocada de insulina).   Mi Estrategia de Gestión Basada en TIC se enfoca primordialmente al primer nivel atención en donde acude gran cantidad de pacientes como primer contacto a educarse sobre el manejo de insulina para ellos o su familiar.
Así como actualmente en Aguascalientes contamos en algunos hospitales de Secretaria de Salud con Robot Dispensadores de Medicamentos en farmacia, mi estrategia es gestionar un “robot dosificador y administrador de insulina”.
        </Typography>
      </Box>
    </Container>
  );
}