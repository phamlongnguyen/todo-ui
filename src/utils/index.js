export const sortByDateAndPriority = (data) => {
  const newData = [...data];
  newData?.sort?.((task1, task2) => {
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
  return newData || [];
};
