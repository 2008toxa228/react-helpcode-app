import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Layout (props) {
    return (
        <React.Fragment>
            <Header headerTitle="header"/>
            <Nav />
            <Main>
                {props.children}
                {/* <PageSwitcher /> */}
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;
