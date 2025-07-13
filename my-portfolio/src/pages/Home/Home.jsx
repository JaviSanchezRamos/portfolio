import './Home.css';
import javiImage from '../../assets/javi.jpg';

export const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome!</h1>
        <h2>I'm Javier Sánchez Ramos</h2>
        <h3>Junior Software Developer</h3>
        <p>
          I'm passionate about building modern, cross-platform applications. Recently graduated from a software development program, I'm eager to contribute to innovative projects using technologies like Java, SQL, and React.
        </p>
        <a href="/projects" className="home-button">View My Projects</a>
      </div>

      <div className="home-image">
      <img src={javiImage} alt="Javier Sánchez Ramos" />      </div>
    </section>
  );
};
