import type { NextPage } from 'next'

import Head from 'next/head'

import products from '../products.json'; 
import list from '../data/list.json'; 
import recommended from '../data/recommended.json'; 

import {Nav} from './components/Nav/Nav.js';



import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	
  return (
    <div className={styles.container}>
      <Head>
        <title>E store</title>
        <meta name="description" content="Your Online store for your daily needs" />
      </Head>
      <main className={styles.main}>
				<Nav/>
				<div className={styles.hero}>
					<img src="images/001.png"/>
					<div className={styles.text}>
					<h1>Why Apple is the best place to buy iPhone.</h1>
					<p>You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
You can also chat with a Specialist anytime.</p>
					<a href="">sign up</a>
					</div>
					<div className={styles.box}>
						<ul>
							<li>
								<h4>Events</h4>
								<p style={{"color":"#EAEFF2"}} >Winter Special</p>
								<h4>SF-TUS,JANUARY 3/1-6 PM</h4>
							</li>
						<li>
								<p style={{"color":"#EAEFF2"}} >New Year Special</p>
								<h4>SF-TUS,JANUARY 1/1-6 PM</h4>
							</li>
						<li>
								<h4>News</h4>
								<p>The latest version of Iphone just got officially released yesterday</p>
						</li>
						</ul>
				</div>
				</div>
				<div className={styles.bar}>
					<h2>Winter Sale</h2>
					<div className={styles.bar_list}>
					<h4>On sale now</h4>
						<a>View more</a>
					</div>
				</div>
        <div className={styles.grid}>
  {products.map(product => {
    return (
      <div key={product.id} className={styles.card}>
				<img src={product.image} />
        <h3>{ product.title }</h3>
        <p>{ product.description }</p>
        <h5>${ product.price }</h5>
        <button className="snipcart-add-item"
  data-item-id={product.id}
  data-item-image={product.image}
  data-item-name={product.title}
  data-item-price={product.price}
>
  Add to Cart
</button>
      </div>
    );
  })}
</div>
				<div className={styles.bar}>
					<h2>Categories</h2>
					<div className={styles.bar_list}>
					<h4>Best of 2022</h4>
						<a>View more</a>
					</div>
				</div>
				<div className={styles.categories}>
					{list.map(list => {
			return(
				<div className={styles.categories_body}>	
					<img src={list.image} />
					<h3>{list.name}</h3>
				</div>
			);
					})}
				</div>
				<div className={styles.bar}>
					<h2>Categories</h2>
					<div className={styles.bar_list}>
					<h4>Best of 2022</h4>
						<a>View more</a>
					</div>
				</div>
				<div className={styles.grid}>
  {recommended.map(recommended => {
    return (
      <div key={recommended.id} className={styles.card}>
				<img src={recommended.image} />
        <h3>{ recommended.title }</h3>
        <p>{ recommended.description }</p>
        <h5>${ recommended.price }</h5>
        <button className="snipcart-add-item"
  data-item-id={recommended.id}
  data-item-image={recommended.image}
  data-item-name={recommended.title}
  data-item-price={recommended.price}
>
  Add to Cart
</button>
      </div>
    );
  })}
</div>
      </main>
			<footer className={styles.footer}><a>Build by Fate</a></footer>
    </div>
  )
}

export default Home
