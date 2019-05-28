import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                <h1 className="display-3">ProJect quản lý thành viên bằng ReactJS với dữ liệu Json</h1>
                <hr className="my-2 pt-2"/>
                </div>
            </div>
        );
    }
}

export default Header;