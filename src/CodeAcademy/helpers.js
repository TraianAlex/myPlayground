export const random = (min, max) => {
  let r = Math.random();
  return Math.floor(r * (max - min) + min);
};

export const clone = obj => {
  let newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
};
