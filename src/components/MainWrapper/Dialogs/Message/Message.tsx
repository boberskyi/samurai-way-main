import styled from "styled-components";
import {MessagesPropsType} from "../../../../types";

export const Message = (props: MessagesPropsType) => {
  return (
    <StyledMessageBlock>{props.message}</StyledMessageBlock>
  )
}

const StyledMessageBlock = styled.div`
  
`