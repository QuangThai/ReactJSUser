import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

    class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          data : DataUser,
          searchText:'',
          editUserStatus:false,
          userEditObject:{}
        }
      }
      deleteUser = (idUser) => {
        var tempData = this.state.data;
       tempData = tempData.filter(item => item.id !== idUser);
        this.setState({
          data:tempData
        });
      }

      getUserEditInfoApp = (info) => {
        this.state.data.forEach((value,key) => {
          if(value.id === info.id){
            value.name = info.name;
            value.tel = info.tel;
            value.permission = info.permission;
          }
        })
      }
      changeEditUserStatus = () => {
        this.setState({
          editUserStatus : !this.state.editUserStatus
        });
      }
      editUser = (user) => {
        this.setState({
          userEditObject:user
        });
      }
    
      getNewUserData = (name,tel,permission) => {
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = permission;
        var items= this.state.data;
        items.push(item);

        this.setState({
          data:items
        });
        console.log("Kết nối thành công");
        console.log(this.state.data);
      }

      getTextSearch = (dl) => {
        this.setState({
          searchText:dl
        });
        console.log('Dữ liệu nhận được là :' + this.state.searchText);
      }
      render() {
        var ketqua = [];
        this.state.data.forEach((item) =>{
          if(item.name.indexOf(this.state.searchText) !== -1){
            ketqua.push(item);
          }
        })
        console.log(ketqua);
        return (
          <div>
            <Header/>
            <div className="searchForm">
              <div className="container">
                <div className="row">
                  <Search 
                  getUserEditInfoApp ={(info) =>this.getUserEditInfoApp(info)}
                  checkConnectProps={(dl) => this.getTextSearch(dl)} editUserStatus={this.state.editUserStatus} changeEditUserStatus={() => this.changeEditUserStatus()} userEditObject={this.state.userEditObject} />
                  <TableData 
                    deleteUser = {(idUser) => this.deleteUser(idUser)}
                   editFun={(user) => this.editUser(user)} dataUserProps={ketqua} changeEditUserStatus={() => this.changeEditUserStatus()} />
                  <AddUser add={(name,tel,permission) => this.getNewUserData(name,tel,permission)}/>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    export default App;