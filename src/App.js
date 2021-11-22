import Header from './components/header'
import Footer from './components/footer'
import PostsList from './hoc/postsList'
import {Route, Switch, Redirect} from "react-router-dom";
import React from 'react';
import Layout from './hoc/layout';
import { Routes } from "./common/constants"

function App() {
    return (
        <Layout>
            <Switch>
                <Route forceRefresh path={Routes.POSTS} component={ PostsList } />
                <Route forceRefresh path={Routes.CATEGORIES} component={ PostsList } />
                <Route forceRefresh path={Routes.USERS} component={ PostsList } />
                {/* <Route forceRefresh path="/articles" exact component={ ArticlesList } /> */}
                {/* <Route path="/articles/:articleId" exact component={ Article }/> */}
                {/* <Route path="/articles/category/:categoryId" exact component={ ArticlesList }/> */}
                {/* <Route path="/articles/user/:userId" exact component={ ArticlesList }/> */}

                {/* <Route path="/categories" exact component={ CategoryList }/> */}

                {/* <Route path="/users" exact component={ UsersList }/> */}
                {/* <Route path="/users/:userId" exact component={ User }/> */}
                <Redirect from={ "/" } to={ Routes.POSTS } />
            </Switch>
        </Layout>
    );
}

export default App;
