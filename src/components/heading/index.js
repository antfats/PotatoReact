import React from 'react'
import { Header } from 'semantic-ui-react'
import "./style.css"

class Heading extends React.Component {



    render() {
        return (
            <div>
                <Header as='h1' id="head">Potato Fatato</Header>
                <Header.Subheader attached id="subHead">
                    Creating the most efficent and most sales generating ecommerce website since i made this one. Buy your website now boy. I need money come on 
              </Header.Subheader>
            </div>
        )
    }
}



export default Heading