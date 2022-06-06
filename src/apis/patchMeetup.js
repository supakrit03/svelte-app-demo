import { firebaseUrl } from "./config";

export const patchMeetup = (id, data) => {
  return fetch(firebaseUrl + `/meetups/${id}.json`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
};
