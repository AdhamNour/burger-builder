import React, {Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxiliary'
class BurgerBuilder extends Component {
    state = {
        ingredient : {
            salad : 1,
            bacon : 1 ,
            cheese : 2,
            meat:3
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredient = { this.state.ingredient} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}
export default BurgerBuilder;