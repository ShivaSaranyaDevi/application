import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../Scss/AdminLogin.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const naviagate =useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const { email, password } = data;
            const response = await axios.get(`https://localhost:7221/api/AdminLogin/${encodeURIComponent(email)}/${encodeURIComponent(password)}`);
            localStorage.setItem('employeeData', JSON.stringify(response.data));
            if ( response.status){
                naviagate("/AdminDashboard")
            }

        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className='container-fluid' style={{ backgroundColor: "rgb(242, 245, 247)" }}>
            <div className='row'>
                <div className='col-md-5'></div>    
                <div className='col-md-6 mt-5'>
                    <div className='card mt-5'>
                        <div className='card-header'>
                            <h3 className="heading">Login</h3>
                        </div>
                        <div className='card-body'>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="email">Email*</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Please enter your Email" 
                                        value={data.email} 
                                        className='form-control' 
                                        onChange={handleChange} 
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="password">Password*</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Please enter Password" 
                                        value={data.password} 
                                        className='form-control' 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    );
};

export default AdminLogin;
