const paginate = (hour) => {


  const temperaturesPerSlide = 4;
  const slides = Math.ceil(hour.length / temperaturesPerSlide);

  const newTemperatures = Array
    .from(
      { length: slides }, (_, index) => {
        const start = index * temperaturesPerSlide;
        return hour.slice(start, start + temperaturesPerSlide)
      })
  // console.log(newTemperatures);
  return newTemperatures;
}
export default paginate;