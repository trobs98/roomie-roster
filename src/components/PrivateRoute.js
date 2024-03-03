import React, { Component } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../features/profile/profileSlice";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
    const profile = useSelector(getProfile);
    const isLoggedIn = profile.isLoggedIn;

    return (
        <Route
            {...rest}
            render={props => { 
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Route path="/login" element={<Navigate replace to="/login" />} />
                )
            }}
        />
    )
}

export default PrivateRoute;