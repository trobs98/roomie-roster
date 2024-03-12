import React from "react";
import { Navigate } from "react-router-dom";
import NavigationBar from "../app/NavigationBar";

const PrivateRoute = ({ user: user, privateComponent: PrivateComponent, ...rest}) => {
    const isLoggedIn = user.user.isLoggedIn;

    if (isLoggedIn) {
        return (
            <>
                <NavigationBar />
                <PrivateComponent {...rest} />
            </>
            )
    } else {
        return (<Navigate replace to="/login" />)
    }
}

export default PrivateRoute;