import StaffList from "./components/StaffListComponent";

// app.js . class component
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffList=STAFFS
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                    <div>
                        <StaffList staffList={this.state.staffList} />

                    </div>
                </Navbar>

            </div>
        );
    }
}


//stafflist component
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffList=STAFFS
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>


            </div>
        );
    }
}