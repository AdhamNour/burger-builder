import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = () => {
    return (
        <div className={classes.BurgerBuilder} >
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;