import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { storage } from "../firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { HomeBtn, PrimaryBtn, SecondaryBtn, BoldBtn } from "../styles/buttons";
import { Text, Title, ViewTitle, BodyText } from "../styles/fonts";
import {
  ViewContainer,
  ViewContentContainer,
  SideNavigation,
  ImageDisplayConatiner,
  GalleryImg,
  ViewTitleHolder,
  TitleLine,
  TextContainer,
} from "../styles/styles";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
    };
  }

  componentDidMount() {
    const allcatsRef = ref(storage, "/");

    listAll(allcatsRef).then((response) => {
      console.log({ response });
      response.prefixes.slice(0, 2).forEach((prefix) => {
        console.log(prefix._location.path);

        const allImagesRef = ref(storage, `${prefix._location.path}/`);

        listAll(allImagesRef).then((res) => {
          res.items.slice(0, 2).forEach((item) => {
            console.log(item);
            getDownloadURL(item).then((url) => {
              this.setState({
                imageList: [
                  ...this.state.imageList,
                  { url, timestamp: item._location.path.split("/")[1] },
                ],
              });
            });
          });
        });
      });
    });
  }

  handleTabs(path) {
    const btnImageRef = ref(storage, `${path}`);
    this.setState({ imageList: [] });
    listAll(btnImageRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          this.setState({
            imageList: [
              ...this.state.imageList,
              { url, timestamp: item._location.path.split("/")[1] },
            ],
          });
        });
      });
    });
  }

  render() {
    console.log(this.state.imageList);
    return (
      <div className="View">
        <ViewContentContainer>
          <SideNavigation>
            <HomeBtn
              onClick={() => {
                this.handleTabs("pond/");
              }}
              btnm
              scale
            >
              Pond
            </HomeBtn>
            <HomeBtn
              onClick={() => {
                this.handleTabs("shaft/");
              }}
              btnm
              scale
            >
              Shaft
            </HomeBtn>
            <HomeBtn
              onClick={() => {
                this.handleTabs("soil/");
              }}
              scale
            >
              Soil
            </HomeBtn>
          </SideNavigation>

          <ViewContainer>
            <Link to="/" className="btn-home">
              <BoldBtn>Back to Home</BoldBtn>
            </Link>

            <Link to="/capture" className="btn-upload">
              <BoldBtn right>Upload Images</BoldBtn>
            </Link>

            <ViewTitleHolder>
              <ViewTitle bigger>Gallery</ViewTitle>
              <TitleLine></TitleLine>
            </ViewTitleHolder>
            <TextContainer wider auto>
              <BodyText dark>
                This is dummy text which represents a description which would
                explain why we are inspecting the images. As in the given
                example with the pond, we would most probably want to know how
                it responds to some chemicals, this would then be that
                description. Additional random text you probably shouldn't be
                reading.
              </BodyText>
            </TextContainer>
            <ImageDisplayConatiner>
              {this.state.imageList
                .sort((x, y) => {
                  return new Date(y.timestamp) - new Date(x.timestamp);
                })
                .map((image, index) => {
                  return <GalleryImg src={image.url} alt=" " key={index} />;
                })}
            </ImageDisplayConatiner>
          </ViewContainer>
        </ViewContentContainer>
      </div>
    );
  }
}

export default View;
