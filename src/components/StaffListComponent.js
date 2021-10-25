import React from "react";
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs'
import dateFormat from "dateformat"
import { useState } from "react";
import './staff.css'
const lists = ['col-md-3', 'col-lg-2', 'col-md-6', 'col-lg-12']



function RenderStaff({ data, onClick, colum }) {
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
    const [colum, setColum] = useState('col-md-4 col-12')




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
                    {lists.map(list => (
                        <button
                            key={list}
                            onClick={() => setColum(list)}>{list}</button>


                    ))}
                </div>
            </div>

            <div className='row'>
                {STAFFS.map(staff => (
                    <RenderStaff
                        key={staff.id}
                        data={staff}
                        onClick={handleInfo}
                        colum={colum}
                    />
                ))}
            </div>
            <div className='row'>
                <div  >{info || 'Bấm vào tên để xem thông tin'}</div>
            </div>
        </div>
    )
}
export default StaffList;
