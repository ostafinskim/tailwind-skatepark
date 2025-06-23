<script>
  const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<form class="space-y-4">
  <div
    class="group rounded-lg border p-4 transition-colors has-[input:user-invalid]:border-red-500 has-[input:user-invalid]:bg-red-50 has-[input:valid]:border-green-500 has-[input:valid]:bg-green-50"
  >
    <label class="block text-sm font-medium">Email</label>
    <input
      type="email"
      required
      class="mt-1 block w-full rounded border-2 border-slate-300 bg-white px-3 py-2 user-invalid:border-red-600 focus:border-blue-500 focus:outline-none"
    />
    <p class="mt-1 hidden text-sm text-red-600 group-has-[input:user-invalid]:block">
      This field is required
    </p>
  </div>

  <div
    class="group rounded-lg border p-4 transition-colors has-[input:user-invalid]:border-red-500 has-[input:user-invalid]:bg-red-50 has-[input:valid]:border-green-500 has-[input:valid]:bg-green-50"
  >
    <label class="block text-sm font-medium">Password</label>
    <input
      type="password"
      required
      minlength="6"
      maxlength="12"
      class="mt-1 block w-full rounded border-2 border-slate-300 bg-white px-3 py-2 user-invalid:border-red-600 focus:border-blue-500 focus:outline-none"
    />
    <p class="mt-1 hidden text-sm text-red-600 group-has-[input:user-invalid]:block">
      Password cannot be less than 6 characters
    </p>
  </div>

  <div
    class="rounded-lg border p-4 transition-colors has-[input:checked]:border-green-500 has-[input:checked]:bg-green-50 has-[input:user-invalid]:border-red-500 has-[input:user-invalid]:bg-red-50"
  >
    <input name="terms" id="terms" type="checkbox" class="accent-green-500" />
    <label for="terms">Terms and conditions</label>
  </div>
</form>
