import { firebaseUrl } from "./config";

export const getMeetups = () => {
  return fetch(firebaseUrl + "/meetups.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return Object.values(json).map((item, index) => {
        const keys = Object.keys(json);

        return {
          id: keys[index],
          ...item,
        };
      });
    });
};
