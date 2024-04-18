import React, { useState } from 'react';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
});
console.log(formData);
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async(e) => {
    e.preventDefault();
    
if(formData.name && formData.address &&formData.mobile &&formData.email &&formData.gender &&formData.dob &&formData.course){
    try{
        const result = await registerAPI
        (formData)
        console.log(result);
        if(result.status==200){
            alert("welcome")
            setFormData({ name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''})
            setTimeout(()=>{
                navigate('/dashboard')
            },2000);
        }else{
            alert("result.response.data")
            setTimeout(()=>{
                setFormData({ name: '',
                address: '',
                mobile: '',
                email: '',
                gender: '',
                dob: '',
                course: ''})

            },2000)
        }

  }catch(err){
    console.log(err);
  }
}else{
alert("plz fill form")
}
};

const handleCancel = () => {
   setFormData ({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });
    alert("Registration Cancelled.");
};

  return (
    <> <div className="container">
    <h2 className="mt-4 mb-4">Higher Secondary Admission Registration</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="course" className="form-label">Course:</label>
            <select id="course" name="course" value={formData.course} onChange={handleChange} className="form-select" required>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
            </select>
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary me-2">Register</button>
            <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
    </form>
</div>
</>
  )
}

export default Register