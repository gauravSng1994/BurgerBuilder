import React, {Component} from "react";
import Aux from '../hoc/Aux'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 5,
    cheese: 10,
    meat: 20,
    bacon: 15
};

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:20,
        purchasable:false,
        purchasing:false
    };

    updatePurchaseState(ingredients){
        const sum = Object.values(ingredients).reduce((sum,quantity)=> sum+quantity,0);
        this.setState({purchasable : sum > 0});
        if(sum<1) this.setState({purchasing:false});
    }
    addRemoveIngredientHandler = (ingredientType,operationType)=>{
        const oldCount = this.state.ingredients[ingredientType];
        if(oldCount === 0 && operationType === 'REMOVE') return;
        const updatedCount = oldCount + (operationType === 'ADD' ? 1 : -1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ingredientType] = updatedCount;
        const addPrice = operationType === 'ADD' ? INGREDIENT_PRICES[ingredientType] : - INGREDIENT_PRICES[ingredientType];
        const updatedPrice = this.state.totalPrice + addPrice;
        this.setState({ingredients:updatedIngredients, totalPrice: updatedPrice});
        // this.setState((prevState,props) => ({ totalPrice: prevState.totalPrice + addPrice }) );
        this.updatePurchaseState(updatedIngredients);
    };
    purchaseHandler = ()=>{
      this.setState({purchasing:true});
    };
    purchaseCancelHandler = () =>{
      this.setState({purchasing:false});
    };
    continueHandler = () => {
        console.log('OrderPlaced');
        this.purchaseCancelHandler();
    };
    render(){
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        totalPrice = {this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        cancelHandler={this.purchaseCancelHandler}
                        continueHandler = {this.continueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls purchase = {this.purchaseHandler} clicked = {this.addRemoveIngredientHandler} price={this.state.totalPrice} purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}


export default BurgerBuilder;