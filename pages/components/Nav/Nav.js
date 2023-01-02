import {useState, useEffect} from 'react';

import styles from './Nav.module.css';

export default function Nav(){
	const [total, setTotal] = useState(0);
	const [invisible, setInvisible] = useState(false);
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
					<div className={styles.search}>
				<i className="fi fi-rr-search" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "none":"block"}}></i>
				<input type="text" placeholder="search" style={{"width":invisible? "100%":"0","opacity":invisible? "100%":"0"}} />
						<i className="fi fi-rr-angle-right" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "block":"none"}}></i>
					</div>
			</div>
				<ul>
					<li><a>Home</a></li>
					<li><a>Products</a></li>
					<li><a>About</a></li>
					<li><a>Featured</a></li>
				</ul>
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
		</nav>
	)
};