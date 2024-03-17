import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ user: user, publicComponent: PublicComponent, ...rest}) => {
    const isLoggedIn = user.user.isLoggedIn;

    if (!isLoggedIn) {
        return (<PublicComponent {...rest} />)
    } else {
        return (<Navigate replace to="/home" />)
    }
}

export default PublicRoute;