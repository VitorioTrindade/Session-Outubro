import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './home'
import Contador from './carrinho/contador/'
import DetalheProduto from './detalheProduto/'
import Carrinho from './carrinho'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/detalhe" component={DetalheProduto} />
                <Route path="/carrinho" component={Carrinho} />

                <Route path="/contador" exact={true} component={Contador} />
            </Switch>
        </BrowserRouter>
    )
}
