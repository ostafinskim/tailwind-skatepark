<script>
  const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<div class="space-y-4">
  <div
    class="flex items-center gap-3 rounded-lg border p-4 has-[input:checked]:border-green-500 has-[input:checked]:bg-green-100"
  >
    <input type="checkbox" id="terms" class="peer h-4 w-4 accent-green-900" />
    <label for="terms" class="">I agree to the terms</label>
  </div>

  <div
    class="flex items-center gap-3 rounded-lg border p-4 has-[input:checked]:border-red-500 has-[input:checked]:bg-red-300"
  >
    <input type="checkbox" id="terms-no" class="peer h-4 w-4 accent-red-900" />
    <label for="terms-no" class="">I do not agree to the terms</label>
  </div>
</div>
