import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthaichinhsua : false,
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]:value
        });
            // đóng gói item
        // var item = {};
        // item.id=this.state.id;
        // item.name= this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission
        // console.log(item);
    }

    thayDoiTrangThai = () => {
        this.setState ({
            trangthaichinhsua: !this.state.trangthaichinhsua
        })
    }
    hienThiNut=() => {
        if (this.state.trangthaichinhsua === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>
        }
        else return  <div className="btn btn-block btn-outline-dark" onClick={() => this.thayDoiTrangThai()}>Thêm Mới</div>
    }
    hienThiForm = () => {
        if(this.state.trangthaichinhsua === true){
            return (
                <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm Mới User vào hệ thống</div>
                            <div className="card-body text-primary">
                            <div className="card-body">
                                <div className="form-group">
                                <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                <input type="text" onChange={(event)=>this.isChange(event)} name="tel" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                <select className="custom-select" name="permission" onChange={(event)=>this.isChange(event)} required>
                                    <option value>Chọn phân quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={() => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Add" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="col-3">
                
                 {this.hienThiNut()}
                 {this.hienThiForm()}
              
            </div>  
        );
    }
}

export default AddUser;