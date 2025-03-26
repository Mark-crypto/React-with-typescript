type BasicComponentProps = {
  type: "basic";
  name: string;
};

type AdvancedComponentProps = {
  type: "advanced";
  name: string;
  email: string;
};

function Component(props: BasicComponentProps | AdvancedComponentProps) {
  const { type, name } = props;
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>Basic Component</h2>
        <h2>User:{name}</h2>
      </article>
    );
  }
  return (
    <article className="alert alert-danger">
      <h2>Advanced Component</h2>
      <h2>User:{name}</h2>
      <h2>Email:{props.email}</h2>
    </article>
  );
}
export default Component;
