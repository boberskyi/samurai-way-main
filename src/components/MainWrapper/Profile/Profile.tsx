import avatar from './ava.jpg';
import Icofont from "react-icofont";
import React from "react";
import styled from "styled-components";
import {Container} from "../MainWrapper";
import profileCover from "./profile-cover.jpg";
import roundShape from "./round_shape1.png";

export const Profile = () => {
  return (
      <ProfileS>
        <Container>
          <ProfileHeaderS>
            <ProfileImgS>
              <img src={avatar} alt="Avatar"/>
            </ProfileImgS>
            <ProfileStatS>
              <ProfileNameS>Bohdan Boberskyi</ProfileNameS>
              <ProfileSubtitleS>Rzeszów, Poland</ProfileSubtitleS>
              <ProfileSocialMetaS>
                <ProfileSocialS>
                  <ProfileSocialLinkS
                    href="#"
                    target="_blank"
                    style={{backgroundColor: "#365493"}}
                  >
                    <Icofont icon="facebook"/>
                  </ProfileSocialLinkS>
                  <ProfileSocialLinkS
                    href="#"
                    target="_blank"
                    style={{backgroundColor: "#38b8ff"}}
                  >
                    <Icofont icon="twitter"/>
                  </ProfileSocialLinkS>
                  <ProfileSocialLinkS
                    href="#"
                    target="_blank"
                    style={{backgroundColor: "#ec407a"}}
                  >
                    <Icofont icon="dribble"/>
                  </ProfileSocialLinkS>
                  <ProfileSocialLinkS
                    href="#"
                    target="_blank"
                    style={{backgroundColor: "#2962ff"}}
                  >
                    <Icofont icon="behance"/>
                  </ProfileSocialLinkS>
                  <ProfileSocialLinkS
                    href="#"
                    target="_blank"
                    style={{backgroundColor: "red"}}
                  >
                    <Icofont icon="brand-youtube"/>
                  </ProfileSocialLinkS>
                </ProfileSocialS>
                <ProfileMetaS>
                  <ProfileMetaInfoS>
                    Posts
                    <span> 4</span>
                  </ProfileMetaInfoS>
                  <ProfileMetaInfoS>
                    Comments:
                    <span> 12</span>
                  </ProfileMetaInfoS>
                  <ProfileMetaInfoS>
                    Views:
                    <span> 30 129</span>
                  </ProfileMetaInfoS>
                </ProfileMetaS>
              </ProfileSocialMetaS>
            </ProfileStatS>
          </ProfileHeaderS>
        </Container>
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
const ProfileSocialMetaS  = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProfileSocialS = styled.div`
  display: flex;
  gap: 5px;
`
const ProfileSocialLinkS = styled.a`
  text-align: center;
  font-size: 18px;
  color: #fff;
  height: 35px;
  width: 35px;
  line-height: 35px;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  &:hover {
    opacity: .8;
    transition: all .3s ease-in-out;
  }
`
const ProfileMetaS = styled.div`
  display: flex;
  gap: 25px;
`
const ProfileMetaInfoS = styled.div`
  color: #d7d7d7;
  font-size: 14px;
  span {
    font-weight: 500;
    color: #fff;
  }
`



