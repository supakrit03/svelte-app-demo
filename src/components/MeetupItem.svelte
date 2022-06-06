<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  import Badge from "./Badge.svelte";

  export let id;
  export let title;
  export let subTitle;
  export let imageUrl;
  export let description;
  export let address;
  export let contactmail;
  export let isFav;

  const dispath = createEventDispatcher();

  function toggleFavorite(id) {
    dispath("toggle-favorite", id);
  }
</script>

<article>
  <header>
    <h1>
      {title}
      {#if isFav}
        <Badge>Favorite</Badge>
      {/if}
    </h1>
    <h2>{subTitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={imageUrl} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button href="mailto:{contactmail}" text="Contact" />
    <Button
      mode="outline"
      text={isFav ? "Unfavorite" : "Favorite"}
      on:click={() => toggleFavorite(id)}
    />
    <Button
      mode="outline"
      text="Show Details"
      on:click={() => dispath("show-detail", id)}
    />
  </footer>
</article>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
</style>
