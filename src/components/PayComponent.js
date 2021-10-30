import React from "react";
import { Card } from "reactstrap";
const basicSalary = 3000000
const overTimeSalary = 200000
const RenderPay = ({ staff }) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card>
                <h3>{staff.name}</h3>
            </Card>
        </div>

    )
}
function Pay(props) {
    return (
        <div className='container'>
            <h3>Bảng lương chi tiết</h3>
            <hr />
            <div className='row'>
                {
                    props.staffs.map((staff) => {
                        <RenderPay
                            key={staff.id}
                            staff={staff} />
                    })
                }

            </div>
        </div>
    )
}

export default Pay;