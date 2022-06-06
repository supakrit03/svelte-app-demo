<script>
  import { createEventDispatcher, onMount } from "svelte";
  import meetupsStore from "../stores/meetups-store";
  import TextInput from "./TextInput.svelte";
  import Button from "./Button.svelte";

  export let id = "";
  let title = "";
  let subTitle = "";
  let imageUrl = "";
  let description = "";
  let address = "";
  let contactmail = "";

  const dispath = createEventDispatcher();

  onMount(() => {
    if (id) {
      const meetupItem = $meetupsStore.find((item) => item.id === id);

      title = meetupItem.title;
      subTitle = meetupItem.subTitle;
      imageUrl = meetupItem.imageUrl;
      description = meetupItem.description;
      address = meetupItem.address;
      contactmail = meetupItem.contactmail;
    }
  });
</script>

<form
  on:submit={(event) => {
    event.preventDefault();
    if (id) {
      dispath("update", {
        title,
        subTitle,
        imageUrl,
        description,
        address,
        contactmail,
      });
      return;
    }

    dispath("save", {
      title,
      subTitle,
      imageUrl,
      description,
      address,
      contactmail,
    });
  }}
>
  <TextInput
    id="title"
    label="Title"
    type="text"
    value={title}
    on:input={(e) => (title = e.target.value)}
  />
  <TextInput
    id="subtitle"
    label="Subtitle"
    type="text"
    value={subTitle}
    on:input={(e) => (subTitle = e.target.value)}
  />

  <TextInput
    id="address"
    label="Address"
    type="text"
    value={address}
    on:input={(e) => (address = e.target.value)}
  />

  <TextInput
    id="description"
    label="Description"
    type="text"
    value={description}
    on:input={(e) => (description = e.target.value)}
  />
  <TextInput
    id="imageUrl"
    label="Image url"
    type="text"
    value={imageUrl}
    on:input={(e) => (imageUrl = e.target.value)}
  />

  <TextInput
    id="contactmail"
    label="Contactmail"
    type="text"
    value={contactmail}
    on:input={(e) => (contactmail = e.target.value)}
  />

  <Button type="submit" text="Submit" />
  {#if id}
    <Button
      mode="outline"
      type="button"
      text="Delete"
      on:click={() => dispath("delete", id)}
    />
  {/if}
</form>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
