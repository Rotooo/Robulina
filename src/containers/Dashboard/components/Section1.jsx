import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Testimonials() {

  return (
    <Container
      id="section1"
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
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
            Análisis de Contexto y Diagnóstico 
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Situación actual de la clínica: Describe los principales desafíos y oportunidades. DESAFIOS. 1.- Población adulta mayor (geriátrica mayor de 70 años de edad) población pediátrica (de 5 a 15 años). 
        2.- Competencia en el mercado. 3.- Organización sin uso de herramientas tecnológicas y digitales (TIC, loT).
        </Typography>
        <Typography component="h4" variant="h5ñ" color="text.primary">
            Análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas). 
        </Typography>
        <center>
        <table>
        <tr>
            <th>Fortalezas</th>
            <th>Oportunidades</th>
        </tr>
        <tr>
            <td>
            -Clínica en zona urbana con crecimiento rápido.
            -Interés en aplicar modelos de atención centrados en el paciente.
            </td>
            <td>
            - Carencia en  modernización y optimización apoyada en herramientas TIC e IoT para mejorar la atención al paciente.
            </td>
        </tr>
        <tr>
            <th>Debilidades</th>
            <th>Amenazas</th>
        </tr>
        <tr>
            <td>
            - Problemas de sostenibilidad financiera de la clínica.
            - Población geriátrica.
            </td>
            <td>
            - Sin amenazas
            </td>
        </tr>
    </table>
    </center>
        <section>
        <h3>Objetivos Estratégicos</h3>
            <ul>
                <li>Definir los objetivos SMART (específicos, medibles, alcanzables, relevantes y con un plazo determinado) para la clínica.</li>
                <li>Incluir al menos tres objetivos relacionados con la atención al paciente, sostenibilidad financiera y desarrollo de personal.</li>
            </ul>

            <h3>Objetivos</h3>
            <ul>
                <li>Mejorar la calidad de vida de los pacientes geriátricos con diabetes.</li>
                <li>Identificar nuevos casos de manera temprana.</li>
                <li>Retrasar la aparición de complicaciones por mala administración de insulina.</li>
                <li>Incrementar el control efectivo de pacientes con Diabetes Mellitus Tipo 2 Insulinodependientes.</li>
            </ul>

            <h3>Plan de Implementación</h3>
            <ul>
                <li><strong>Tecnologías y Herramientas TIC:</strong> Detalla las tecnologías a implementar (telemedicina, IoT, etc.).</li>
                <li><strong>Recursos Humanos:</strong> Describe la capacitación y el personal necesario.</li>
                <li><strong>Tiempos y Recursos Financieros:</strong> Incluye un cronograma y presupuesto general.</li>
            </ul>

        </section>
      </Box>
    </Container>
  );
}