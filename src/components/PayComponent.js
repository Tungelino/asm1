import React from "react"
import { Card, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            pay: 'pay',
            id: 'id'
        }
        this.sort = this.sort.bind(this)
    };

    sort(value) {
        if (value === 'pay') {
            this.setState({
                staffs: this.props.staffs.sort((a, b) => a.salaryScale - b.salaryScale)
            });
        } else if (value === 'id') {
            this.setState({
                staffs: this.props.staffs.sort((a, b) => a.id - b.id)
            })
        } else if (value === 'money') {
            this.setState({
                staffs: this.props.staffs.sort((a, b) => {
                    const basicSalary = 3000000;
                    const overTimeSalary = 200000;
                    const payA = parseInt((a.salaryScale * basicSalary) + (a.overTime * overTimeSalary));
                    const payB = parseInt((b.salaryScale * basicSalary) + (b.overTime * overTimeSalary));
                    return payB - payA;
                })
            })
        }
    }


    render() {
        const RenderPay = this.state.staffs.map((staff) => {
            const basicSalary = 3000000;
            const overTimeSalary = 200000;
            const payDetail = parseInt((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary));
            return (
                <div key={staff.id} className='col-12 col-md-6 col-lg-4 renderpay-box'>
                    <Card>
                        <h3>{staff.name}</h3>
                        <br />
                        <p>Mã số nhân viên:{staff.id}</p>
                        <p>Hệ số lương:{staff.salaryScale}</p>
                        <p>Số giờ làm thêm:{staff.overTime}</p>
                        <div class='pay-box'>Lương: {payDetail}</div>
                    </Card>
                </div>
            )

        });


        return (
            <div className="container" >
                <div className="row">
                    <Breadcrumb className="mt-3 mb-3">
                        <BreadcrumbItem>
                            <Link className=" text-decoration-none text-link" to="/home" >Nhân Viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link className=" text-decoration-none text-link" to="/pay" >Bảng Lương</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row mb-3">
                    <div className=" col-3  d-flex mx-auto">
                        <button className="btn btn-primary btn-block" onClick={() => this.sort("pay")} >Sắp xếp theo hệ số lương</button>
                    </div>
                    <div className=" col-3  d-flex mx-auto">
                        <button className="btn btn-primary btn-block" onClick={() => this.sort("id")} >Sắp xếp theo mã nhân viên</button>
                    </div>
                    <div className=" col-3  d-flex mx-auto">
                        <button className="btn btn-primary btn-block" onClick={() => this.sort("money")} >Sắp xếp theo lương</button>
                    </div>
                </div >
                <div className="row">
                    {RenderPay}
                </div>
            </div >
        )
    }
}


export default Pay;












// import React, { useState } from "react";
// import { Card } from "reactstrap";
// import './staff.css';

// const lists = [
//     {
//         name: 'Sắp xếp theo hệ số lương',
//         index: 'pay'
//     },
//     {
//         name: 'Sắp xếp theo mã nhân viên',
//         index: 'id'
//     },
//     {
//         name: 'Sắp xếp theo lương',
//         index: 'payRol'
//     }
// ]



// const RenderPay = ({ staff }) => {
//     const basicSalary = 3000000
//     const overTimeSalary = 200000
//     const payDetail = parseInt(staff.salaryScale * basicSalary + staff.overTime * overTimeSalary)

//     return (
//         <div key={staff.id} className='col-12 col-md-6 col-lg-4 renderpay-box'>
//             <Card>
//                 <h3>{staff.name}</h3>
//                 <br />
//                 <p>Mã số nhân viên:{staff.id}</p>
//                 <p>Hệ số lương:{staff.salaryScale}</p>
//                 <p>Số giờ làm thêm:{staff.overTime}</p>
//                 <div class='pay-box'>Lương: {payDetail}</div>
//             </Card>
//         </div>
//     )
// }

// function Pay(props) {
//     const [sort, setSort] = useState()
//     function handleSort (value) {

//                 if (value === 'pay') {
//                     setSort({
//                         staffs: this.props.staffs.sort((a, b) => a.salaryScale - b.salaryScale)
//                     });
//                 } else if (value === 'id') {
//                     this.setState({
//                         staffs: this.props.staffs.sort((a, b) => a.id - b.id)
//                     })
//                 } else if (value === 'payRol') {
//                     this.setState({
//                         staffs: this.props.staffs.sort((a, b) => {
//                             const basicSalary = 3000000;
//                             const overTimeSalary = 200000;
//                             const salaryA = parseInt((a.salaryScale * basicSalary) + (a.overTime * overTimeSalary));
//                             const salaryB = parseInt((b.salaryScale * basicSalary) + (b.overTime * overTimeSalary));
//                             return salaryB - salaryA;
//                         })
//                     })
//                 }
//             }






//     return (
//         <div className='container'>
//             <h3>Bảng lương</h3>
//             <hr />

//             <div className='row' >
//                 {lists.map(list => (
//                     <button className='change-btn btn btn-success col-md-4 col-12'
//                         key={list.name}
//                         onClick={() => handleSort(list.index)}
//                     >{list.name}</button>
//                 ))}
//             </div>


//             <div className='row'>
//                 {props.staffs.map(staff => (
//                     <RenderPay
//                         staff={staff}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Pay;