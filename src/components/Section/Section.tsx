import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  id: string;
  setActiveSection: (id: string) => void;
  children: ReactNode;
};

const Section = ({ id, setActiveSection, children }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("#" + id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  );
};

export default Section;
