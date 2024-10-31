import '../Css/Home.css';

const Home = () => {
  return (
    <div className='main'>
    <div className="left">
<h1 className='name1'>Hey, I'M </h1>
  <h1 className='name2'>NOUMAN KHAN</h1>
<p className='about'>I'm a aspiring full-stack web developer and software engineer, passionate about crafting innovative digital solutions. Proficient in MERN Stack. Currently exploring the world of web development through personal projects.</p>
    </div>
    <div className="right">
<div className="imagediv">
  <img src={require('../Assests/noumanimg.jpg')} alt="Nouman Pic" />
</div>
    </div>
    </div>
  )
}

export default Home