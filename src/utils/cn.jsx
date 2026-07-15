const cn = (..._class) => {
  return _class.filter(Boolean).join(" ");
};
export default cn;
