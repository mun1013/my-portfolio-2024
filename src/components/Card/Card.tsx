import { ReactNode } from "react";
import "./card.css";

type CardType = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
};

const Card = ({ children, className, onClick }: CardType) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
