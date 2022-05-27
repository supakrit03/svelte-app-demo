<script>
  import Header from "./components/Header.svelte";
  import MeetupItem from "./components/MeetupItem.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subTitle: "Learn to code in 2 hours",
      description: "In this meetup , we will have some experts that teach",
      imageUrl: "",
      address: "27th Nerd Road, 32523 New York",
      contactmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subTitle: "Let's go for some swimming",
      description: "We will simply swim some rounds",
      imageUrl: "",
      address: "27th Nerd Road, 32523 New York",
      contactmail: "swim@test.com",
    },
  ];
</script>

<div class="meetup-app">
  <Header />

  <div class="meetup-list">
    {#each meetups as meetup (meetup.id)}
      <MeetupItem
        title={meetup.title}
        subTitle={meetup.subTitle}
        description={meetup.description}
        imageUrl={meetup.imageUrl}
        address={meetup.address}
        contactmail={meetup.contactmail}
      />
    {/each}
  </div>
</div>

<style>
  .meetup-list {
    margin-top: 4rem;
  }
</style>
