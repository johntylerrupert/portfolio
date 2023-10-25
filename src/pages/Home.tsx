import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import headshot from '../assets/JTR-Headshot.jpg';

const Home: React.FC = () => {
    return (
        <div className="container">

            <div className="jumbotron my-4">
                <img src={headshot} alt="Headshot" className="img-fluid rounded-circle mb-3" width="200" height="200" />
                <h1 className="display-4">
                    Welcome to my portfolio website!
                </h1>
                <p className="lead">
                    I'm a JavaScript developer with experience in React, Node.js, and TypeScript.
                </p>
                <hr className="my-4" />
                <p>
                    On this website, you can learn more about me and my projects. Feel free to browse around and get in touch if you have any questions!
                </p>
                <a className="btn btn-primary btn-lg" href="#about" role="button">Learn more</a>
            </div>
            <section id="about">
                <h2>About me</h2>
                <p>
                    I'm a passionate developer with a love for all things JavaScript. I have experience building web applications with React and Node.js,
                    and I'm always looking to learn new technologies and improve my skills.
                </p>
                <p>
                    When I'm not coding, you can find me hiking, playing guitar, or reading a good book.
                </p>
            </section>
        </div>
    );
};

export default Home;