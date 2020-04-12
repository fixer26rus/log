const colors= require('colors');

const colorsLevel = {
  error: 'red',
  debug: 'magenta',
  warn: 'yellow',
  data: 'grey',
  info: 'green',
  verbose: 'cyan',
  silly: 'white',
  custom: 'blue',
};

const log = {
  error: () => {},
  debug: () => {},
  warn: () => {},
  data: () => {},
  info: () => {},
  verbose: () => {},
  silly: () => {},
  custom: () => {},
};

const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const buildLogger = level => {
  log[level] = (message, ...args) => {
    const date = new Date();
    console.log(
      `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`,
      '-',
      colors[colorsLevel[level]](level) + ':',
      message,
      ...args,
    );
  };
};

Object.keys(colorsLevel).forEach(level => buildLogger(level));

module.exports = log;
