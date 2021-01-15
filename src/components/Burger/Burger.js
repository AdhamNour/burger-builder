import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredient).map(key =>{
        return [...Array(props.ingredient[key])].map((_,i)=>{
            return <BurgerIngredient key={key+i} type={key} />
        })
    });

    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;