import dayjs from 'dayjs';
import axios from 'axios'
import { priceFormat } from '../../utils/money';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Product from './Product';

export default function ProductsGrid({products,loadData}){



  return(<>
    <div className="products-grid">
{products.map((product) => (
  <Product key={product.id} product={product} loadData={loadData}/>
))}
        

        
      </div>
    </>)
}