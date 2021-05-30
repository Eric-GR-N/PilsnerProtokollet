import {PageContainer} from '../LandingPage/LandingPageElements';
import styled from 'styled-components';

export const RatingContainer = styled(PageContainer)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
background-image: none;
height: 200vh;
`

export const RatingMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
margin-top: 10vh;
`

export const Header = styled.h1`
color: white;
font-family: "Sigmar One", cursive;
font-size: 2rem;
margin-bottom: 5%;
`

export const Paragraph = styled.p`
text-align: center;
color: white;
font-family: "Sigmar One", cursive;
margin: 3% 0 3% 0;
`
export const BeerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
border: white solid 3px;
width: 200px;
height: 200px;
border-radius: 100%;
`
export const BeerSpan = styled.div`
position: absolute;
width:${props => (props.meter * 10)}%;
height: 100%;
background-color: ${props => props.color};
border-radius: 5px;
`

export const BeerParagraph = styled.p`
font-size: ${props => props.fontSize};
margin-top: ${props => props.margin};
width: 80%;
text-align: center;
color: white;
font-family: "Sigmar One", cursive;
position: absolute;
`
export const BeerMeter = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
position: relative;
width: 80%;
height: 2%;
border-radius: 5px;
border: solid 2px rgba(255, 255, 255, 0.6);
z-index: 10;
`

export const InputField = styled.input`
font-size: 1.2rem;
text-align: center;
cursor: pointer;
width: 60%;
color: white;
border: none;
border: solid 1px white;
border-radius: 10px;
outline: none;
-webkit-appearance: none;
background-color: transparent;
z-index: 10%;

&:focus {
    outline: none;
  }
`

export const Slider = styled.input`
font-size: 1.2rem;
text-align: center;
cursor: pointer;
height: 100%;
width: 100%;
color: white;
border: none;
outline: none;
-webkit-appearance: none;
background-color: transparent;
z-index: 10%;

&::-webkit-slider-thumb{
    cursor: pointer;
    height: 18px;
    width: 6%;
    appearance: none;
    border: none;
    border-radius: 50%;
    background: #03fc9d;
}



&::-moz-range-thumb {
    cursor: pointer;
    appearance: none;
    height: 100%;
    width: 6%;
    border-radius: 50%;
    border: 0;
    background: white;
  }


&:focus {
    outline: none;
  }
`

export const SliderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid rgba(255,255,255,0.5) 2px;
width: 80%;
height: 4%;
border-radius: 10px;
position: relative;
`

export const SliderSpan = styled.div`
height: 100%;
width: 100%;
background-color: green;
position: absolute;
`

export const Button = styled.button`
width:40%;
height: 7%;
margin-top: 3%;
color: white;
background-color: #03fc9d;
border-radius: 25px;
font-family: "Sigmar One", cursive;
border: none;
`

export const ResultContainer = styled.div`
background-color: black;
width: 100%;
height: 100vh;
`

export const ResultMenu = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
height: 80%;
`
