export const saveAccessToken = (accessToken) => {
  sessionStorage.setItem("accessToken", accessToken);
}

export const saveAdministratorId = (administratorId) => {
  sessionStorage.setItem("administratorId", administratorId);
}

export const getItem = (key) => {
  return sessionStorage.getItem(key);
}

export const deleteAll = () => {
  sessionStorage.clear();
}