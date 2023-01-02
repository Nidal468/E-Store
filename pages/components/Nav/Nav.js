import {useState, useEffect} from 'react';

import styles from './Nav.module.css';

export default function Nav(){
	const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
	return(
		<nav className={styles.nav}>
			<div className={styles.first}>
				<div className={styles.logo}>
		<i className="fi fi-rr-menu-burger"></i>
		<img src="/images/eula.jpg"/>
				
			</div>
			<p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <span className="snipcart-total-price" style={{"padding-right":"10px"}}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </span>
						<i className="fi fi-rr-shopping-cart"></i>
          </a>
        </p>
			</div>
			<input type="text" placeholder="search"/>
			<div className={styles.second}>
				<ul>
					<li><a href="#">Deals</a></li>
					<li><a href="#">Featured</a></li>
					<li><a href="#">Best Sellers</a></li>
					<li><a href="#">Video</a></li>
					<li><a href="#">Books</a></li>
					<li><a href="#">Livestreams</a></li>
					<li><a href="#">New Releases</a></li>
					<li><a href="#">Home</a></li>
					<li><a href="#">Gift Cards</a></li>
				</ul>
			</div>        
		
		</nav>
	)
};