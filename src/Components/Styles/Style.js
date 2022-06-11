
import styled from "styled-components";

export const TopHeader = styled.header`
        background: #f1f1f0;
        color: azure;
        font-size: 1.2rem;
        padding: 0rem;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        height: 150px;
        display:flex;
        justify-content:space-around;
        align-items:center;
`;

export const Logo = styled.div`
        width:200px;
        padding-left:1rem;
        color: orange;
        img{
                width:100%;
                height:auto;
        }
`;
export const TopNavBar = styled.nav`
    padding: 0 1rem 0 0;
    color:purple;
    ul li {
      display: inline !important;
      padding: 0 0.71rem;

      a:link,
      a:visited {
        color: #541e64;
        padding: 0.5rem 0.5rem;
        text-decoration: none;
        font: normal 1.2rem $font-roboto;
      }
      a:hover {
        color: #ff0066 !important;
        padding: 0.5rem 0.5rem;
        text-decoration: none;
      }
      a.active:link {
        padding: 0.5rem 0.5rem;
        border-bottom: 1px solid #b10b5e;
      }
    }
`;

export const MainContainer = styled.section`
  background:${props => props.bg ? "#f2f2f5" : "white"};
        width: 90%;
        min-height: 25rem;
        margin: 7rem auto;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 2.5rem;
        font-size:1.2rem;
        text-align:center;
`;
export const Content = styled.div`
        min-height: 50vh;
        text-align: center ;
        color:olive;
        font-size:1.5rem;
        h1{
            font-size:2rem;
        }
`;