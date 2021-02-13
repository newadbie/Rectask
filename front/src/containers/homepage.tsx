import {FC} from 'react';

import { useSelector } from 'react-redux'
import { GetProducts } from '../selectors';

const Homepage: FC = () => {
    const products = useSelector(GetProducts);
    
    return <><h1>STRONA GŁÓWNA</h1></>
}

export default Homepage;