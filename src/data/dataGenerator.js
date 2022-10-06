export const createCategoryElement = (url, element) => {
  return {url, element};
}

export const makeSearchOption = (hasDateOption, hasStatus, statuses = [makeOption("all", "")]) => {
  return {hasDateOption, hasStatus, statuses};
}

export const makeOption = (actualValue, showedValue) => {
  return {actualValue, showedValue}
}

export const date = new Date();
export const getFormattedDate = (delimiter, ...date) => {
  return date.join(delimiter);
}

export const getDataFromObjectArray = (objectArray, target, filterOption) => {
  return objectArray.filter(object => object[target.key] === target.value)
    .map(object => object[filterOption])[0];
}

export const generateTitle = (coach, couponType, defaultTitle) => coach && couponType
  ? `${coach}(이)가 보내는 ${couponType} 쿠폰`
  : defaultTitle;

export const generateTableHeaders = (data) => {
  return data.length ? Object.keys(data[0]) : [];
}

export const generateDataId = (data) => {
  return data.map(d => d.id);
}
