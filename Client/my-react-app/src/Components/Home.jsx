import '../Scss/Home.scss';
import onlineClassroomImage from '../assets/onlineClassroom.jpg'; 
import studyMaterials from '../assets/studyMaterials.jpg'; 
import Exam from '../assets/Exam.jpg'; 
import student from '../assets/student.jpg'; 




function Home() {
  return (
    <div className='home'>
      <div className='section1'>
      <img src={student} alt='student' className='background-image'/> 
        <p className='overlay-text'>
          Each person holds so much power<br />
          within themselves that needs to<br /> 
          be let out. Sometimes they just need a <br />
          little nudge, a little direction, a little <br />
          support, a little coaching, <br />
          and the greatest things can happen.
        </p>
      </div>

      <div className='section2'>
       <h3>About us</h3>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, neque! Amet, corrupti rem repudiandae minima voluptatem doloremque molestiae provident a quas non quae est, facere quod reiciendis similique illo velit repellat perspiciatis dolorem, voluptates ea earum aperiam. Qui, eaque omnis delectus eos cum possimus molestiae, cupiditate ducimus iste, eius autem suscipit itaque magni. Dolores similique nobis non dolor, quod autem nesciunt labore unde porro perferendis minus tenetur ad mollitia at possimus quia beatae iste iure! Ad aut nulla, explicabo a repellat assumenda, quibusdam ut ipsa exercitationem voluptatem harum, consequatur quae magni sint impedit eligendi debitis placeat itaque? Cupiditate, tempore voluptatibus perferendis maiores ipsa officiis unde dicta. Et, voluptatibus repellat ipsam nemo sed nihil dicta optio rerum. Necessitatibus, atque ad. Iste maxime distinctio nostrum. Eligendi, eos optio. Facilis velit laboriosam perferendis at eius quisquam totam, nesciunt quidem pariatur fugit illo eligendi quis, modi ipsum explicabo libero officiis soluta? Nobis porro, atque quia commodi, consequatur asperiores iste rem facilis officia corporis harum. Quisquam provident rerum quas eos cum. Aliquid iusto quasi voluptatem expedita officia voluptate ullam ipsum facere nisi at aut, eveniet neque unde nihil deleniti quibusdam amet optio dignissimos maxime, nam necessitatibus modi! Voluptatem et distinctio est eos animi, beatae aliquid.</p>
      </div>
      <div className='section3'>
        <div className='card'>
          <div className='card-header'>
            <h4>Online Classroom Program</h4>
            <p>by Top Faculty</p>
          </div>
          <div className='card-body'>
            <img src={onlineClassroomImage} alt='online-classroom' />
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h4>Comprehensive Study Material</h4>
            <p>for All Exams</p>
          </div>
          <div className='card-body'>
            <img src={studyMaterials} alt='online-classroom' />
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h4>Latest Pattern Test Series</h4>
            <p>with Detailed Analysis</p>
          </div>
          <div className='card-body'>
            <img src={Exam} alt='online-classroom' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
