import React,{useState} from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Recommendations = ({recommendations}) => {
    const[endpoint,setEndpoint] =useState("day");

    const {data,loading} = useFetch(`/trending/movie/${endpoint}`)
    console.log(data);
    const onTabChange =(tab)=>{
        setEndpoint(tab === "Day" ? "day":"week");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Recommendations</span>
            
        </ContentWrapper>

        <Carousel data ={recommendations} loading={loading}/>
    </div>
  )
}

export default Recommendations