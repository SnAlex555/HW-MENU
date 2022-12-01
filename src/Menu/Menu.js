import { Component } from "../core";
import '../Menu/menu.scss';

export class Menu extends Component {

    constructor() {
        super()
        this.state={
            isOpen:false
        }
    }

    toggleMenu = () =>{
        this.setState((state) =>{
            return {
                ...state,
                isOpen:!state.isOpen
            }
        })
    }

    onClick = (evt) => {
        const target= evt.target
        if(target.closest('.button')){
            this.toggleMenu() 
            // this.setState((state) =>{
            //     return {
            //         ...state,
            //         isOpen:true
            //     }
            // })
        }
        if(target.closest('.menu-button')){
            this.toggleMenu()
            // this.setState((state) =>{
            //     return {
            //         ...state,
            //         isOpen:false
            //     }
            // })
        }
    }

    componentDidMount() {
        window.addEventListener ('click', this.onClick)
    }

    componentWillUnmount() {
        window.removeEventListener ('click', this.onClick)
    }

    render() {
        return`
        ${this.state.isOpen
        ? `<div class='menu'>
        <button class="menu-button">Close</button>
        </div>`
        : ''}
        `
    }
}

customElements.define('my-menu', Menu)