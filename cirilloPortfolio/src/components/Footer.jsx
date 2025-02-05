
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Michael Cirillo</p>
      <p>Email: <a href="mailto:michael.cirillo093@gmail.com"><michael className="cirillo093"></michael><michael className="cirillo093"></michael>michael.cirillo093@gmail.com</a></p>
      <p>
        GitHub: <a href="https://github.com/mcirillo93" target="_blank" rel="noopener noreferrer">mcirillo93</a>
      </p>
    </footer>
  );
};

export default Footer;
