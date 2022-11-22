class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color: #eec591;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(255, 99, 71, 0.5);
          }
          h2 {
            padding: 16px;
          }
        </style>
        
        <h2>WORLD OF MOVIE</h2>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);