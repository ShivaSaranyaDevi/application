import '../Scss/Contact.scss';
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import contact from '../assets/contact.jpg';




function Contact() {
  return (
    <div className='Contact'>
      <div className='section-a'>
        <img src={contact} alt='contact' className='contact-image' />
        <p className='text-overlay'>
          Contact Us!<br />
          <span className='span-text'>We are here to help you</span>
        </p>
      </div>

      <div className='section-b'>
        <div className='customerSupport'>
          <h4>Customer Support</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt cupiditate error maiores, placeat totam praesentium sapiente ut explicabo, laboriosam dolorem doloremque nulla asperiores rerum minus eaque numquam a doloribus?</p>
        </div>

        <div className='Help'>
          <h4>Help</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt cupiditate error maiores, placeat totam praesentium sapiente ut explicabo, laboriosam dolorem doloremque nulla asperiores rerum minus eaque numquam a doloribus?</p>
          <h5><FaPhoneFlip /><span className='number'>7894561023</span></h5>
        </div>
        <div className='Grievances'>
          <h4>Grievances</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt cupiditate error maiores, placeat totam praesentium sapiente ut explicabo, laboriosam dolorem doloremque nulla asperiores rerum minus eaque numquam a doloribus?</p>
          <h5><IoMail /><span className='mail'>Vision123@gmail.com</span></h5>
        </div>
      </div>
    </div>

  );
}

export default Contact;
