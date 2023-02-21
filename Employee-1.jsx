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
                imageUrl:""
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
        
        };
        const[employee1,setEmployee1]=useState('');
        const[name,setName]=useState('');
        const[pwd,setPed]=useState('');
        const[designation,setDesignation]=useState('');
        const[proj,setProj]=useState('');
        const[supervisorName,setSupervisorName]=useState('');
        const[joiningDate,setJoiningDate]=useState('');
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
                designation:desgination,
                projectName:proj,
                supervisorName:supervisorName,
                joiningDate:joiningDate,
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
                        // pathchg(history);
                        console.log(res)
                        alert("post added successfully")
                       navigate('/employees');
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
                                    <input type="text" placeholder='Employee Id'/>
                                    <input type="text" placeholder='Name'/>
                                </div>
                                <div className='input-id'>
                                    <input type="email" placeholder='Email'/>
                                    <input type="text" placeholder='PhoneNumber'/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Gender'/>
                                    <input type="text" placeholder='DateOfBirth'/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Desgination'/>
                                    <input type="text" placeholder='Joining Date'/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Appionment Date'/>
                                    <input type="text" placeholder='Project Name'/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Supervisor Name'/>
                                    <input type="text" placeholder='ImageUrl'/>
                                </div>
                                <div className='input-id'>
                                    <input type="password" placeholder='Password'/>
                                    <input type="text" placeholder='Address'/>
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
