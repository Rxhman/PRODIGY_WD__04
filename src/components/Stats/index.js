import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0 150px; /* Increased padding top and bottom */
  @media (max-width: 960px) {
    padding: 40px 0 120px; /* Adjust padding for smaller screens */
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 25px;
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  padding: 15px 0;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function Stats() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Container id="stats">
      {/* <Wrapper>
        <Content>
          <Title>Stats</Title>
          <Desc>
            Track and visualize the dynamic performance metrics and engagement
            trends.
          </Desc>
        </Content>
        <div
          className="elfsight-app-aeceab1d-f74a-4646-97b5-020b78c76bb2"
          data-elfsight-app-lazy
        ></div>
      </Wrapper> */}
    </Container>
  );
}

export default Stats;
