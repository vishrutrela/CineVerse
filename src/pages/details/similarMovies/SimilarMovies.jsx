import React,{useState} from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const SimilarMovies = ({similarData}) => {
    const[endpoint,setEndpoint] =useState("day");

    const {data,loading} = useFetch(`/trending/movie/${endpoint}`)
    console.log(data);
    const onTabChange =(tab)=>{
        setEndpoint(tab === "Day" ? "day":"week");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Similar movies</span>
            
        </ContentWrapper>

        <Carousel data ={similarData} loading={loading}/>
    </div>
  )
}

export default SimilarMovies