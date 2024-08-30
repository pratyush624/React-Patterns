/**
 ** Step 1 -> Let's say you have a Message component that displays a simple message.
 * You want to enhance this component to also display the current timestamp whenever it renders.
 */
function Message({ text }) {
  return <div>{text}</div>;
}

/**
 ** Step 2 -> Create a Higher-Order Component to Add a Timestamp
 * The withTimestamp function is a Higher-Order Component (HOC).
 * It takes WrappedComponent (in this case, it will be Message) as an argument.
 * It returns a new component that:
 * Gets the current time using new Date().toLocaleTimeString().
 * Renders the original component (WrappedComponent) with the received props.
 * Also displays the timestamp below the original component.
 */
function withTimestamp(WrapperComponent) {
  return function (props) {
    const timestamp = new Date().toLocaleTimeString();
    return (
      <div>
        <WrapperComponent {...props} />
        <p>{timestamp}</p>
      </div>
    );
  };
}

/**
 ** Step 3 -> Enhance the Message Component with the HOC
 * withTimestamp(Message) creates a new component called MessageWithTimestamp.
 * This new component behaves like Message but also shows the timestamp.
 */
const MessageWithTimestamp = withTimestamp(Message);

function App() {
  return (
    <>
      <h3>Higher Order Component</h3>
      {/* Step 4: Use the Enhanced Component */}
      <MessageWithTimestamp text={"Hi, This is Pratyush"} />
    </>
  );
}

export default App;
