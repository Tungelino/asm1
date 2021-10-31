import React from "react";
import { Card } from "reactstrap";
import './staff.css';
// const basicSalary = 3000000
// const overTimeSalary = 200000
const RenderPay = ({ staff }) => {
    return (
        <div className='col-12 col-md-6 col-lg-4 renderpay-box'>
            <Card>
                <h3>{staff.name}</h3>
                <br />
                <p>Mã số nhân viên:{staff.id}</p>
                <p>Hệ số lương:{staff.salaryScale}</p>
                <p>Số giờ làm thêm:{staff.overTime}</p>
                <div class='pay-box'>Lương: </div>
            </Card>

        </div>

    )
}
function Pay(props) {
    return (
        <div className='container'>
            <h3>Bảng lương</h3>
            <hr />
            <div className='row'>
                {props.staffs.map(staff => (
                    <RenderPay
                        key={staff.id}
                        staff={staff}
                    />
                ))}
            </div>
        </div>
    )
}

export default Pay;