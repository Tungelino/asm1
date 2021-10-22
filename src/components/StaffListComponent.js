import React from "react";
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs'
import dateFormat from "dateformat"
import { useState } from "react";
import './staff.css'

function RenderStaff({ data, onClick }) {
    return (
        <div className='col-lg-4 col-md-6'>
            <div className='staff-name'>
                <p onClick={() => onClick(data)}>{data.name}</p>
            </div>
        </div>
    )
}

function StaffList() {
    const [info, setInfo] = useState()
    const handleInfo = (data) => {
        console.log(data.name);
        setInfo(<div >
            <h3>Họ và tên: {data.name}</h3>
            <p>Ngày sinh: {dateFormat(data.doB)}</p>
            <p>Ngày vào công ty: {dateFormat(data.startDate)}</p>
            <p>Phòng ban: {data.department.name}</p>
            <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
            <p>Số ngày đã làm thêm: {data.overTime}</p>
        </div>)
    }

    return (<div className='container'>
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
            <div className='info-box'>{info || 'Bấm vào tên để xem thông tin'}</div>
        </div>
    </div>
    )
}
export default StaffList;
