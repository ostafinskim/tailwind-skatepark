<script>
  const { label = 'Button', ...props } = $props();
</script>

<button
  class="text-white transition-all rounded-md bg-green-600 px-3 py-1.5 shadow-md hover:bg-yellow-500 hover:text-black"
  {...props}>{label}</button>
