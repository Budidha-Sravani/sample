import './employee.css'
import Carousel from 'react-material-ui-carousel'
import AdminTopbar from '../../components/topbar1/AdminTopbar'
import Accordion  from '@material-ui/core/Accordion'
import  AccordionSummary  from '@material-ui/core/AccordionSummary'
import AccordionDetails  from '@material-ui/core/AccordionDetails'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Employee = () => {
    const navigate=useNavigate();
    const [emp,setEmp]=useState(
        {
            employeeId:"",
            name:"",
            password:"",
            designation:"",
            projectName:"",
            supervisorName:"",
            joiningDate:"",
            dateOfbirth:"",
            email:"",
            address:"",
            phoneNumber:null,
            gender:"",
            imageUrl:"",
        }
    )
    useEffect(() => {
        axios.get("http://localhost:9001/api/v1/employees").then((response) => {
        setEmp(response.data);
        console.log(response.data);
        });
    }, []);
    const [employee,setEmployee]=useState(
        {
            employeeId:"",
            name:"",
            password:"",
            designation:"",
            projectName:"",
            supervisorName:"",
            joiningDate:"",
            dateOfbirth:"",
            email:"",
            address:"",
            phoneNumber:null,
            gender:"",
            imageUrl:""
        }
    )
    const[employee1,setEmployee1]=useState('');
    const[name,setName]=useState('');
    const[pwd,setPwd]=useState('');
    const[designation,setDesignation]=useState('');
    const[proj,setProj]=useState('');
    const[supervisorName,setSupervisorName]=useState('');
    const[joiningDate,setJoiningDate]=useState('');
    const[appoinmentDate,setAppoinmentDate]=useState('');
    const[dateOfbirth,setDateOfBirth]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[phNo,setPhno]=useState('');
    const[gender,setGender]=useState('');
    const[imageUrl,setImageUrl]=useState('');
    const onSubmit=()=>{
        axios.post(`http://localhost:9001/api/v1/add`,{
        emploeeId:employee1,
        name:name,
        password:pwd,
        designation:designation,
        projectName:proj,
        supervisorName:supervisorName,
        joiningDate:joiningDate,
        appoinmentDate:appoinmentDate,
        dateOfbirth:dateOfbirth,
        email:email,
        address:address,
        phoneNumber:phNo,
        gender:gender,
        imageUrl:imageUrl
        }).then(res=>{return res.data
            console.log(res.data)
        })
        .then((res)=>{
            {
                    
                console.log(res)
                alert("post added successfully")
                navigate('/employee');
            }
                    
        })
        
    }

    return (
    <div className='employee-box'>
        <AdminTopbar/>
        <div className='emp-searchbar'>
            <input type="text" className='search-input' placeholder='  Search here'/>
            <button className='emp-search'>Search</button>
        </div>
        <div className="employee-wrapper">
            <div className='employee-leftcontainer'>
                <div className='emp-crousel'>
                    <Carousel className='emp-carousel'>
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/04/how-to-future-proof-bank-employee-training.jpeg" alt="" className='emp-image' />
                        <img src="https://www.technologyrecord.com/Portals/0/EasyDNNNews/5683/940443p512EDNmainunified-banking-.jpg" alt="" className='emp-image'/>
                        <img src="https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg" alt="" className='emp-image'/>
                    </Carousel>
                </div>
                <div className="emp-picture">
                    
                </div>

            </div>
            <div className='employee-rightcontainer'>
                <div className='addemployee'>
                    <Accordion>
                        <AccordionSummary >
                            <p className='edittitle'>Add or Edit</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Employee Id' onChange={(e)=>setEmployee1(e.target.value)}/>
                                    <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                                    <input type="text" placeholder='PhoneNumber' onChange={(e)=>setPhno(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Gender' onChange={(e)=>setGender(e.target.value)}/>
                                    <input type="text" placeholder='DateOfBirth' onChange={(e)=>setDateOfBirth(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Desgination' onChange={(e)=>setDesignation(e.target.value)}/>
                                    <input type="text" placeholder='Joining Date' onChange={(e)=>setJoiningDate(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Appionment Date' onChange={(e)=>setAppoinmentDate(e.target.value)}/>
                                    <input type="text" placeholder='Project Name' onChange={(e)=>setProj(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Supervisor Name' onChange={(e)=>setSupervisorName(e.target.value)}/>
                                    <input type="text" placeholder='ImageUrl' onChange={(e)=>setImageUrl(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="password" placeholder='Password' onChange={(e)=>setPwd(e.target.value)}/>
                                    <input type="text" placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <button className='editemployeebutton' onClick={onSubmit}>Edit</button>
                                    <button className='editemployeebutton' onClick={onSubmit}>Add</button>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div><br/><br/>
                {emp.map((e)=>
                <div className='viewemployee'>
                    <div className="viewemployeewrapper">
                    <img src={e.imageUrl} 
                    className="wrapperimage"alt="" />
                    </div>
                    

                    
                    <div className="viewemployeedetails">
                        <h5 className='viewemployeetitle' > EmployeeId         :{e.employeeId} </h5>
                        <h5 className='viewemployeetitle'> Name            : {e.name}</h5>
                        <h5 className='viewemployeetitle'> Email           :  {e.email} </h5>
                        <h5 className='viewemployeetitle'> Desgination     :  {e.designation}</h5>
                        <h5 className='viewemployeetitle'> Project Name    :  {e.projectName}</h5> 
                        <h5 className='viewemployeetitle'> Supervisor Name :  {e.supervisorName}</h5>
                        <h5 className='viewemployeetitle'> Phone Number    :  {e.phoneNumber}</h5>
                    
                    </div>
                
                </div>
                 )}
            </div>
           
        </div>
      
    </div>
  )
}

export default Employee
