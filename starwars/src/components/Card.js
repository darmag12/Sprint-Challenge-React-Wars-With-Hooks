import React from 'react'
import { HeaderH2, HeaderName, Border } from './Styles'


const Card = (props) => {
    return (
        <div>
            
            <HeaderName> {props.name}</HeaderName>
            <HeaderH2>Gender: {props.gender}</HeaderH2>
            <HeaderH2>Height: {props.height}</HeaderH2>
            <HeaderH2>Mass: {props.mass}</HeaderH2>
            <HeaderH2>Hair Color: {props.hairColor}</HeaderH2>
            <Border>-</Border>
            
            
        </div>
    )
}

export default Card;
