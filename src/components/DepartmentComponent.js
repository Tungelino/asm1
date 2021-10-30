import React from "react";
import { Card } from "reactstrap";
import './staff.css'
const RenderDepartment = ({ department }) => {
    return (

        <div className='col-12 col-md-6 col-lg-4'>
            <Card className='department-box'>
                <h3>{department.name}</h3>
                <br />
                <p>Số lượng nhân viên: {department.numberOfStaff}</p>
                <br />
            </Card>
        </div>
    )
}

function Department(props) {
    return (
        <div className='container'>
            <h3>Phòng Ban</h3>
            <hr />
            <div className='row'>
                {props.departments.map(department => (
                    <RenderDepartment
                        key={department.id}
                        department={department}
                    />
                ))}
            </div>
        </div>
    )
}
export default Department;