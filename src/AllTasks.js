
import React from "react";

import UserApp from "./HOC-part1/UserApp";
import { LoaderHOC } from "./HOC-part2/LoaderHOC";
import { App } from "./render-props/App";
import { Routes } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import './index.css'
// import ContactsList from "./HOC-part2/ContactsList";

const Users = () => {
    return <div>
        Contacts
        <UserApp/>
    </div>
}

const Contacts = () => {
    return <div>
        Users
        <LoaderHOC/>
    </div>
}

const Posts = () => {
    return <div>
        Posts
        <App/>
    </div>
}


export const AllTasks = () => {
    return (
        <div className="container">
            <div className="links">
                <Link className="link" to='/'>Users</Link>
                <Link className="link" to='/contacts'>Contacts</Link>
                <Link className="link" to='/posts'>Posts</Link>

            </div>
            <Routes>
                <Route path="/" element={<Contacts/>}/>
                <Route path="contacts" element={<Users/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </div>
    )
}

