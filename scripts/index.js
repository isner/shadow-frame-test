
const shadow = document.getElementById('top-shadow-root')
  .attachShadow({ mode: 'open' })

shadow.innerHTML = `
  <h2>Shadow DOM</h2>
  <ul class="shadow">
    <p>Shadow Item 1</p>
    <p>Shadow Item 2</p>
  </ul>
  <iframe title="Nested Frame" id="nested-frame" src="nested-frame.html"  style="height: 300px; width: 330px;"></iframe>
`
