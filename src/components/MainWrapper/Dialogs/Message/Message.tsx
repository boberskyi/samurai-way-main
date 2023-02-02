import {MyMessagePropType} from "../Dialogs";
import styled from "styled-components";

export const Message = (props: MyMessagePropType) => {
  return (
    <MessageBlock>{props.msg}</MessageBlock>
  )
}

const MessageBlock = styled.div`
  
`