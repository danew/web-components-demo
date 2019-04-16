const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  diplay: flex;
  
}
</style>
<h1></h1>
<main></main>
<button name="previous">Previous</button>
<button name="next">Next</button>
`;

class Slide extends HTMLElement {
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('wc-slide', Slide);