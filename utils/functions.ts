import moment from 'moment';

export const objectToB64 = (data: Object): string =>
  Buffer.from(JSON.stringify(data)).toString('base64');

export const b64ToObject = (b64: string) =>
  JSON.parse(new Buffer(b64, 'base64').toString('ascii'));

export const toMoment = (date: Date, format: string): string => {
  const newDate =
    moment(date).format('dddd DD [de] MMMM [de] yyyy, [a las ]') +
    moment(date).format('HH:mm:ss a');
  return newDate.toUpperCase();
};
