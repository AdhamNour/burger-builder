import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    var transformedIngredient = Object.keys(props.ingredient).map(key =>{
        return [...Array(props.ingredient[key])].map((_,i)=>{
            return <BurgerIngredient key={key+i} type={key} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    });

    if (transformedIngredient.length === 0) {
        transformedIngredient = "Please add some ingredient"
    }

    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;