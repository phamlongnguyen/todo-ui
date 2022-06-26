export const sortByDateAndPriority = (data) => {
  data.sort((task1, task2) => {
    if (task1.priority > task2.priority) return 1;
    if (task1.priority < task2.priority) return -1;

    if (
      new Date(task1.estimateTime).getTime() >
      new Date(task2.estimateTime).getTime()
    )
      return 1;
    if (
      new Date(task1.estimateTime).getTime() <
      new Date(task2.estimateTime).getTime()
    )
      return -1;
    return 1;
  });
  return data;
};

export const formatDate = (date) => {
  const tempDate = new Date(date);
  let hours = tempDate.getHours();
  let minutes = tempDate.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return (
    tempDate.getDate() +
    '/' +
    (tempDate.getMonth() + 1) +
    '/' +
    tempDate.getFullYear() +
    ' ' +
    strTime
  );
};
