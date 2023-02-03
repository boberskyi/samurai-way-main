import avatar from './ava.jpg';
import React from "react";
import styled from "styled-components";
import {StyledContainer} from "../MainWrapper";
import profileCover from "./profile-cover.jpg";
import roundShape from "./round_shape1.png";
import {ProfileMeta} from "./ProfileMeta/ProfileMeta";
import {ProfileSocial} from "./ProfileSocial/ProfileSocial";

export const Profile = () => {
  return (
    <ProfileS>
      <StyledContainer>
        <ProfileHeaderS>
          <ProfileImgS>
            <img src={avatar} alt="Avatar"/>
          </ProfileImgS>
          <ProfileStatS>
            <ProfileNameS>Bohdan Boberskyi</ProfileNameS>
            <ProfileSubtitleS>Rzeszów, Poland</ProfileSubtitleS>
            <ProfileSocialMetaS>
              <ProfileSocial></ProfileSocial>
              <ProfileMeta></ProfileMeta>
            </ProfileSocialMetaS>
          </ProfileStatS>
        </ProfileHeaderS>
      </StyledContainer>
    </ProfileS>
  )
}

const ProfileS = styled.div`

`
const ProfileHeaderS = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 180px 35px 35px 50px;
  position: relative;
  margin-bottom: 30px;
  z-index: 0;
  background-image: url(${profileCover});
  display: flex;
  align-items: flex-end;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9), transparent);
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
const ProfileImgS = styled.div`
  position: relative;
  margin-right: 30px;
  border-radius: 50%;
  padding: 5px;
  display: inline-block;
  width: 125px;

  &:after {
    content: url(${roundShape});
    position: absolute;
    top: -4px;
    left: -4px;
  }

  img {
    border-radius: 50%;
    width: 125px;
    height: 125px;
  }
`
const ProfileStatS = styled.div`
  position: relative;
  width: 100%;
`
const ProfileNameS = styled.h2`
  display: flex;
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 2px;
  position: relative;
  color: #fff;
  text-transform: capitalize;
`
const ProfileSubtitleS = styled.p`
  font-size: 14px;
  max-width: 550px;
  line-height: 28px;
  color: #fff;
  margin-bottom: 10px;
`
const ProfileSocialMetaS = styled.div`
  display: flex;
  justify-content: space-between;
`