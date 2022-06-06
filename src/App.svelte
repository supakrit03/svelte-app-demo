<script>
  import { onMount } from "svelte";
  import meetupsStore from "./stores/meetups-store";
  import Header from "./components/Header.svelte";
  import MeetupGrid from "./components/MeetupGrid.svelte";
  import Button from "./components/Button.svelte";
  import FilterButton from "./components/FilterButton.svelte";
  import Modal from "./components/Modal.svelte";
  import FormMeetup from "./components/FormMeetup.svelte";

  import { getMeetups } from "./apis/getMeetups";
  import { postMeetup } from "./apis/postMeetup";
  import { patchMeetup } from "./apis/patchMeetup";
  import { deleteMeetup } from "./apis/deleteMeetup";

  let vibleModal = false;
  let vibleModalEdit = false;
  let selectedMeetup = "";
  let loadingMeetups = false;
  let error;

  let filterBy = "all"; // All meetups

  $: meetupsFilter = $meetupsStore.filter((m) =>
    filterBy === "all" ? true : m.isFav
  );

  function closeModal() {
    vibleModal = false;
  }

  function openModal() {
    vibleModal = true;
  }

  function fetchMeetups() {
    loadingMeetups = true;
    getMeetups()
      .then((meetups) => meetupsStore.setMeetups(meetups))
      .catch((err) => {
        error = err;
      })
      .finally(() => (loadingMeetups = false));
  }

  onMount(() => {
    fetchMeetups();
  });

  async function addMeetup(event) {
    await postMeetup(event.detail);
    await fetchMeetups();
    closeModal();
  }

  async function editMeetup(event) {
    await patchMeetup(selectedMeetup, event.detail);
    await fetchMeetups();
    vibleModalEdit = false;
  }

  async function deleteMeetupFn(event) {
    const id = event.detail;
    await deleteMeetup(id);
    await fetchMeetups();
    vibleModalEdit = false;
  }

  async function toggleFavorite(event) {
    const id = event.detail;
    meetupsStore.toggleMeetupFavorite(id);
    const meetup = $meetupsStore.find((m) => m.id === id);
    await patchMeetup(id, meetup);
    await fetchMeetups();
  }

  function showDetail(event) {
    const id = event.detail;

    vibleModalEdit = true;
    selectedMeetup = id;
  }

  function filterMeetups(event) {
    filterBy = event.detail;
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

  <Modal
    title="Edit meetup"
    visible={vibleModalEdit}
    on:on-close={() => {
      vibleModalEdit = false;
    }}
  >
    <FormMeetup
      id={selectedMeetup}
      on:save={addMeetup}
      on:update={editMeetup}
      on:delete={deleteMeetupFn}
    />
  </Modal>

  <Button
    on:click={() => {
      openModal();
    }}
    text="New meetup"
  />

  <br />
  <FilterButton value={filterBy} on:select={filterMeetups} />

  {#if error}
    <div class="error">{error.message}</div>
  {/if}

  {#if loadingMeetups}
    <div class="loading">
      <span>Loading...</span>
    </div>
  {:else}
    <MeetupGrid
      meetups={meetupsFilter}
      on:toggle-favorite={toggleFavorite}
      on:show-detail={showDetail}
    />
  {/if}
</div>

<style>
  .meetup-app {
    margin-top: 4rem;
  }
  header {
    border-bottom: 1px solid #ccc;
  }

  .loading {
    padding: 1em;
    margin: 0 auto;
  }

  .error {
    padding: 1em;
    color: red;
  }
</style>
