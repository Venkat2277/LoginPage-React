import React, { useState, useEffect } from "react";
import HOMEICON from '../Asserts/moptro logo.png'


const Home = () => {
    const data = [
        { name: 'Sunday', percentage: "80%" },
        { name: 'Monday', percentage: "30%" },
        { name: 'Tuesday', percentage: "20%" },
        { name: 'Wednesday', percentage: "60%" },
        { name: 'Thursday', percentage: "10%" },
        { name: 'Friday', percentage: "90%" },
        { name: 'Saturday', percentage: "50%" }
    ];

    const [screen, setScreen] = useState('Home');

    const employeeData = [
        {
            "empid": "EMP1000",
            "name": "Employee0",
            "dob": "1976-07-08",
            "role": "IT Support"
        },
        {
            "empid": "EMP1001",
            "name": "Employee1",
            "dob": "1992-01-14",
            "role": "Sales Manager"
        },
        {
            "empid": "EMP1002",
            "name": "Employee2",
            "dob": "1999-07-02",
            "role": "HR Manager"
        },
        {
            "empid": "EMP1003",
            "name": "Employee3",
            "dob": "1982-08-07",
            "role": "Marketing Specialist"
        },
        {
            "empid": "EMP1004",
            "name": "Employee4",
            "dob": "1962-12-14",
            "role": "Data Analyst"
        },
        {
            "empid": "EMP1005",
            "name": "Employee5",
            "dob": "1963-03-28",
            "role": "Data Analyst"
        },
        {
            "empid": "EMP1006",
            "name": "Employee6",
            "dob": "1961-12-08",
            "role": "Operations Manager"
        },
        {
            "empid": "EMP1007",
            "name": "Employee7",
            "dob": "1977-02-16",
            "role": "Quality Analyst"
        },
        {
            "empid": "EMP1008",
            "name": "Employee8",
            "dob": "1967-06-11",
            "role": "Sales Manager"
        },
        {
            "empid": "EMP1009",
            "name": "Employee9",
            "dob": "1985-08-04",
            "role": "IT Support"
        }
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState(employeeData);

    useEffect(() => {
        const filtered = employeeData.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(filtered);
    }, [searchTerm]);

    return (
        <>


            <div className="homeMainDev">
                {screen === 'Home' && (
                    <>
                        <div>
                            <div className="HomeScreenIconSection">
                                <img src={HOMEICON} style={{ width: '60px', height: '60px' }} />
                            </div>
                            <div className="homePageHeadingSection">
                                <p className="homePageHeadingText">Employee Productivity Dashboard</p>
                            </div>
                            <div>
                                <ul className="ULStyles">
                                    {data.map(day => (
                                        <li key={day} style={{ margin: "5px 0px" }}>
                                            <div className="productivitysection">
                                                <p>Productivity on Monday {day.name}</p>
                                                <p style={{ color: "#36A546" }}>{day.percentage}</p>
                                            </div>
                                            <div>
                                                <p className="Bar" style={{ width: day.percentage }}>.</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
                {screen === 'Contact' && (
                    <>
                        <div className="homePageHeadingSection" style={{ marginTop: "10px" }}>
                            <div>
                                <div className="homePageHeadingSection">
                                    <img src={HOMEICON} style={{ width: '60px', height: '60px' }} />
                                </div>
                                <div className="Searchsection" >
                                    <input type="text" className="Search" placeholder="Search with name" value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16" style={{ margin: '10px' }}>
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '410px', overflowY: 'scroll' }}>
                            {filteredEmployees.map(employee => (
                                <div key={employee.empid} style={{ padding: '10px', margin: '10px', borderRadius: '5px' }} className="card">
                                    <p className="cardText">Name : <p className='margin'>{employee.name}</p></p>
                                    <p className="cardText">Emp ID : <p className='margin'>{employee.empid}</p></p>
                                    <p className="cardText">DOB : <p className='margin' style={{ color: "orange" }}>{employee.dob}</p></p>
                                    <p className="cardText">Role : <p className='margin' style={{ color: "#36A546" }}>{employee.role}</p></p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                <div className="bottomNavBar">
                    <div onClick={() => setScreen('Home')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36A546" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                    </div>
                    <div onClick={() => setScreen('Contact')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36A546" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;