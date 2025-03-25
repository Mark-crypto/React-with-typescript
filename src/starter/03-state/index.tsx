import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};
const navlinks = [
  {
    id: 1,
    url: "some url",
    text: "Some text",
  },
  {
    id: 2,
    url: "some url",
    text: "Some text",
  },
  {
    id: 3,
    url: "some url",
    text: "Some text",
  },
];

function Component() {
  const [text, setText] = useState("Hello World");
  const [number, setNumber] = useState(0);
  const [list, setList] = useState<String[]>([]);
  const [links, setLinks] = useState<Link[]>(navlinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Hello user");
          setNumber(number + 1);
          setList(["Hello", "World"]);
          setLinks([...links, { id: 4, url: "some url", text: "Some text" }]);
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default Component;
