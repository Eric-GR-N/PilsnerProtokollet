import React, { useState, useEffect } from 'react'
import {Header, Button, Paragraph,InputField ,BeerParagraph, BeerMeter, BeerContainer, BeerSpan, RatingContainer, RatingMenu, ResultMenu,Slider, SliderContainer,  SliderSpan, ResultContainer} from './RatingSectionElements';
import Axios from 'axios';



const RatingSection = () => {
    const [price, setPrice] = useState(0);
    const [taste, setTaste] = useState(0);
    const [bottle, setBottle] = useState(0);
    const [hipster, setHipster] = useState(0);
    const [drink, setDrink] = useState(0);
    const [beer, setBeer] = useState('');
    const [beerList, setBeerList] = useState([]);

    useEffect(()=>{
        console.log('Setting default values from DB');
        getData();
    }, [])

    useEffect(()=>{
        console.log('USE IS RUNNING FOR RENDERING');
        renderResult();
    }, [beerList])

    const getData = async () =>{
        console.log('Get Data is running');
        const response = await Axios.get('http://localhost:4000/rating');
        setBeerList(response.data);
    }

    const postData = ()=>{
        const rating = (parseInt(price) + parseInt(taste) + parseInt(bottle) + parseInt(hipster) +parseInt(drink))/5;
        Axios.post("http://localhost:4000/beer", {
        beer: beer,
        price: price,
        taste: taste,
        bottle: bottle,
        hipster: hipster,
        drink: drink,
        favourite: rating
    }).then((response)=>{
        getData();
    })

    //fetches the new updated beerList
    
    }

    const handleInput = (e) =>{
        if(e.target.name === 'price'){
            setPrice(e.target.value);
        }else if(e.target.name === 'taste'){
            setTaste(e.target.value);
        }else if(e.target.name === 'bottle'){
            setBottle(e.target.value);
        }else if(e.target.name === 'hipster'){
            setHipster(e.target.value);
        }else if(e.target.name === 'drink'){
            setDrink(e.target.value);
        }else if(e.target.name === 'beer'){
            setBeer(e.target.value);
        }
    }


    const handleClick = ()=>{
      postData();
    }

    const renderResult = () => {
        console.log('RENDER IS RUNNING');
        let bestBeer = [];

        if(beerList[0]){

            bestBeer = beerList.length > 1 ? beerList.reduce((prev, current)=>{
                        return (prev.total > current.total) ? [prev] : [current];
                        })
                        : beerList;

            return bestBeer.map(obj=>{
                return (
                    <ResultMenu>
                    <Header>Resultat</Header>
                    <BeerContainer>
                        <BeerParagraph fontSize="8vw" margin="0">{obj.beer}</BeerParagraph>
                        <BeerParagraph fontSize="6vw" margin="40%">{obj.total}</BeerParagraph>
                    </BeerContainer>
                    <Paragraph>Prisvärd</Paragraph>
                    <BeerMeter>
                        <BeerSpan meter={obj.price} color="#03fc9d"/>
                    </BeerMeter>
                    <Paragraph>Smak</Paragraph>
                    <BeerMeter>
                        <BeerSpan meter={obj.taste} color="#03fc9d"/>
                    </BeerMeter>
                    <Paragraph>Snygg Flaska</Paragraph>
                    <BeerMeter>
                        <BeerSpan meter={obj.bottle} color="#03fc9d"/>
                    </BeerMeter>
                    <Paragraph>Icke Hipsterfaktor</Paragraph>
                    <BeerMeter>
                        <BeerSpan meter={obj.hipster} color="#03fc9d"/>
                    </BeerMeter>
                    <Paragraph>Drinkability</Paragraph>
                    <BeerMeter>
                        <BeerSpan meter={obj.drink} color="#03fc9d"/>
                    </BeerMeter>
                    </ResultMenu>
                )
            })
        }
    }


    return (
        <RatingContainer id="rating">
        <RatingMenu>
            <Header>Betygsätt!</Header>
            <Paragraph>ÖLMÄRKE</Paragraph>
                <InputField type="text" name="beer" onChange={e => handleInput(e)}/>
            <Paragraph>Prisvärd</Paragraph>
            <SliderContainer>
                <Slider type="range"  name="price" min="0" max="10" onChange={e => handleInput(e)}/>
            </SliderContainer>
            <Paragraph>Smak</Paragraph>
            <SliderContainer>
                <Slider type="range" name="taste" min="0" max="10" onChange={e => handleInput(e)}/>
            </SliderContainer>
            <Paragraph>Flaskmysfaktor</Paragraph>
            <SliderContainer>
                <Slider type="range" name="bottle" min="0" max="10" onChange={e => handleInput(e)}/>
            </SliderContainer>
            <Paragraph>Icke Hipsterfaktor</Paragraph>
            <SliderContainer>
                <Slider type="range" name="hipster" min="0" max="10" onChange={e => handleInput(e)}/>
            </SliderContainer>
            <Paragraph>Drinkability</Paragraph>
            <SliderContainer>
                <Slider type="range" name="drink" min="0" max="10" onChange={e => handleInput(e)}/>
            </SliderContainer>
            <Button onClick={handleClick}>Kör Fan!</Button>
        </RatingMenu>
        <ResultContainer id="result">
        {renderResult()}
        </ResultContainer>
        </RatingContainer>
    )
}

export default RatingSection
