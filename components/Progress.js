import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styling the Progress Bar
const ProgressStyles = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    ${props => props.theme.primaryColor} ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 8px;
  z-index: 3;
  top: 0;
  left: 0;
`;

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    listenToScrollEvent();
  });

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance();
      });
    });
  };

  // Calculate the docuemnt height
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();
    console.log(windowHeight, docHeight);

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    console.log(scrollTop / totalDocScrollLength);

    setProgress(scrollPostion);
  };
  return <ProgressStyles scroll={progress + "%"} />;
};

export default Progress;
