import React from 'react'
import Products from '/public/products.json'
import Card from '../Card/Card'
import s from './Category.module.scss'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <>
 <section className={s.Category}>
<div className='container'>

<div className={s.wrapper}>

{Products.slice(0, 4).map(card=> (
  <Link key={card.id} to={`/product/${card.id}`} className={s.link}>
   <Card  image={card.image} name={card.name} price={card.price} />
  </Link>
) )}

</div>
</div>
 </section>
    </>
  )
}

export default Category