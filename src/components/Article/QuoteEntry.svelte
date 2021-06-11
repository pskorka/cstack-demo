<script lang="ts">
  export let entry: any;
</script>

<div class="quote-entry">
  <blockquote class="blockquote">
    <p>{@html entry.quote_entry.quote}</p>
    <cite>{@html entry.quote_entry.author}<br /></cite>
  </blockquote>
</div>

<style lang="scss">
  .blockquote {
    font-family: var(--title-font);
    font-size: 2.25rem;
    line-height: 1.2;
    font-weight: 900;
    margin: 50px 0;
    color: #f67280;
    letter-spacing: -0.5px;
    padding: 0 30px;
    p:first-of-type:before {
      content: open-quote;
      position: relative;
      margin-right: 10px;
    }
    p:first-of-type:after {
      content: close-quote;
      position: relative;
    }
    cite {
      color: rgb(83, 83, 83);
      font-size: 16px;
    }
  }
</style>
