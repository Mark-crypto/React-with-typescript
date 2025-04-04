import { type PropsWithChildren } from "react";

// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;
function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>name:{name}</h2>
      <h2>id:{id}</h2>
      {children}
    </div>
  );
}
export default Component;
