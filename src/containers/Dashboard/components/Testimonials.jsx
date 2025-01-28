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
        La Transformación Digital (TD) hoy en día es un término que escuchamos de forma
recurrente en muchos contextos, actualmente estamos “invadidos” de blogs,
conferencias, workshops, publicaciones en redes sociales que hablan de
Transformación Digital y cómo “convertirse en expertos”, pero la realidad es que no ha
sido fácil llegar a una definición estandarizada y entender de manera práctica lo que
este proceso conlleva.
La Transformación Digital debe estar asociada a una serie de procesos, en los que la
organización empieza a convertir de forma progresiva o exponencial, sus procesos de
trabajo en su gran mayoría análogos a procesos de trabajo de naturaleza digital; por lo
tanto, podríamos empezar a definir, que la TD, es un medio por el que actualizamos o
transformamos la organización a un mundo cada vez más digital, que se mantiene
orientado a las tendencias de consumo y de funcionamiento, pero, que no es un proceso
que transforme la razón de ser de la empresa como tal, solo potencializa sus procesos
tradicionales, para mejorar su competitividad dentro del mercado.
En este sentido, la transformación digital debería ser capaz de dar una evolución, un
cambio y cómo su nombre lo indica, transformar organizaciones, sin importar su
naturaleza o sector, algunas con mayor facilidad que otras para desarrollar estos
procesos, pero en definitiva, cualquier organización es susceptible de implementar
procesos de TD.

        </Typography>
      </Box>
    </Container>
  );
}