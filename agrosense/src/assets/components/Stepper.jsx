import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';

const steps = [
  { situacao: 'Saiu do centro de distribuição', status: 'feito' },
  { situacao: '...', status: 'pendente' },
  { situacao: '...', status: 'pendente' },
  { situacao: '...', status: 'pendente' }
];

// criacao das linhas ligando os pontos
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: '#c4c4c4', // cinza por padrão
    borderRadius: 2,
  },
}));

// icone 'done' com o background verde
const DoneCustomIcon = styled('div')({
  backgroundColor: '#28a745',
  color: 'white',
  width: 34,
  height: 34,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function DoneStepIcon() {
  return (
    <DoneCustomIcon>
      <DoneIcon />
    </DoneCustomIcon>
  );
}

// icone do relógio com o background cinza

const PendingCustomIcon = styled('div')({
  backgroundColor: '#e0e0e0',
  color: '#757575',
  width: 34,
  height: 34,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function PendingStepIcon() {
  return (
    <PendingCustomIcon>
      <AccessTimeIcon />
    </PendingCustomIcon>
  );
}

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        alternativeLabel
        connector={<CustomConnector />}
      >
        {steps.map((step, index) => {
          // se status = "feito", deixa a linha até ele verde
          const isCompleted = step.status === 'feito';

          return (
            <Step
              key={index}
              sx={{
                '& .MuiStepConnector-line': {
                  backgroundColor: isCompleted ? '#28a745' : '#c4c4c4',
                },
              }}
            >
              <StepLabel
                StepIconComponent={
                  isCompleted ? DoneStepIcon : PendingStepIcon
                }
              >
                {step.situacao}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
