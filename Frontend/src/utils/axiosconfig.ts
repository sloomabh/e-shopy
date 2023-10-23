const getTokenFromLocalStorage = localStorage.getItem("user")

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null
        ? JSON.parse(getTokenFromLocalStorage).token
        : ""
    }`,
    Accept: "application/json",
  },
}
