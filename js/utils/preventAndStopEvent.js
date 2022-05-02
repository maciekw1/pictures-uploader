export const preventAndStopEvent = (event) => {
  event.stopPropagation();
  event.preventDefault();
};
