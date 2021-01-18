import React,{Component} from 'react'

import Aux from '../../hoc/Auxiliary'
import Toolbar from  '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from "./Layout.module.css";
class Layout extends Component {
    
    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = () => {
        console.log("sideDrawerClosedHandler called");
        this.setState({showSideDrawer:false});
    }

    render() { 
        return (
            <Aux>        
                <Toolbar />
                <SideDrawer closed={this.sideDrawerClosedHandler} showSideDrawer={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;