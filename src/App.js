import { Component } from "./core";
import './Button/Button'
import './Menu/Menu'

export class App extends Component {

  render() {
    return (
    `
    <my-button></my-button>

    <my-menu></my-menu>
    `
    )
  }
}

customElements.define("my-app", App);
