import css from "./ErrorMessage.module.css";

interface ErrorMessageText {
  message: string;
}
const ErrorMessage: React.FC<ErrorMessageText> = ({ message }) => {
  return (
    <div>
      <b className={css.error}>{message}</b>
    </div>
  );
}
export default ErrorMessage;