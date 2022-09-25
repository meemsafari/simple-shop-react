import React from 'react'
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Account from "./containers/Account/Account";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path={'/checkout'} element={<Checkout />}></Route>
                            <Route path={'/account'} element={<Account />}></Route>
                            <Route path={'/'} exact element={<Shopping />}></Route>
                        </Routes>
                    </Layout>
                </Router>
            </div>
        )
    }
}

export default App
