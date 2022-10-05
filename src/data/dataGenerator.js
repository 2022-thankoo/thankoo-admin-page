export const createCategoryElement = (url, element) => {
  return {url, element};
}

export const makeSearchOption = (hasDateOption, hasStatus, statuses = makeOption("", "")) => {
  return {hasDateOption, hasStatus, statuses};
}

export const makeOption = (actualValue, showedValue) => {
  return {actualValue, showedValue}
}

export const date = new Date();
export const getFormattedDate = (delimiter, ...date) => {
  console.log(date.join(delimiter));
  return date.join(delimiter);
}

export const getDataFromObjectArray = (objectArray, target, filterOption) => {
  return objectArray.filter(object => object[target.key] === target.value)
    .map(object => object[filterOption])[0];
}
