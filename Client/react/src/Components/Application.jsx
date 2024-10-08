import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Scss/Application.scss';
import axios from 'axios';
import { format } from 'date-fns';

function Application() {
    const [formData, setFormData] = useState({
        Applicant_image: '',
        FirstName: '',
        LastName: '',
        dateOfBirth: '',
        Gender: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        City: '',
        State: '',
        ZipCode: '',
        Country: '',
        Nationality: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
            const { name, value, type, files } = e.target;
            if (type === 'file') {
                const file = files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        [name]: reader.result
                    }));
                };
                reader.readAsDataURL(file);
            } else {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: value
                }));

            
        }
    };

    const resetForm = () => {
        setFormData({
            Applicant_image: '',
            FirstName: '',
            LastName: '',
            dateOfBirth: '',
            Gender: '',
            Email: '',
            PhoneNumber: '',
            Address: '',
            City: '',
            State: '',
            ZipCode: '',
            Country: '',
            Nationality: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!formData.FirstName || !formData.LastName || !formData.Email) {
            setError('Please fill in all required fields.');
            return;
        }

        try {
            const response = await axios.post(`https://localhost:7221/api/Application/api/Post`, formData);
            const data = response.data;

            if (data.DateOfBirth) {
                const dob = new Date(data.DateOfBirth);
                const formattedDOB = format(dob, 'yyyy-MM-dd');

                setFormData(formData => ({
                    ...formData,
                    dateOfBirth: formattedDOB
                }));
            }

            setMessage('Application submitted successfully!');
            resetForm();
        } catch (error) {
            console.error(error);
            setError('An error occurred while submitting the application. Please try again.');
        }
    };

    return (
        <div className='Application-container'>
            <div className='container'>
                <div className='form-wrapper'>
                    <h2 className='form-title'>Application Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label className='form-label'>Photo</label>
                            <input
                                type="file"
                                name='Applicant_image'
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>First Name</label>
                            <input
                                type="text"
                                name='FirstName'
                                className='form-control'
                                value={formData.FirstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type="text"
                                name='LastName'
                                className='form-control'
                                value={formData.LastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Date of Birth</label>
                            <input
                                type="date"
                                name='dateOfBirth'
                                className='form-control'
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Gender</label>
                            <select
                                name='Gender'
                                className='form-control'
                                value={formData.Gender}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Email</label>
                            <input
                                type="email"
                                name='Email'
                                className='form-control'
                                value={formData.Email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Contact Number</label>
                            <input
                                type="text"
                                name='PhoneNumber'
                                className='form-control'
                                value={formData.PhoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Address</label>
                            <input
                                type="text"
                                name='Address'
                                className='form-control'
                                value={formData.Address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>City</label>
                            <input
                                type="text"
                                name='City'
                                className='form-control'
                                value={formData.City}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>State</label>
                            <input
                                type="text"
                                name='State'
                                className='form-control'
                                value={formData.State}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Zip Code</label>
                            <input
                                type="text"
                                name='ZipCode'
                                className='form-control'
                                value={formData.ZipCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Country</label>
                            <input
                                type="text"
                                name='Country'
                                className='form-control'
                                value={formData.Country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Nationality</label>
                            <select
                                name='Nationality'
                                className='form-control'
                                value={formData.Nationality}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn-submit'>Submit</button>
                        </div>
                        <div className='error-messages'>
                            {message && <div className='alert alert-success'>{message}</div>}
                            {error && <div className='alert alert-danger'>{error}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;
