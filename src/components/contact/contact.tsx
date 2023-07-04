import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="section-title">Want to know more? Reach out!</h1>

      <div className="form-container row">
        <div className="col-6 p-4 ps-0">
          <label htmlFor="first-name">First name:</label>
          <input type="text" name="first-name" />
        </div>

        <div className="col-6 p-4 pe-0">
          <label htmlFor="last-name">Last name:</label>
          <input type="text" name="last-name" />
        </div>

        <div className="col-6 p-4 ps-0">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>

        <div className="col-6 p-4 pe-0">
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" />
        </div>

        <div className="col-12 py-4 px-0">
          <label htmlFor="message">Message:</label>
          <textarea
            className="h-auto"
            name="message"
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
