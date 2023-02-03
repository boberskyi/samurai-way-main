import styled from "styled-components";
import {MessagesPropsType} from "../../../../types";

export const Message = (props: MessagesPropsType) => {
  return (
    <StyledMessageBlock>
      <StyledFriendMessage>{props.message}</StyledFriendMessage>
    </StyledMessageBlock>
  )
}

const StyledMessageBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
const StyledFriendMessage = styled.div`
  background-color: rgba(13, 199, 245, .3);
  max-width: 50%;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 5px;
  font-size: 12px;
`
const StyledMyMessage = styled.div`
  
`