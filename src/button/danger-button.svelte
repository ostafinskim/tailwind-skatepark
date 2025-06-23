<script>
  const { label = 'Button', ...props } = $props();
</script>

<button
  class="cursor-pointer rounded-md bg-red-500 px-3 py-1.5 text-white outline-red-950 text-shadow-2xs hover:bg-red-600"
  {...props}>{label}</button
>
