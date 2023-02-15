import './Messages.css';

function Messages(props) {
  return (
    <div className="Messages" key={props.message}>
      <p className="message">
        {props.messageArr[props.message]}
      </p>
    </div>
  );
}

export default Messages;
