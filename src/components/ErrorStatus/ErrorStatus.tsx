import { VscError } from "react-icons/vsc";
import "./error-status.css";

type ErrorStatusType = {
  message?: string;
};

const ErrorStatus = ({ message }: ErrorStatusType) => {
  return (
    <div className="error__icon">
      <VscError />
      <h5>{message}</h5>
      <h5>Please try again later.</h5>
    </div>
  );
};

export default ErrorStatus;
