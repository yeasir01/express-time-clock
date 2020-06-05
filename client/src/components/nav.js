import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <>
        <h1>Test Links</h1>
        <div><Link to="/register">Register</Link></div>
        <div><Link to="/admin/login">Login</Link></div>
        <div><Link to="/clockin">Clock In/Out</Link></div>
        <div><Link to="/admin/dashboard">Private Dashboard</Link></div>
        <div><Link to="/dashboard">Public Dashboard</Link></div>
        <div><Link to="/">Home Page</Link></div>
    </>
)

export default Nav;