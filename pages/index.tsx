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
					<img src=""/>
					<div className={styles.text}>
					<h1>Fortitude</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis at augue ut sagittis. Praesent fermentum pharetra odio, eu viverra ex tempus sed. Maecenas quis auctor est. Integer facilisis nec turpis a venenatis. Ut lacinia blandit pretium. Sed blandit magna urna, in suscipit nisl convallis et. Pellentesque quis tellus nec dolor interdum suscipit bibendum nec eros.</p>
					<a href="">sign up</a>
					</div>
					<div className={styles.box}>
						<ul>
							<li>
								<h4>Events</h4>
								<p>Follow this link to confirm</p>
						</li>
						<li>
								<h4>Events</h4>
								<p>Follow this link to confirm</p>
						</li>
						<li>
								<h4>Events</h4>
								<p>Follow this link to confirm</p>
						</li>
						</ul>
				</div>
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
