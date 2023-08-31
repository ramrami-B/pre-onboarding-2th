export const dateFormatter = (date: any) => {
  return date ? date.split('T')[0] : '';
};
