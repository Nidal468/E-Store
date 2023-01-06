import {useState, useEffect} from 'react';

import styles from './Nav.module.css';

export function Nav(){
	const [total, setTotal] = useState(0);
	const [menu, setMenu] = useState(false)
	const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
	function Hamburger() {
		setMenu(current =>! current);
	};
	
	return(
		<div>
		<nav className={styles.nav}>
			<div className={styles.first}>
				<div className={styles.logo}>
		<div className={menu? styles.close:""}>
			 <span onClick={Hamburger}  className={styles.hamburger}></span>
				 </div>
		<img src="/images/logo.png"/>
					<div className={styles.search}>
				<i className="fi fi-rr-search" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "none":"block"}}></i>
				<input type="text" placeholder="search" style={{"width":invisible? "100%":"0","opacity":invisible? "100%":"0"}} />
						<i className="fi fi-rr-angle-right" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "block":"none"}}></i>
					</div>
			</div>
				<ul>
					<li><a>Home</a></li>
					<li><a>Products</a></li>
					<li><a>Best Sellers</a></li>
					<li><a>Featured</a></li>
					<li><a>Customer Care</a></li>
					<li><a>New Releases</a></li>
					<li><a>Gift Cards</a></li>
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
			<Menu useState={menu}/>
		</div>
	)
};
export function Menu(props){

	const title1 = "Health & Beauty";
	const [title, setTitle] = useState(title1);
	const [position, setPosition] = useState("22px");
	function Option() {
		setPosition("22px");
		setTitle(title1);
	}
	function Option1() {
	  setPosition("90px");
		setTitle("Home & Lifestyle");
	}
	function Option2() {
	  setPosition("160px");
		setTitle("Sports & Outdoor");
						}
	function Option3() {
	  setPosition("230px");
		setTitle("Watch & Phone");
	}
	
	
	
	return(
		 <div className={props.useState? styles.menu_body:styles.block}>
			 
				 <div className={styles.menu}>
					 <i className="fi fi-rr-pharmacy" onClick={Option}></i>
					 <i className="fi fi-rr-home" onClick={Option1}></i>
					 <i class="fi fi-rr-volleyball" onClick={Option2}></i>
					 <i class="fi fi-rr-mobile-button" onClick={Option3}></i>
				 </div>
			 <div className={styles.list} style={{"top":position}}>
				 <p>{title}</p>
			 </div>
		 </div>
	)
}