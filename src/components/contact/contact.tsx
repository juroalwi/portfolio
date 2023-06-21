import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact d-flex flex-column">
      <h3>Want to know more? Reach out!</h3>

      <label htmlFor="name">Name</label>
      <input type="text" name="name" />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" />

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" />

      <label htmlFor="message">Message</label>
      <input type="text" name="message" />
    </div>
  );
}
