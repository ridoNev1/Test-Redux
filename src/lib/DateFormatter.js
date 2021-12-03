export const dateFormatter = (val) => {
  const date = new Date(val).toString().split("GMT")[0];
  return date;
};
