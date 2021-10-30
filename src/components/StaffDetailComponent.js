import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, BreadcrumbItem, Breadcrumb
} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function RenderStaffDetail({ staff }) {
    return (
        <div className='row'>
            <Card className='col-12 col-md-3 col-lg-4'>
                <CardImg src={staff.image} width='100%' alt={staff.name} />
            </Card>
            <Card className='col-12 col-md-9 col-lg-8'>
                <CardBody>
                    <CardTitle>Họ và tên:{staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name} </CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm:{staff.overTime} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function StaffDetail(props) {
    if (props.staff != null)
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staff'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.staff.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <RenderStaffDetail staff={props.staff} />
                </div>
            </div>
        )
    else return (<div></div>)
}

export default StaffDetail;