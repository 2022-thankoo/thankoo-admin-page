export const saveAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
}

export const saveAdministratorId = (administratorId) => {
  localStorage.setItem("administratorId", administratorId);
}

export const deleteAll = () => {
  localStorage.clear();
}