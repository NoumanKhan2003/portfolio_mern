import HomeCss from '../Css/Home.module.css';

const Home = () => {
  return (
    <div className={HomeCss.main}>
    <div className={HomeCss.left}>
<h1 className={HomeCss.name1}>Hey, I'M </h1>
  <h1 className={HomeCss.name2}>NOUMAN KHAN</h1>
<p className={HomeCss.about}>I'm a aspiring full-stack web developer and software engineer, passionate about crafting innovative digital solutions. Proficient in MERN Stack. Currently exploring the world of web development through personal projects.</p>
    </div>
    <div className={HomeCss.right}>
<div className={HomeCss.imagediv}>
  <img src={require('../Assests/noumanimg.jpg')} alt="Nouman Pic" />
</div>
    </div>
    </div>
  )
}

export default Home;