<script>
  const { id = 'input', label, description, error, ...props } = $props();
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
</script>

<div class="group space-y-1">
  <label
    class="block font-medium text-slate-900 after:ml-2 after:h-2 after:w-2 after:text-red-600 group-has-[input:required]:after:content-['*']"
    for={id}>{label}</label
  >
  <input
    {id}
    class="block w-full rounded bg-white px-2 py-1 placeholder-slate-500 outline outline-slate-600 placeholder:font-light user-invalid:outline-red-600 focus:outline-2 focus:outline-blue-600"
    aria-describedby={descriptionId}
    aria-invalid={!!error}
    aria-errormessage={errorId}
    {...props}
  />
  {#if description}
    <p id={descriptionId}>{description}</p>
  {/if}
  {#if error}
    <p id={errorId}>{error}</p>
  {/if}
</div>
