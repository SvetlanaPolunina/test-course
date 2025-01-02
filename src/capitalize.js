const capitalize = (str) => {
  if (str === '') {
    return '';
  }
  
  const [firstChar] = str;

  return `${firstChar.toUpperCase()}${str.slice(1)}`;
};

export default capitalize;
