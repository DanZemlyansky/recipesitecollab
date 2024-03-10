import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../config/api';
import './ProfilePage.css';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user } = useContext(UserContext);
  const [ImgData, setImgData] = useState({});
  const navigate = useNavigate();

  const userId = user._id;

  const changeImgInfoHandler = (e) => {
    setImgData(e.target.files[0]);
  };
  console.log(ImgData);

  const handleFile = () => {
    const formData = new FormData();
    formData.append("profileIMG", ImgData);
    axios
      .post(`http://localhost:3000/api/v1/user/image/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFile();
  };

  return (
    <div>
      <img id='profileIMG' src={user.imageUrl} alt="" />
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
      <div>
        <form onSubmit={handleSubmit}> 
        <input
                type="file"
                onChange={changeImgInfoHandler}
              />
        <button>Upload Image</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
