import PostsList from './hoc/postsList'
import {Route, Switch, Redirect} from "react-router-dom";
import React from 'react';
import Layout from './hoc/layout';
import { Routes } from "./common/constants"
import Post from './components/post';
import SignIn from './components/signIn';
import SignUpComponent from './components/signup';
import UsersList from './hoc/usersList';
import User from './components/user';
import CategoriesList from './hoc/categoriesList';
import PostEdit from './components/postEdit';
import Query1 from './components/queries/query1';
import Query2 from './components/queries/query2';
import Query3 from './components/queries/query3';

function App() {
    return (
        <Layout>
            <Switch>
                <Route forceRefresh path={Routes.QUERY1} component={ Query1 } />
                <Route forceRefresh path={Routes.QUERY2} component={ Query2 } />
                <Route forceRefresh path={Routes.QUERY3} component={ Query3 } />

                <Route forceRefresh path={Routes.SIGNIN} exact component={ SignIn } />
                <Route forceRefresh path={Routes.SIGNUP} exact component={ SignUpComponent } />

                <Route forceRefresh path={Routes.POSTEDITBYID} component={ PostEdit } />
                <Route forceRefresh path={Routes.POSTCREATE} component={ PostEdit } />
                
                <Route forceRefresh path={Routes.POSTSBYCATEGORYID} component={ PostsList } />
                <Route forceRefresh path={Routes.POSTSBYUSERID} component={ PostsList } />
                <Route forceRefresh path={Routes.POSTS} component={ PostsList } />

                <Route forceRefresh path={Routes.POSTEDITBYID} component={ PostEdit } />
                <Route forceRefresh path={Routes.POSTBYID} exact component={ Post } />
                <Route forceRefresh path={Routes.CATEGORIES} component={ CategoriesList } />
                <Route forceRefresh path={Routes.USERS} component={ UsersList } />
                <Route forceRefresh path={Routes.USERBYID} component={ User } />

                <Redirect from={ "/" } to={ Routes.POSTS } />
            </Switch>
        </Layout>
    );
}

export default App;
