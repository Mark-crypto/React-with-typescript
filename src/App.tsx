import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name="Mark" id={123}>
        <h2>Hello world</h2>
      </Component>
      <Component name="John" id={456} />
    </main>
  );
}

export default App;
