import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { storage } from "../firebase.js";
import { ref, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";
import { HomeBtn, PrimaryBtn } from "../styles/buttons";
import "../App.css";
import "../styles/camera.css";
import {
  UploadContainer,
  UploadContent,
  UploadParentContainer,
  Option,
  Preview,
  ParentContainerBg,
} from "../styles/styles";
import { CatSelector } from "../styles/buttons";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUri: "",
      selectedCat: "",
    };
  }

  // ------------ stores image data
  handleTakePhotos = (dataUri) => {
    this.setState({ dataUri });
  };

  // ------------ uploads to firebase
  handleUploadPhotos = () => {
    // ------------ ensures category is selected
    if (!this.state.selectedCat) {
      alert("Please choose a category before taking a picture");
      return;
    }
    const imageBlob = this.dataURItoBlob(this.state.dataUri);
    const timestamp = new Date();
    const imageRef = ref(
      storage,
      `${this.state.selectedCat}/${timestamp.toISOString()}`
    );
    // ------------ actual upload
    uploadBytes(imageRef, imageBlob)
      .then(() => {
        alert("Image uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleRetakePhotos = () => {
    this.setState({ dataUri: "" });
  };

  handleSelectCat = (event) => {
    this.setState({ selectedCat: event.target.value });
  };

  dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mimeString });
    return blob;
  };

  render() {
    return (
      <div className="Upload">
        <ParentContainerBg>
          <UploadParentContainer>
            <UploadContainer>
              <Link to="/" className="btn-home">
                <HomeBtn>Back to Home</HomeBtn>
              </Link>
              <Link to="/view" className="btn-upload">
                <HomeBtn>View Gallery</HomeBtn>
              </Link>
              <UploadContent right pink>
                <CatSelector onChange={this.handleSelectCat}>
                  <Option value="">Select a category</Option>
                  <Option value="pond">Pond</Option>
                  <Option value="shaft">Shaft</Option>
                  <Option value="soil">Soil</Option>
                </CatSelector>
              </UploadContent>
              <UploadContent bigdiv>
                {!this.state.dataUri && (
                  <div>
                    <Camera
                      onTakePhoto={this.handleTakePhotos}
                      showFocus={true}
                      front={false}
                    />
                  </div>
                )}

                {this.state.dataUri && (
                  <div className="pop-up-conatiner">
                    <Preview src={this.state.dataUri} alt="image from camera" />
                    <div className="pop-up-btn-holder">
                      <PrimaryBtn
                        className="btn-manipulate"
                        onClick={this.handleRetakePhotos}
                      >
                        Recapture
                      </PrimaryBtn>
                      <PrimaryBtn
                        className="btn-manipulate"
                        onClick={this.handleUploadPhotos}
                      >
                        Upload
                      </PrimaryBtn>
                    </div>
                  </div>
                )}
              </UploadContent>
            </UploadContainer>
          </UploadParentContainer>
        </ParentContainerBg>
      </div>
    );
  }
}

export default Upload;
