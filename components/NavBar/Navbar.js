import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbar__logo}>Redux Shopping Cart</a>
      </Link>
      <Link href="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <Image
            className={styles.cart__image}
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="shopping cart"
            width={30}
            height={30}
          />
          <div className={styles.cart__counter}>0</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
