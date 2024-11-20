
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Michael Cirillo</p>
      <p>Email: <a href="mailto:michael.cirillo007@gmail.com">michael.cirillo007@gmail.com</a></p>
      <p>
        GitHub: <a href="https://github.com/mcirillo93" target="_blank" rel="noopener noreferrer">mcirillo93</a>
      </p>
    </footer>
  );
};

export default Footer;
