{#snippet card(title, description)}
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
{/snippet}

<div>
  {@render card('Card Title', 'This is a description of the card.')}
  {@render card('Another Card', 'This is another description of a different card.')}
  {@render card('Third Card', 'This is a description of the third card.')}
  {@render card('Fourth Card', 'This is a description of the fourth card.')}
</div>
