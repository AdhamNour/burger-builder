import React, {Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxiliary'
class BurgerBuilder extends Component {
    state = {
        ingredient : {
            salad :0,
            bacon : 0 ,
            cheese : 0,
            meat:0
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