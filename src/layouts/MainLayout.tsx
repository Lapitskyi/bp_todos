import React from 'react';
import Header from "./components/Header";
import Todo from "../page/Todo/Todo";
import Footer from "./components/Footer";

const MainLayout = () =>  (
        <div className='wrapper-app'>
            <Header/>
            <div className="content">
                <Todo/>
            </div>
          <Footer/>

        </div>
    );

export default MainLayout;
