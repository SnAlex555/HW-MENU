import { Component } from "../core/Component/Component";
import '../Button/button.scss';

export class Button extends Component {
    render () {
        return `
        <button class="button">open</button>
        `
    } 
}

customElements.define('my-button', Button);