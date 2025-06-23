<script>
  const { title = 'Card Title', description = '' } = $props();
</script>

<div
  class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
  <p class="font-normal text-gray-700 dark:text-gray-400">{description}</p>
</div>
