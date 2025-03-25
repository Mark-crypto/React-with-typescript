import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const text = formData.get("text") as string;
    const person: { name: string } = { name: text };
    console.log(data);
  };
  return (
    <section>
      <h2>Event example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="form-input mb-1"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
