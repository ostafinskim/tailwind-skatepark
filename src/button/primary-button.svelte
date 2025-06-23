<script>
  const { label = 'Button', ...props } = $props();
</script>

<button
  class="rounded-md bg-blue-600 px-3 py-1.5 text-white shadow-md hover:bg-violet-600"
  {...props}>{label}</button
>
