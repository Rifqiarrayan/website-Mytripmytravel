import parse from "html-react-parser";

function Contact(props) {
  return (
    <div
      id="contact"
      className="contact flex justify-center items-center min-h-screen p-8"
    >
      <div className="wrapper w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <div className="footer">
          {props.contactSection.map((item, index) => (
            <div className="footer-section" key={index}>
              {parse(item.content)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;