import { firebaseUrl } from "./config";

export const deleteMeetup = (id) => {
  return fetch(firebaseUrl + `/meetups/${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};
