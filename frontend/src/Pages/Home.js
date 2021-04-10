import React from 'react';
import Slider from '../Components/Slider';
import CardList from '../Components/Cards/CardList'
import { Product } from './Product';
import cards from '../Components/Cards/Cards'

export const Home = () => {
    return (
    <>
    <Slider />
    <CardList />
    </>
    )
}