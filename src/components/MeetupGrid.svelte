<script>
  import MeetupItem from "./MeetupItem.svelte";

  export let meetups = [];
</script>

<section>
  {#each meetups as meetup (meetup.id)}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subTitle={meetup.subTitle}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      address={meetup.address}
      contactmail={meetup.contactmail}
      isFav={meetup.isFav}
      on:toggle-favorite
      on:show-detail
    />
  {/each}
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
