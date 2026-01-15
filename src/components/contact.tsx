import TypedTitle from "./typed-title/typed-title";

export default function Contact() {
  return (
    <div className="w-full">
      <TypedTitle>Want to know more? Reach out!</TypedTitle>

      <div className="form-container grid grid-cols-2 gap-6">
        <FormField id="first-name" label="First name"></FormField>
        <FormField id="last-name" label="Last name"></FormField>
        <FormField id="email" label="Email"></FormField>
        <FormField id="subject" label="Subject"></FormField>

        <div className="flex flex-col col-span-full">
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            name="message"
            className="focus:outline-none  p-2 bg-blue-100/20"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

const FormField = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        className="p-2 focus:outline-none bg-blue-100/20"
      />
    </div>
  );
};
