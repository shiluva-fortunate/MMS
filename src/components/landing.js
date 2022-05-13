import { Routes, Route, Link } from "react-router-dom";
import { Text, Title } from "../styles/fonts";
import React, { Component } from "react";
import { HomeBtn } from "../styles/buttons";
import Upload from "./upload";
import View from "./view";
import "../App.css";
import {
  LandingBgConatiner,
  TopConatiner,
  MiddleContainer,
  BottomContainer,
  BgOverlay,
  LandingContent,
  BgImgConatiner,
  TitleConatiner,
  TextContainer,
  BtnConatiner,
} from "../styles/styles.js";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingBgConatiner>
          <TopConatiner></TopConatiner>
          <MiddleContainer></MiddleContainer>
          <BottomContainer></BottomContainer>
          <BgOverlay>
            <LandingContent right mobile>
              <BgImgConatiner></BgImgConatiner>
            </LandingContent>

            <LandingContent left>
              <BtnConatiner>
                <Link to="/view" className="link-btn-cont">
                  <HomeBtn>View Gallery</HomeBtn>
                </Link>
                <Link to="/capture">
                  <HomeBtn right>Upload Images</HomeBtn>
                </Link>
              </BtnConatiner>
              <TitleConatiner>
                <Title bigger>Online</Title>
                <Title>Filing System </Title>
              </TitleConatiner>

              <TextContainer>
                <Text>
                  Had we had a proper definition of what this system is and how
                  it works I most probably would have had a better explanation
                  to add here, nonetheless, this section is reserved for a brief
                  epxplanation of the app but sadly I am no writter so this
                  place holder text will have to do. I mean, I imagine it's far
                  much better than Lorem Ipsum. More random text which I'm only
                  incoporating to help make the text look fuller. More
                  unnecessary text, at this point I'm probably trying to nurse
                  my obsessive behavior.
                </Text>
              </TextContainer>
            </LandingContent>
          </BgOverlay>
        </LandingBgConatiner>

        <Routes>
          <Route path="capture" exact element={<Upload />} />
          <Route path="view" exact element={<View />} />
        </Routes>
      </div>
    );
  }
}

export default Landing;
