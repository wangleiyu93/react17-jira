export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    if (isFalsy(object[key])) {
      delete result[key];
    }
  });
  return result;
};
