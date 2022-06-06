<script>
  import { createEventDispatcher } from "svelte";

  const dispath = createEventDispatcher();
  export let value;

  $: allBtnClass = value === "all" ? "active" : "";
  $: isFavBtnClass = value === "isFav" ? "active" : "";
</script>

<div>
  <button
    type="button"
    class={allBtnClass}
    on:click={() => dispath("select", "all")}>All</button
  >
  <button
    type="button"
    class={isFavBtnClass}
    on:click={() => dispath("select", "isFav")}>Favorites</button
  >
</div>

<style>
  div {
    margin-top: 10px;
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }

  button:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  button:hover,
  button:active,
  .active {
    background: #cf0056;
    border-color: #cf0056;
    color: white;
  }
</style>
