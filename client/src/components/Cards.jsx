import Card from './Card';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllCountry } from '../Redux/actions'
import styled from 'styled-components'


export default function Cards(props) {
   
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllCountry())
    }, [])

    const country = useSelector(state => state?.country)

   return <Cartas>
      {country?.map((e) => <Card
      key={e.id}
      id={e.id} 
      name={e.name} 
      capital={e.capital} 
      continent={e.continent} 
      image={e.image} />)}
      </Cartas>;
}

const Cartas = styled.div`
    width: 300px;
    height: 400px;
`
