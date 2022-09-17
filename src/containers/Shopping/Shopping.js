import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const prices = {
    product1: 59,
    product2: 89,
    product3: 20,
    product4: 99,
}

class Shopping extends React.Component {

    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0
    }

    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd
        this.setState({totalPrice: newPrice, products: updatedProducts})
    }

    removeProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceSub = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - priceSub
        this.setState({totalPrice: newPrice, products: updatedProducts})
    }

    render() {
        return(
            <Wrapper>
                <Controls productAdd={this.addProductHandler} productRemove={this.removeProductHandler} totalPrice={this.state.totalPrice} />
            </Wrapper>
        )
    }
}

export default Shopping
