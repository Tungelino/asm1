import React from "react";
import { Card } from "reactstrap";
import './staff.css';

const lists = [
    {
        name: 'Sắp xếp theo mã nhân viên',
        index: 'sortById'
    },
    {
        name: 'Sắp xếp theo hệ số lương',
        index: 'sortByScale'
    },
    {
        name: 'Sắp xếp theo lương',
        index: 'sortByPay'
    }
]


const RenderPay = ({ staff }) => {
    const basicSalary = 3000000
    const overTimeSalary = 200000
    const payDetail = parseInt(staff.salaryScale * basicSalary + staff.overTime * overTimeSalary)

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
}
function Pay(props) {
    return (
        <div className='container'>
            <h3>Bảng lương</h3>
            <hr />

            <div className='row' >
                {lists.map(list => (
                    <button className='change-btn btn btn-success col-md-4 col-12'
                        key={list.name}
                    // onClick={() => setColum(list.index)}
                    >{list.name}</button>
                ))}
            </div>


            <div className='row'>
                {props.staffs.map(staff => (
                    <RenderPay
                        staff={staff}
                    />
                ))}
            </div>
        </div>
    )
}

export default Pay;