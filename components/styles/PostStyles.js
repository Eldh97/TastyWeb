import styled from "styled-components";
import Link from "../Link";
import { getBackground, getColor } from "../../utils/iconConfig";
import { log } from "util";
const PostStyles = styled.a`
  /* width:50%; */
  display: inline-block;
  /* border: 0.2rem solid ${props => props.theme.primaryColor}; */
  background-color: #1d1d1d;
  /* width: 100%; */
  height:16rem;;
  text-transform:capitalize;
  position: relative;
  
  & > * {
    /* border: 1px solid red; */
  }
  /* Giometric shape at the left  */
  div {
    position: absolute;
    top:0;
    left:-.1rem;
    background-color: ${props => getColor(props.heading)};
    width:22%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 28% 100%, 0% 100%);
  }

  .heading {
    /* border:1px solid red; */
    margin-left:60%;
    transform:translate(-50%, -0%);
    display:inline-block;
    width:74%;
    height:100%;
    text-align:left;
    clip-path:none;
    display:flex;
    align-items:center;
    background-color: #1d1d1d;
    padding-left:3rem;
    
  }

  h3 {
    font-size:2.2rem;
    font-weight:400;
    /* margin-top:50%; */
  }
  color: ${props => props.theme.white};
  text-decoration: none;
`;
export default PostStyles;
