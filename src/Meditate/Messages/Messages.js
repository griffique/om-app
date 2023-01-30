import './Messages.css';

function Messages(props) {


  return (
    <div className="Messages">
      <p className="message">
        {props.message}
      </p>
    </div>
  );
}

export default Messages;
