<script>
  const { title = 'Modal Title', content = 'Modal content goes here.', ...props } = $props();

  let dialog;

  function openModal() {
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
  }
</script>

<div>
  <button onclick={openModal}>Open Modal</button>

  <dialog bind:this={dialog} {...props}>
    <div>
      <header>
        <h2>{title}</h2>
        <button onclick={closeModal}>×</button>
      </header>
      <main>
        <p>{content}</p>
      </main>
      <footer>
        <button onclick={closeModal}>Close</button>
      </footer>
    </div>
  </dialog>
</div>