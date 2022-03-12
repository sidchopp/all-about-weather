import Night from '../../images/night.jpg';
import Day from '../../images/day.jpg';
import Afternoon from '../../images/afternoon.jpg';
import Evening from '../../images/evening.jpg';
import { format } from "date-fns";

const time = format(new Date(), 'k');
const timeNumber = Number(time);
// console.log(timeNumber);

function BackgroundImage() {
  if (timeNumber > 5 && timeNumber <= 12) {
    return Day;
  } else if (timeNumber > 12 && timeNumber <= 17) {
    return Afternoon;
  } else if (timeNumber > 17 && timeNumber <= 20) {
    return Evening;
  } else {
    return Night;
  }
};

export default BackgroundImage;