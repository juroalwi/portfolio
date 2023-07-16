import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact w-5/6">
      <h1 className="section-title">Want to know more? Reach out!</h1>

      <div className="form-container grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="first-name">First name:</label>
          <input type="text" name="first-name" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="last-name">Last name:</label>
          <input type="text" name="last-name" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" />
        </div>

        <div className="mt-4 flex flex-col col-span-full">
          <label htmlFor="message">Message:</label>
          <textarea rows={5} name="message"></textarea>
        </div>
      </div>
    </div>
  );
}
