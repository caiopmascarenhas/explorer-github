import styled from 'styled-components';


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    display:flex;
    align-items: center;
    text-decoration:none;
    color:#A8A8B3;
    transition: color 0.2s;
    &:hover{
      color:#666;
    }
    svg{
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top:80px;

  header {
      display:  flex;
      align-items:  center;

      @media (max-width: 700px) {
        flex-direction:column;
     }

      img {
        width:  120px;
        height: 120px;
        border-radius: 50%;

         @media (max-width: 700px) {
           margin-bottom: 30px;
        }
      };

      div {
        margin-left: 24px;

        @media (max-width: 700px) {
          margin-left:0;
        }

      strong  {
        font-size: 36px;
        color: #3D3D4D;
        @media (max-width: 700px) {
          font-size: 20px;
          width:100%;
        }
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        margin-bottom: 10px;
        @media (max-width: 700px) {
          font-size:16px;
        }
      }
      a {
        color: #737380;
        text-decoration:none;
        color:#A8A8B3;
        transition: color 0.2s;
        &:hover{
          color:#737380;
        }
      }
    }
  }

  ul {
      display: flex;
      list-style: none;
      margin-top: 40px;
      @media (max-width: 700px) {
        justify-content:center
      }

    li {
      & + li {
        margin-left: 50px;
        
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
        text-align:center;

        @media (max-width: 700px) {
          font-size:20px;
        }
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6C6C80;
        text-align:center;
      }
    }
  }

`;

export const Issues = styled.div`
  margin-top: 80px;
  a{
    background: #FFF;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    @media (max-width: 700px) {
      padding: 22px;
      text-align:left;
    }
    
    & + a {
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
    }
  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  div{
    margin: 0 16px;
    flex:1;
    strong{
      font-size: 20px;
      color: #3D3D4D;
      word-break: break-all;
      text-align:justify;

      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
    p{
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px;
      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
  }
  svg{
      margin-left: auto;
      color: #CBCBD6
    }
  }
`;

export const Loading = styled.p`
    text-align:center;
    font-size: 20px;
    color: #3D3D4D;
    margin-top: 60px;
`;



