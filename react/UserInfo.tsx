import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserPicture {
  thumbnail: string;
}

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserInfo {
  name: UserName;
  picture: UserPicture;
}

const fetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const getFullUserName = (userInfo: UserInfo) => {
  const {
    name: { first, last },
  } = userInfo;
  return `${first} ${last}`;
};

export const UserInfo = () => {
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      console.log(randomData);
      setUserInfos(randomData.results);
    });
  }, []);

  return (
    <div>
      {userInfos.map((userInfo, idx) => {
        return (
          <div key={idx}>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} alt="user-image" />
          </div>
        );
      })}
    </div>
  );
};
