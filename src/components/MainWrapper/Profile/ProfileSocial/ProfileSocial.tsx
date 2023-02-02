import Icofont from "react-icofont";
import styled from "styled-components";

export const ProfileSocial = () => {
  return (
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
  )
}

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