<script>
  import { createEventDispatcher } from "svelte";
  export let visible = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    console.log("close modal");
    dispatch("on-close");
  }
</script>

{#if visible}
  <div class="backdrop" on:click={onClose} />
  <div class="modal">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer">
      <button on:click={onClose}>Close</button>
    </slot>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
</style>
