import React from "react";
import "../styles/global.css";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Michael Cirillo</h1>
        <p className="text-xl">Software Engineer | Full Stack Developer</p>
      </header>
      
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-2">
              Passionate software engineer with experience in building modern web applications.
              Proficient in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, REACT.js, and Python. 
              Along with other cloud technologies.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Check out some of my latest work!</h2>
            <ul className="mt-2">
              <li><strong>Address Book Application</strong> - <a href="https://github.com/mcirillo93/Project1-AddressBook" target="_blank" rel="noopener noreferrer"> Click Here!</a></li>
              <li><strong>Vehicle Editor</strong> -   <a href="https://github.com/mcirillo93/vehicleAdditions" target="_blank" rel="noopener noreferrer"> Click Here!</a></li>
              <li><strong>"BookHaus":</strong> A Book Club social media application - <a href="https://github.com/mcirillo93/BookHaus" target="_blank" rel="noopener noreferrer"> Click Here!</a></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 flex space-x-4">
        <Button asChild>
          <a href="https://github.com/mcirillo93" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2" /> GitHub
          </a>
        </Button>
        <Button asChild>
          <a href="https://www.linkedin.com/in/michael-cirillo-82268926a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </Button>
        <Button asChild>
          <a href="mailto:michael.cirillo093@gmail.com">
            <FaEnvelope className="mr-2" /> Email Me: michael.cirillo093@gmail.com
          </a>
        </Button>
      </section>
    </div>
  );
};

export default Portfolio;