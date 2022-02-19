import { makeStyles } from '@mui/styles';

const lightColor = '#E2D3F3';
const darkColor = '#013DC4';

const useStyles = makeStyles({
  body: {
    backgroundColor: lightColor,
    color: darkColor
  },
  darkColor: {
    color: darkColor
  },
  lightColor: {
    color: lightColor
  },
  paper: {
    backgroundColor: darkColor,
  },
  card: {
    backgroundColor: lightColor,
    color: darkColor
  }
});

export default useStyles;