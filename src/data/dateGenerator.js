export function createCategoryElement(url, element) {
  return {url, element};
}

export function makeStatus(hasStatus, statuses) {
  return {hasStatus, statuses};
}

export function makeOption(actualValue, showedValue) {
  return {actualValue, showedValue}
}

export function generateRandomString(coupons, stringLength) {
  const randomStrings = [];
  for (let i = 0; i < coupons; i++) {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 2 + stringLength);
    if (randomStrings.includes(randomString)) {
      continue;
    }
    randomStrings.push(randomString);
  }
  return randomStrings;
}
