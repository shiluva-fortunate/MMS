import styled from "styled-components";
import img from "../images/home.png";
import backImg from "../images/bg.jpg";

const media = {
  mobile: "@media(max-width: 425px)",
};

// -------------------------------------- Home page ---------------------------------------

export const LandingBgConatiner = styled.div`
  width: 100%;
  margin-top: 0;

  ${media.mobile} {
    height: 100vh;
    margin-top: 0;
    overflow: hidden;
  }
`;

export const TopConatiner = styled.div`
  height: 60vh;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #8749c7,
    #a559c8,
    #be6aca,
    #d47ecd,
    #e693d2
  );
  transform: skewY(6deg);
  margin-top: -6%;
  z-index: 20;
  position: absolute;

  ${media.mobile} {
    margin-top: -10%;
  }
`;

export const MiddleContainer = styled.div`
  height: 63vh;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #934eca,
    #a85aca,
    #ba67cb,
    #c975cc,
    #d784ce
  );
  transform: skewY(-7deg);
  z-index: 19;
  position: absolute;
  margin-top: 15%;

  ${media.mobile} {
    margin-top: 80%;
  }
`;

export const BottomContainer = styled.div`
  height: 25vh;
  width: 100%;
  background-color: #933dd9;
  transform: skewY(10deg);
  position: absolute;
  bottom: 14%;
  z-index: 18;

  ${media.mobile} {
    display: none;
  }
`;

export const BgOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 22;
  display: flex;

  ${media.mobile} {
    display: block;
  }
`;

export const LandingContent = styled.div`
  width: ${(props) => (props.right ? "65%" : "45%")};
  height: inherit;

  ${media.mobile} {
    width: ${(props) => (props.mobile ? "0" : "100%")};
    width: 94%;
    padding: 3%;
    position: absolute;
    top: 0;
  }
`;

export const BgImgConatiner = styled.div`
  width: 85%;
  height: 70%;
  margin-top: 17%;
  margin-left: 5%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.78;

  ${media.mobile} {
    width: 75%;
    margin: auto;
    margin-top: 20%;
  }
`;

export const TextContainer = styled.div`
  width: ${(props) => (props.wider ? "93%" : "80%")};
  margin: ${(props) => (props.auto ? "auto" : "0%")};
  margin-top: 10%;
  text-align: justify;

  ${media.mobile} {
    width: 96%;
    padding: 0 2%;
  }
`;

export const TitleConatiner = styled.div`
  width: 80%;
  margin-top: 10%;
  text-align: left;

  ${media.mobile} {
    width: 100%;
    margin-top: 60%;
  }
`;

export const BtnConatiner = styled.div`
  width: 80%;
  margin-top: 10%;
  display: flex;

  ${media.mobile} {
    width: 100%;
    margin-top: 2%;
    display: flex;
    justify-content: space-around;
  }
`;

// -------------------------------------- Uplad page -----------------------------------------

export const UploadContainer = styled(BgOverlay)`
  width: 100%;
`;

export const ParentContainerBg = styled.div`
  width: 100%;
  z-index: 0;
  height: 100vh;
  background: url(${backImg});
  background-size: cover;

  ${media.mobile} {
    position: absolute;
    top: 0;
    overflow: hidden;
  }
`;

export const UploadParentContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  opacity: 0.95;
  background-image: linear-gradient(
    to left,
    #914dc8,
    #a659c9,
    #b966ca,
    #c975cb,
    #d784ce
  );

  ${media.mobile} {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
  }
`;

export const UploadContent = styled.div`
  width: ${(props) => (props.bigdiv ? "70%" : "30%")};
  text-align: ${(props) => (props.right ? "right" : "unset")};

  ${media.mobile} {
    position: absolute;
    display: block;
    top: 10%;
    width: 100%;
    height: 35vh;
    transform: translateY(45%);
    text-align: ${(props) => (props.right ? "center" : "unset")};
  }
`;

export const HeaderNav = styled.div`
  padding: 20px 50px;
  text-align: right;
`;

export const Option = styled.option`
  font-size: 15px;
  font-weight: 400;
`;

export const Preview = styled.img`
  width: 450px;
  height: 330px;
  margin: auto;
  transform: translate(30%, 30%);

  ${media.mobile} {
    width: 270px;
    height: 200px;
    transform: translate(23%, 10%);
    border-radius: 20px;
  }
`;

// -------------------------------------- View page -----------------------------------------

export const ViewContentContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #fff9f9;
  overflow-y: hidden;

  ${media.mobile} {
    height: 100vh;
    display: block;
    position: absolute;
    top: 0;
  }
`;

export const SideNavigation = styled.div`
  width: 20%;
  height: 70vh;
  display: block;
  background: linear-gradient(
    to right,
    #914dc8,
    #a659c9,
    #b966ca,
    #c975cb,
    #d784ce
  );
  padding: 22% 20px 0 50px;

  ${media.mobile} {
    width: 90%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    padding: 0;
    position: absolute;
    top: 15vh;
    padding: 0 5%;
  }
`;

export const ViewContainer = styled.div`
  width: 80%;
  display: block;

  ${media.mobile} {
    width: 100%;
  }
`;

export const ViewTitleHolder = styled.div`
  width: 100%;
  padding-top: 8%;
  text-align: center;
  background-color: #fff9f9;

  ${media.mobile} {
    padding-top: 8%;
    position: absolute;
    top: 35vh;
  }
`;

export const TitleLine = styled.hr`
  width: 110px;
  height: 8px;
  border: none;
  margin-top: -5px;
  border-radius: 20px;
  background: linear-gradient(
    to right bottom,
    #914dc8,
    #a659c9,
    #b966ca,
    #c975cb,
    #d784ce
  );
`;

export const ImageDisplayConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  padding: 20px 0px;
  margin-top: 3%;

  ${media.mobile} {
    width: 100%;
    position: absolute;
    top: 70vh;
  }
`;

export const GalleryImg = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 20px;
  margin-left: 2%;
  border: 3px solid;
  border-color: #d784ce;

  ${media.mobile} {
    width: 250px;
    height: 150px;
    border-radius: 20px;
    margin-left: 2%;
  }
`;
