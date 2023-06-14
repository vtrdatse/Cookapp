import React, { Component } from 'react'
import { MenuItems } from './MenuItems'; 
import "../Nav/NavbarStyles.css";


export default class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='navbar__items'>

                <h1 className='navbar__logo'>Recipes Food</h1>

                <div className='menu-icons' onClick =
                {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>

                <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
                    
                    {MenuItems.map((item, index) => {
                        return (                      
                            <li key={index}>
                                <a className={item.cName} href="/">{item.title}</a>
                            </li>
                        )
                    })}

                   
                    <button>Sign Up</button>

                </ul>

            </nav>
        )
    }
}


