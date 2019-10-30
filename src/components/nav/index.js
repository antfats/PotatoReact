import React, { Component } from "react";
import { Menu, Segment } from 'semantic-ui-react';
import "./style.css";

class Nav extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted secondary>
                    <Menu.Item
                        name="Anthony Fatato"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />


                    <Menu.Item className="right item"
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>


        )
    }
}
export default Nav;

