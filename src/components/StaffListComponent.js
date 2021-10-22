import React from "react";
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs'
import dateFormat from "dateformat"
import { useState } from "react";
import './staff.css'

function RenderStaff({ data, onClick }) {
    return (
        <div className='col-lg-4 col-md-6  '>
            <div className='staff-name'>
                <p onClick={() => onClick(data)}>{data.name}</p>
            </div>
        </div>
    )
}

function StaffList() {
    const [info, setInfo] = useState()
    const handleInfo = (data) => {
        setInfo(<div >
            <h3>Họ và tên: {data.name}</h3>
            <img src={data.image} />
            <p>Ngày sinh: {dateFormat(data.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(data.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {data.department.name}</p>
            <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
            <p>Số ngày đã làm thêm: {data.overTime}</p>
        </div>)
    }
    // const [change6, setChange6] = useState()
    // const handleChange6 = () => {
    //     setChange6(
    //         <div className='col-lg-2'>

    //         </div>
    //     )
    // }
    // const [change3, setChange3] = useState()
    // const handleChange3 = () => {
    //     setChange3(
    //         <div className='col-lg-4'>

    //         </div>
    //     )
    // }
    // const [change2, setChange2] = useState()
    // const handleChange2 = () => {
    //     setChange2(
    //         <div className='col-lg-6'>

    //         </div>
    //     )
    // }

    return (<div className='container'>
        <div className='row'>
            <div className='select-box'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Chọn số cột hiển thị</option>
                    {/* <option value="1" onChange={handleChange6}>6 cột</option>
                    <option value="2" onChange={handleChange3}>3 cột</option>
                    <option value="3" onChange={handleChange2}>2 cột</option> */}
                </select>
            </div>
        </div>
        <div className='row'>
            {STAFFS.map(staff => (
                <RenderStaff
                    key={staff.id}
                    data={staff}
                    onClick={handleInfo}
                />
            ))}
        </div>
        <div className='row'>
            <div className='col-lg-4 col-md-6 info-box'  >{info || 'Bấm vào tên để xem thông tin'}</div>
        </div>
    </div>
    )
}
export default StaffList;
