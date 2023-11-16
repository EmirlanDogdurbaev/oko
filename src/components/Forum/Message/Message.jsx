import classes from "./Message.module.scss";
import avatar from "../../../assets/react.svg";
const Message = () => {
  return (
    <div className={classes.messages}>
      <h3>title</h3>
      <article>
        <img src={avatar} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </article>
    </div>
  );
};

export default Message;
