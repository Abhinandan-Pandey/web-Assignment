import React, { useRef, useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { storage } from "../../Utility/firebase";
import * as actions from "../../Store/actions/storeActions";
import classes from "../css/imageUpload.module.css";

const ImageUpload = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  // const [progress, setProgress] = useState(0);
  const [file, setFile] = useState();
  const { storePicUrl } = props;
  const filePickerRef = useRef();
  // console.log(previewUrl);
  // console.log(progress)
  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };

  const pickImageHandler = (e) => {
    e.preventDefault();
    filePickerRef.current.click();
  };

  const uploadHandler = useCallback(() => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            const imageUrl = url;
            console.log(imageUrl, "dddd");
            storePicUrl(imageUrl);
          });
      }
    );
  }, [storePicUrl, file]);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    uploadHandler();
  }, [file, uploadHandler]);

  return (
    <>
      <div className={classes.image}>
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <input
          id={props.id}
          ref={filePickerRef}
          style={{ display: "none" }}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}
        />
      </div>
      <button className="img-button" onClick={pickImageHandler}>
        Upload Store Pic
      </button>
    </>
  );
};

// const mapStateToProps=(state)=>{
//   return{

//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    storePicUrl: (imageUrl) => dispatch(actions.setImageUrl(imageUrl)),
  };
};

export default connect(null, mapDispatchToProps)(ImageUpload);
