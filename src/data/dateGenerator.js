import {string} from "prop-types";

export function createCategoryElement(url, element) {
  return {url, element};
}

export function makeStatus(hasStatus, statuses) {
  return {hasStatus, statuses};
}

export function makeOption(actualValue, showedValue) {
  return {actualValue, showedValue}
}

export const generateRandomString = (arrayLength, stringLength) => {
  const randomStrings = new Set();

  while (randomStrings.size !== arrayLength) {
    const randomStrings = Math.random()
      .toString(36)
      .substring(2, 2 + stringLength);
    randomStrings.add(randomStrings);
  }

  return [...randomStrings];
}
