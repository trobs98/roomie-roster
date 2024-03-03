import QueryString from "qs";
import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

const PrivateRoute = ({ user: user, privateComponent: PrivateComponent, ...rest}) => {
    const location = useLocation();
    const urlParams = useParams();
    const isLoggedIn = user.user.getIsLoggedin();

    if (isLoggedIn) {
        return (<PrivateComponent {...rest} />)
    } else {
        return (<Navigate replace to="/login" />)
    }
}

export default PrivateRoute;