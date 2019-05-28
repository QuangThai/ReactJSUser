import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : ''
        }
    }

    getUserEditInfo =(info) => {
        this.setState({
            userObj : info
        });
        console.log(info);
        this.props.getUserEditInfoApp(info);
    }
    
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject= {this.props.userEditObject}
            changeEditUserStatus={() => this.props.changeEditUserStatus()} />
        }
        else return;
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=> this.isChange(event)} placeholder="Nhập tên cần  tìm..." style={{width: '600px'}} />
                        <div className=" btn btn-info" onClick={(dl)=> this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                    </div>
                </div>
          </div>
          
          
        );
    }
}

export default Search;