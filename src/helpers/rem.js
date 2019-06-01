export const remValue = (target, base = 16) => target / base;

export default (target, base = 16) => `${remValue(target, base)}rem`;
