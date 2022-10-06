export const saveAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
}

export const saveAdministratorId = (administratorId) => {
  localStorage.setItem("administratorId", administratorId);
}