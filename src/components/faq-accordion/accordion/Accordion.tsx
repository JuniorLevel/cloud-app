import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { colors } from 'constants/colors';
import { FC, useState } from 'react';

interface IAccordionProps {
  title: string;
  info: string;
}

const useStyles = makeStyles(() => ({
  accordion: {
    fontFamily: 'Comfortaa !important',
    color: `${colors.title} !important`,
    boxShadow: 'none !important',
    border: 'none !important',
    backgroundImage:
      'linear-gradient(90deg, #B1E3FF 30%, #DFBEFF 100%) !important',
    marginBottom: '10px !important',
  },
  accordionSummaryOpen: {
    backgroundImage:
      'linear-gradient(90deg, #DFBEFF 30%, #8AB5FF 100%) !important',
  },
  accordionTypographyTitle: {
    fontSize: '40px !important',
    fontWeight: '700 !important',
  },
  accordionTypographyInfo: {
    fontSize: '25px !important',
  },
}));

const AccordionItem: FC<IAccordionProps> = ({ title, info }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const classes = useStyles();
  const handleAccordionChange = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <Accordion
      className={`${classes.accordion}`}
      expanded={isAccordionOpen}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        className={`${isAccordionOpen ? classes.accordionSummaryOpen : ''}`}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.accordionTypographyTitle}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.accordionTypographyInfo}>
          {info}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
