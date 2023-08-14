import React from "react";

const Heading = (props) => {
  return <h1 className={
    `sm:text-base md:text-3xl lg:text-5xl xl:text-6xl font-black text-${props.color || 'black'} uppercase`
  }>{props.text}</h1>;
};

export default Heading;
