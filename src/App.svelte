<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import MeetupGrid from "./components/MeetupGrid.svelte";
  import Button from "./components/Button.svelte";
  import Toggle from "./components/Toggle.svelte";

  import Modal from "./components/Modal.svelte";
  import FormMeetup from "./components/FormMeetup.svelte";

  let vibleModal = false;

  let editMode = false;
  let chosenOption = 1;

  function closeModal() {
    vibleModal = false;
  }

  function openModal() {
    vibleModal = true;
  }

  onMount(() => {
    console.log("onMount");
  });

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subTitle: "Learn to code in 2 hours",
      description: "In this meetup , we will have some experts that teach",
      imageUrl:
        "https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/12/tes_gen_blog_code6-800x412.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactmail: "code@test.com",
      isFav: true,
    },
    {
      id: "m2",
      title: "Swim Together",
      subTitle: "Let's go for some swimming",
      description: "We will simply swim some rounds",
      imageUrl:
        "https://www.ussportscamps.com/media/images/swim/nike/camps/Nike-Swim-Underwater-Freestyle.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactmail: "swim@test.com",
      isFav: false,
    },
  ];

  function addMeetup(event) {
    const { title, subTitle, description, imageUrl, address, contactmail } =
      event.detail;
    const newMeetup = {
      id: new Date().getMilliseconds(),
      title,
      subTitle,
      description,
      imageUrl,
      address,
      contactmail,
    };

    meetups = [...meetups, newMeetup];
    closeModal();
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetups = meetups.map((m) => {
      if (m.id === id) {
        m.isFav = !m.isFav;
        return m;
      }
      return m;
    });

    meetups = updatedMeetups;
  }
</script>

<Header />
<div class="meetup-app">
  <Modal
    title="Create meetup"
    visible={vibleModal}
    on:on-close={() => {
      closeModal();
    }}
  >
    <FormMeetup on:save={addMeetup} />
  </Modal>

  <Button on:click={openModal} text="Open modal" />

  <Button
    on:click={() => {
      openModal();
    }}
    text="New meetup"
  />

  <MeetupGrid {meetups} on:toggle-favorite={toggleFavorite} />

  <Toggle bind:chosenOption />
</div>

<style>
  .meetup-app {
    margin-top: 4rem;
  }

  header {
    border-bottom: 1px solid #ccc;
  }
</style>
