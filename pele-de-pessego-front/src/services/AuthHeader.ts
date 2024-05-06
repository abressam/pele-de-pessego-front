function getAuthorizationToken(): string | null {
  return localStorage.getItem("jwt");
}

function setAuthorizationHeader(axiosInstance: any) {
  const token = getAuthorizationToken();
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
}

export { getAuthorizationToken, setAuthorizationHeader };
