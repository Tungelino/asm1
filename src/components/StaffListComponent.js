import React from "react";
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs'
import dateFormat from "dateformat"
import { useState } from "react";
import './staff.css'
// const colums = ['col-12 col-md-4', 'col-3']


function RenderStaff({ data, onClick }) {
    return (
        <div className={colum}>
            <div className='staff-name'>
                <p onClick={() => onClick(data)}>{data.name}</p>
            </div>
        </div>
    )
}
function StaffList() {
    const [info, setInfo] = useState()
    const [colum, setColum] = useState('col-12 col-md-4')

    const handleChange = () => {
        setColum('col-md-3')
    }

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

    return (
        <div className='container'>
            <div className='row'>
                <div className='btn-change'>
                    <button onClick={handleChange}>Đổi sang giao diện 4 cột</button>
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
                <div className='col-12 col-md-4' >{info || 'Bấm vào tên để xem thông tin'}</div>
            </div>
        </div>
    )
}
export default StaffList;
