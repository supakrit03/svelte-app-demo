import { firebaseUrl } from "./config";

export const postMeetup = (data) => {
  return fetch(firebaseUrl + "/meetups.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
};
