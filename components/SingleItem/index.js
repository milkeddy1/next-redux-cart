import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SingleItem.module.css";

const SingleItem = ({ data }) => {
  return (
    <div className={styles.product}>
      <Image
        className={styles.product__image}
        src={data.image}
        alt={data.title}
        width={300}
        height={300}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{data.title}</p>
        <p className={styles.details__desc}>{data.description}</p>
        <p className={styles.details__price}>$ {data.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link href={`/product/${data.id}`}>
          <button
            // onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          //   onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
