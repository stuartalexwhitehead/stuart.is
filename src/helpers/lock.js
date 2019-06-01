import { css } from "styled-components";
import { remValue } from "./rem";

export const emLock = (property, minValue, maxValue, minWidth, maxWidth) => {
    const minWidthRem = remValue(minWidth);
    const maxWidthRem = remValue(maxWidth);

    return css`
        ${property}: ${minValue}em;

        @media screen and (min-width: ${minWidthRem}rem) {
            ${property}: calc(${minValue}em + (${maxValue} - ${minValue}) * ((100vw - ${minWidthRem}rem) / (${maxWidthRem} - ${minWidthRem})));
        }

        @media screen and (min-width: ${maxWidthRem}rem) {
            ${property}: ${maxValue}em;
        }
    `;
};

export const remLock = (property, minValue, maxValue, minWidth, maxWidth) => {
    return css`
        ${property}: ${minValue}rem;

        @media screen and (min-width: ${minWidth}rem) {
            ${property}: calc(${minValue}rem + (${maxValue} - ${minValue}) * ((100vw - ${minWidth}rem) / (${maxWidth} - ${minWidth})));
        }

        @media screen and (min-width: ${maxWidth}rem) {
            ${property}: ${maxValue}rem;
        }
    `;
};

export const doubleLock = (
    property,
    minValue,
    maxValue,
    minWidth,
    midWidth,
    maxWidth
) => {
    const minValueRem = remValue(minValue);
    const maxValueRem = remValue(maxValue);
    const minWidthRem = remValue(minWidth);
    const midWidthRem = remValue(midWidth);
    const maxWidthRem = remValue(maxWidth);

    return css`
        ${property}: ${minValueRem}rem;

        @media screen and (min-width: ${minWidthRem}rem) {
            ${property}: calc(${minValueRem}rem + (${maxValueRem} - ${minValueRem}) * ((100vw - ${minWidthRem}rem) / (${midWidthRem} - ${minWidthRem})));
        }

        @media screen and (min-width: ${midWidthRem}rem) {
            ${property}: calc(${minValueRem}rem + (${maxValueRem} - ${minValueRem}) * ((100vw - ${midWidthRem}rem) / (${maxWidthRem} - ${midWidthRem})));
        }

        @media screen and (min-width: ${maxWidthRem}rem) {
            ${property}: ${maxValueRem}rem;
        }
    `;
};

export const doubleEmLock = (
    property,
    minValue,
    maxValue,
    minWidth,
    midWidth,
    maxWidth
) => {
    const minWidthRem = remValue(minWidth);
    const midWidthRem = remValue(midWidth);
    const maxWidthRem = remValue(maxWidth);

    return css`
        ${property}: ${minValue}em;

        @media screen and (min-width: ${minWidthRem}rem) {
            ${property}: calc(${minValue}em + (${maxValue} - ${minValue}) * ((100vw - ${minWidthRem}rem) / (${midWidthRem} - ${minWidthRem})));
        }

        @media screen and (min-width: ${midWidthRem}rem) {
            ${property}: calc(${minValue}em + (${maxValue} - ${minValue}) * ((100vw - ${midWidthRem}rem) / (${maxWidthRem} - ${midWidthRem})));
        }

        @media screen and (min-width: ${maxWidthRem}rem) {
            ${property}: ${maxValue}em;
        }
    `;
};

export default (property, minValue, maxValue, minWidth, maxWidth) => {
    return remLock(
        property,
        remValue(minValue),
        remValue(maxValue),
        remValue(minWidth),
        remValue(maxWidth)
    );
};
