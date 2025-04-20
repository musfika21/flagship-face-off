import React from 'react';
import Hero from '../../components/Hero/Hero';
import PhonesContainer from '../../components/phones-container/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const Phones = useLoaderData();
    // console.log(data)
    const handleSearch = ( e, text ) =>{
        e.preventDefault();
        console.log(text);
    }

    return (
        <>
            <Hero handleSearch = {handleSearch} />
            <PhonesContainer Phones = {Phones}/>
        </>
    );
};

export default Home;