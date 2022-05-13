import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 425px)",
};

export const Title = styled.h1`
  text-transform: uppercase;
  color: #fff9f9;
  font-family: "Open Sans";
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  font-size: ${(props) => (props.bigger ? "3.5rem" : "3rem")};
`;

export const Text = styled.p`
  color: ${(props) => (props.dark ? "#3d2d75" : "#fff9f9")};
  font-family: "Open Sans";
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
`;

export const BodyText = styled(Text)`
  ${media.mobile} {
    font-size: 14px;
    position: absolute;
    top: 55vh;
    width: 96.5%;
  }
`;

export const ViewTitle = styled(Title)`
  background: linear-gradient(
    to right bottom,
    #914dc8,
    #a659c9,
    #b966ca,
    #c975cb,
    #d784ce
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
