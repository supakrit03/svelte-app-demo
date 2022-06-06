import { writable } from "svelte/store";

const meetups = writable([]);

export default {
  subscribe: meetups.subscribe,
  setMeetups(meetupList = []) {
    meetups.set(meetupList);
  },
  addMeetup(meetupData) {
    const { title, subTitle, description, imageUrl, address, contactmail } =
      meetupData;
    const newMeetup = {
      id: new Date().getMilliseconds(),
      title,
      subTitle,
      description,
      imageUrl,
      address,
      contactmail,
    };

    meetups.update((items) => [...items, newMeetup]);
  },
  toggleMeetupFavorite(id) {
    meetups.update((items) => {
      return items.map((m) => {
        if (m.id === id) {
          m.isFav = !m.isFav;
          return m;
        }
        return m;
      });
    });
  },
  editMeetup(meetupData, id) {
    meetups.update((items) => {
      return items.map((m) => {
        if (m.id === id) {
          return { ...m, ...meetupData };
        }
        return m;
      });
    });
  },

  deleteMeetup(id) {
    meetups.update((items) => items.filter((item) => item.id !== id));
  },
};
