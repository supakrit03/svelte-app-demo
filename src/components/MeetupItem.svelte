<script>
  export let title;
  export let subTitle;
  export let description;
  export let imageUrl;
  export let address;
  export let contactmail;
</script>

<div class="meetup-item">
  <h1>{title}</h1>
  <h3>{subTitle}</h3>

  {description}
  <p>Address : {address}</p>
  <p>Contact : {contactmail}</p>
</div>

<style>
  .meetup-item {
    padding: 2em;
    border: 1px solid #ccc;
    margin-bottom: 1em;
  }
</style>
