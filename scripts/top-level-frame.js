
const shadow = document.getElementById('nested-shadow-root')
  .attachShadow({ mode: 'open' })

shadow.innerHTML = `
  <h2>Shadow DOM in Frame</h2>
  <ul class="shadow-in-frame">
    <p>Shadow-in-Frame Item 1</p>
    <p>Shadow-in-Frame Item 2</p>
  </ul>
`
