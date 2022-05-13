import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 425px)",
};

export const HomeBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #fff9f9;
  padding: 10px 0;
  border-radius: 40px;
  border: none;
  text-decoration: none;
  color: #914dc8;
  font-size: 16px;
  font-weight: 500;
  margin-left: ${(props) => (props.right ? "30%" : "0%")};
  margin-bottom: ${(props) => (props.btnm ? "15%" : "0")};

  &:hover {
    transform: ${(props) => (props.scale ? "scale(1.1)" : "unset")};
    transition: 0.55s ease-in-out;
    font-size: 18px;
  }

  ${media.mobile} {
    margin: auto;
    width: 120px;
  }
`;

export const PrimaryBtn = styled(HomeBtn)`
  background: transparent;
  color: #fff9f9;
  border: 2px solid #fff9f9;
  max-width: 120px;
  padding: 5px 0;
  font-size: 18px;
  border-radius: 30px;

  ${media.mobile} {
    width: 120px;
    font-size: 18px;
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  color: #914dc8;
  border: 2px solid #914dc8;
  background: transparent;
  max-width: unset;
  min-width: 160px;
  padding: 7px 0;
`;

export const BoldBtn = styled(SecondaryBtn)`
  color: #fff9f9;
  border: none;
  padding: 10px 0;
  font-weight: 500;
  font-size: 18px;
  background: linear-gradient(
    to right bottom,
    #914dc8,
    #a659c9,
    #b966ca,
    #c975cb,
    #d784ce
  );

  &:hover {
    background: linear-gradient(
      to left top,
      #914dc8,
      #a659c9,
      #b966ca,
      #c975cb,
      #d784ce
    );
    transform: scale(1.1);
    transition: 0.55s ease-in-out;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const CatSelector = styled.select`
  max-width: 200px;
  background-color: #fff9f9;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: #914dc8;
  font-size: 16px;
  font-weight: 500;
  margin-top: 89vh;
  padding: 10px;

  ${media.mobile} {
    margin-top: 45vh;
  }
`;
