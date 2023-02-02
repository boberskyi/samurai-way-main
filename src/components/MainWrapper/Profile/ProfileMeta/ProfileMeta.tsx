import styled from "styled-components";

export const ProfileMeta = () => {
  return (
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
  )
}

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