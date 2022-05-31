<script>
  export let chosenOption = 1;
  let ref = null;

  export function setOption(selectOption) {
    chosenOption = selectOption;
  }
</script>

<div bind:this={ref} on:click={() => console.log(ref)}>
  <button
    disabled={chosenOption === 1}
    on:click={() => {
      chosenOption = 1;
    }}
  >
    Option 1</button
  >
  <button
    disabled={chosenOption === 2}
    on:click={() => {
      chosenOption = 2;
    }}
  >
    Option 2</button
  >
</div>
