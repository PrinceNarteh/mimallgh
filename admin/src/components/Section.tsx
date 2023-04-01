import React from "react";

interface ISection {
  label: string;
  children: React.ReactNode;
}

const Section = ({ label, children }: ISection) => {
  return (
    <section className="mx-auto mb-10 w-11/12 py-7">
      <div className="mt-5 flex flex-wrap justify-evenly">{children}</div>
    </section>
  );
};

export default Section;
