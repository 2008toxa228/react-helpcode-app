import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Layout (props) {
    return (
        <React.Fragment>
            <Header headerTitle="//sitename"/>
            <Nav />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </React.Fragment>
    );
}


export default Layout;
