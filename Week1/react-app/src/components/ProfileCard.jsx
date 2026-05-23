import heroImg  from '../assets/hero.png'

function ProfileCard(){
   const name = "Joy";
   const course = "BCAA";
   const city = "Jal";
   const role = "Full-stck dev";
   const hobby = "singing songs"

  function getAge(){
    return 20;
  }
    return(
    <div className='card'>
      <img className="profile-img" src = {heroImg} alt="Profile"/>
      <h1>Hello, I am { name } from { city }</h1>
      <h2>My age is: {getAge()}</h2>
      <h2>I am doing { course }</h2>
      <h2>I am preparing for the { role }</h2>
      <h2>Moreover, I like { hobby }</h2>
    </div>
    )
}
export default ProfileCard