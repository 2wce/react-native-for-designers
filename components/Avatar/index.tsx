import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Image } from "./styles";
import { IMAGE_URL, API_KEY } from "../../constants";

const mapStateToProps = (state: any) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateName: (name: string) =>
      dispatch({
        type: "UPDATE_NAME",
        name,
      }),
  };
};

const Avatar = ({ updateName }: any) => {
  const [photo, setPhoto] = useState(
    "https://p77.f0.n0.cdn.getcloudapp.com/items/NQur1lEq/avatar-default.jpg"
  );

  useEffect(() => {
    fetch(IMAGE_URL, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then(([response]) => {
        setPhoto(response.photo);
        updateName(response.name);
      });
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
