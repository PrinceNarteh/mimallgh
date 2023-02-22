import React from "react";
import SectionHeader from "../components/layout/SectionHeader";

interface ISection {
  label: string;
  children: React.ReactNode;
}

const Section = ({ label, children }: ISection) => {
  return (
    <section className="mx-auto mb-10 w-11/12 py-7">
      {label && <SectionHeader label={label} />}
      <div className="mt-5 flex flex-wrap justify-evenly">{children}</div>
    </section>
  );
};

export default Section;
