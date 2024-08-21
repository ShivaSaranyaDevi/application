import { useState, useEffect } from "react";
import axios from "axios";
import '../Scss/AdminApplications.scss';
import { format } from 'date-fns';


function AdminApplications() {
  const [data, setData] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setError('');
      try {
        const response = await axios.get('https://localhost:7221/api/Application');
        if (response.status === 200) {
          const rawData = response.data;
          const filteredData = rawData.filter(item => item.status === "Applied");
          
          const formattedData = filteredData.map(item => ({
            ...item,
            dateOfBirth: item.dateOfBirth ? format(new Date(item.dateOfBirth), 'MM/dd/yyyy') : '',
            applicationDate: item.applicationDate ? format(new Date(item.applicationDate), 'MM/dd/yyyy') : '',
          }));
  
          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      }
    };
    fetchData();
  }, []);

  const handleAccept = async (applicantID) => {
    try {
      await axios.put(`https://localhost:7221/api/Application/${applicantID}`,{
          status: 'approved'
      })
        setData(data.filter(sts=>sts.applicantID !==applicantID)); 

      
    } catch (error) {
      console.error('Error rejecting application:', error);    }
  };

  const handleReject  = async (applicantID) => {
    try {
      await axios.delete(`https://localhost:7221/api/Application/${applicantID}`)
    
      
    } catch (error) {
      console.error('Error rejecting application:', error);    }
  };

  return (
    <div className="Applications">
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      
      {data.length > 0 ? (
        data.map(item => (
          <div className="Application-data" key={item.applicantID}>
            <div className='card'>
              <div className='card-header'>
                <div className="Applicant-header">
                  <div className="application-photo">
                    <img 
                      src={item.applicant_image} 
                      alt={`${item.firstName} ${item.lastName}`} 
                      className="Applicant-photo"
                    />
                  </div>
                  
                  <div className="applicant-status-handling">
                    <button className="accept bg-success"onClick={() => handleAccept(item.applicantID)}>Accept</button>
                    <button className="reject bg-danger" onClick={() => handleReject(item.applicantID)}>Reject</button>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div className="Applicant-body">
                  <div className="applicant-details">
                    <p className="name">Name: {item.firstName} {item.lastName}</p>
                    <p className="gender">Gender: {item.gender}</p>
                    <p className="dob">Date of Birth: {item.dateOfBirth}</p>
                    <p className="applicationDate">Applied on: {item.applicationDate}</p>
                    <p className="email">Email: {item.email}</p>
                    <p className="contact">Contact Number: {item.phoneNumber}</p>
                  </div>
                  <div className="applicant-address">
                    <p className="address">Address: {item.address}</p>
                    <p className="city">City: {item.city}</p>
                    <p className="state">State: {item.state}</p>
                    <p className="zipCode">Pin Code: {item.zipCode}</p>
                    <p className="country">Country: {item.country}</p>
                    <p className="nationality">Nationality: {item.nationality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : !error && (
        <div className="no-data">
          <p className="reminder">Data not available</p>
        </div>
      )}
    </div>
  );
}

export default AdminApplications;
