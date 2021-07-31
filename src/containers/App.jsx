import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Register from "../components/Register";
import Login from "../components/Login";
import SingleProduct from "../components/SingleProduct";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Cart from "../components/Cart";
import User from "../components/User";
import Contact from "../components/Contact";
import About from "../components/About";
import { setUser } from "../store/loggedUserReducer";
import AdminPanel from "../components/AdminPanel";
import Perfil from "../components/perfil/Perfil";
import OrdenActual from "../components/OrdenActual";
import Error404 from "../components/Error404.jsx";

import "./App.css";
import { getItems } from "../store/cartReducer";
import Valoraciones from "../components/Valoraciones";

function App() {
    const { isLogIn, loggedUser } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUser()).then((data) => {
            if (!data.payload.id) dispatch(getItems());
        });
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route path="/products/:id" component={SingleProduct} />
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Favorites" component={Favorites} />
                <Route exact path="/Me" component={User} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/ordenActual" component={OrdenActual} />
                <Route exact path="/valoraciones" component={Valoraciones} />

                <Route
                    exact
                    path="/Admin"
                    component={
                        isLogIn && loggedUser.isAdmin ? AdminPanel : Error404
                    }
                />
            </Switch>
        </>
    );
}

export default App;
