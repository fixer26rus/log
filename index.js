const _colorsLevel = {
  error: '31',
  debug: '35',
  warn: '33',
  data: '1',
  info: '32',
  verbose: '36',
  silly: '37',
  custom: '34',
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

const _addZero = i => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

const _colorLevel = (level, defaultColor) => {
  return defaultColor ? level : `\x1b[${_colorsLevel[level]}m${level}\x1b[0m`;
};

const buildLogger = level => {
  const browserErr = typeof window !== 'undefined' && level === 'error';
  const browserWarn = typeof window !== 'undefined' && level === 'warn';
  const unsupportedBrowser = typeof window !== 'undefined' && !window['chrome'];

  log[level] = (...args) => {
    const date = new Date();
    console[browserErr ? 'error' : browserWarn ? 'warn' : 'log'](
      `${_addZero(date.getHours())}:${_addZero(date.getMinutes())}:${_addZero(date.getSeconds())} - ${_colorLevel(
        level,
        browserErr || browserWarn || unsupportedBrowser,
      )}` + ':',
      ...args,
    );
  };
};

Object.keys(_colorsLevel).forEach(level => buildLogger(level));

log.log = log;

module.exports = log;
