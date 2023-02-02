import {NavLink} from "react-router-dom";
import {DialogItmPropsType} from "../Dialogs";
import styled from "styled-components";
import roundShape1 from "./chat_round_shape.png"
import roundShape2 from "./chat_round_shape2.png"

export const DialogItm = (props: DialogItmPropsType) => {
  let linkTo = `/dialogs/${props.id}`;

  return (
    <DialogLink to={linkTo}>
      <MemberAvatar>
        <img src={props.ava} alt={props.name}/>
      </MemberAvatar>
      <MemberDescript>
        <DescriptName>{props.name}</DescriptName>
        <DescriptLastVisit>{props.online}</DescriptLastVisit>
      </MemberDescript>
    </DialogLink>
  )
}

const MemberAvatar = styled.span`
  position: relative;
  margin-right: 25px;
  margin-left: 20px;

  &:after {
    content: url(${roundShape2});
    position: absolute;
    top: -7px;
    left: -7px;
    transform: rotate(30deg);
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  &:before {
    content: url(${roundShape1});
    position: absolute;
    top: -7px;
    left: -7px;
    transition: all .3s ease-in-out;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`

const DialogLink = styled(NavLink)`
  width: 100%;
  padding: 15px 0;
  margin-top: 3px;
  overflow: visible;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  display: flex;

  &:hover ${MemberAvatar}:after {
    transform: rotate(0);
    visibility: visible;
    opacity: 1;
  }

  &.active {
    background: rgba(45, 91, 27, .2);
  }
`

const MemberDescript = styled.span`
  display: flex;
  flex-direction: column;
`
const DescriptName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  position: relative;
  color: #000;
  text-transform: capitalize;
`
const DescriptLastVisit = styled.span`
  font-size: 14px;
  color: #9e9faf;
  line-height: 1.5;
`