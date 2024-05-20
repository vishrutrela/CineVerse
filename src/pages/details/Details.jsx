import React from 'react'
import './style.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import SimilarMovies from './similarMovies/SimilarMovies'
import Recommendations from './recommendations/Recommendations'
const Details = () => {
  
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:similarData } = useFetch(`/${mediaType}/${id}/similar`);
  const { data:recommendations } = useFetch(`/${mediaType}/${id}/recommendations`);
  console.log("sssss");
  console.log(similarData);
  const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (

    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <SimilarMovies similarData={similarData?.results}/>
      <Recommendations recommendations={recommendations?.results}/>
    </div>
    
  )
}

export default Details