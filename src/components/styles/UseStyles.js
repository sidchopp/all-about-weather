import { makeStyles } from '@mui/styles';

const lightColor = 'skyblue';
const darkColor = 'darkBlue';

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
});

export default useStyles;