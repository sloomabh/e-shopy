const getTokenFromLocalStorage = localStorage.getItem("customer")

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
