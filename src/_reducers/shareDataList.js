const InitialState = [
  'Turn on your iTsuba before keiko ',
  'iTsuba will collect all data  about your movements ',
  'Connect iTsuba  to your smartphone ',
  'A machine-learning algorithm will analyze  all data and show you statistics'
];

export default (state = InitialState, {type, payload}) => {
  return state;
}