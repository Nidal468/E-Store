import type { NextPage } from 'next'

import Head from 'next/head'
import products from '../products.json'; 

import Nav from './components/Nav/Nav.js';


import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E store</title>
        <meta name="description" content="Your Online store for your daily needs" />
      </Head>
			<Nav/>
      <main className={styles.main}>
				<div className={styles.hero}>
					<h2>Fortitude</h2>
					<p>Top quality products from all around the world</p>
				</div>
        <div className={styles.grid}>
  {products.map(product => {
    return (
      <div key={product.id} className={styles.card}>
				<img src={product.image} alt={`Preview of ${product.title}`} />
        <h3>{ product.title }</h3>
        <p>{ product.description }</p>
        <p>${ product.price }</p>
        <p>
          <button className="snipcart-add-item"
  data-item-id={product.id}
  data-item-image={product.image}
  data-item-name={product.title}
  data-item-price={product.price}
>
  Add to Cart
</button>
        </p>
      </div>
    );
  })}
</div>
      </main>
      <footer className={styles.footer}>
        <a>made by Fate</a>
      </footer>	
			
    </div>
  )
}

export default Home
