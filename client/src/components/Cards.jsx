/* TODO import Card from './Card';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllCountry } from '../Redux/actions'
import styled from 'styled-components'


export default function Cards() {
   
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllCountry())
    }, [])

    const allCountry = useSelector(state => state?.allCountry)

   return <Cartas>
      {allCountry?.map((e) => <Card
      key={e.id} 
      name={e.name}
      continent={e.continent} 
      image={e.image} />)}
      </Cartas>;
}

const Cartas = styled.div`
    width: 300px;
    height: 400px;
` */
