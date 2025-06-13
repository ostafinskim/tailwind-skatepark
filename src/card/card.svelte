<script>
  const { title = 'Card Title', description = '', children } = $props();
</script>

<div>
  <h2>{title}</h2>
  <p>{@render children?.()}</p>
</div>
