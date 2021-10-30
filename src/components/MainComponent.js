import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Pay from './PayComponent';
import Department from './DepartmentComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }

    }

    render() {

        const DepartmentUs = () => {
            return (
                <Department departments={this.state.departments} />
            )
        }

        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail
                    staff={this.state.staffs.filter((staff) =>
                        staff.id === parseInt(match.params.staffId, 10))[0]}
                />
            )
        }
        const PayUs = () => {
            return (
                <Pay staffs={this.state.staffs} />
            )
        }
        return (
            <div className="App">

                <Header />
                <Switch>
                    <Route exact path='/staff' component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path='/staff/:staffId' component={StaffWithId} />
                    <Route path='/department' component={DepartmentUs} />
                    <Route path='/pay' component={PayUs} />
                    <Redirect to='/staff' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
