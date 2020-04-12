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

const buildLogger = level => {
  log[level] = (message, ...args) => {
    const date = new Date();
    console.log(
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      '-',
      colors[colorsLevel[level]](level) + ':',
      message,
      ...args,
    );
  };
};

Object.keys(colorsLevel).forEach(level => buildLogger(level));

module.exports= { log };
