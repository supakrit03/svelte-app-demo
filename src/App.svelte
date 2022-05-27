<script>
  import Header from "./components/Header.svelte";
  import MeetupGrid from "./components/MeetupGrid.svelte";
  import TextInput from "./components/TextInput.svelte";
  import Button from "./components/Button.svelte";
  import Modal from "./components/Modal.svelte";

  let title = "";
  let subTitle = "";
  let description = "";
  let imageUrl = "";
  let address = "";
  let contactmail = "";

  let vibleModal = false;

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
    },
  ];

  function addMeetup() {
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
  }
</script>

<Header />
<div class="meetup-app">
  <Modal visible={vibleModal} on:on-close={() => (vibleModal = false)}>
    <header slot="header">
      <h1>Modal title</h1>
    </header>

    <div slot="content">
      <p>Content modal</p>
    </div>
  </Modal>

  <button on:click={() => (vibleModal = true)}>Open modal</button>
  <form on:submit|preventDefault={addMeetup}>
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
  </form>
  <MeetupGrid {meetups} />
</div>

<style>
  .meetup-app {
    margin-top: 4rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }

  header {
    border-bottom: 1px solid #ccc;
  }
</style>
