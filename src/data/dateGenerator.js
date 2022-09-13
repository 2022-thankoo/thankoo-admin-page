export const createCategoryElement = (url, element) => {
  return {url, element};
}

export const makeStatus = (hasStatus, statuses) => {
  return {hasStatus, statuses};
}

export const makeOption = (actualValue, showedValue) => {
  return {actualValue, showedValue}
}

export const generateRandomString = (arrayLength, stringLength) => {
  const randomStrings = new Set();
  while (randomStrings.size < arrayLength) {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 2 + stringLength);
    randomStrings.add(randomString);
  }
  return [...randomStrings];
}
