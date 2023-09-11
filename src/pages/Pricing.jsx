/* eslint-disable react/no-unescaped-entities */
// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
          Embarking on a world tour is a dream for many, and at our travel company, we want to make this dream a reality for you. We believe in making your world tour planning and booking as simple as possible, and that's why we offer a straightforward pricing model at just $9 a month..
          </p>
        </div>
        <img
          src="src/assets/img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
