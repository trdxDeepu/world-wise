/* eslint-disable react/no-unescaped-entities */
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="src/assets/img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWide is a leading travel and adventure company dedicated to
            helping individuals and groups explore and experience the wonders of
            the world. With a mission to make global travel accessible and
            memorable for everyone, WorldWide offers a range of services,
            resources, and experiences that cater to the wanderlust of modern
            explorers.
          </p>
          <p>
            At WorldWide, we envision a world where every person has the
            opportunity to discover the beauty, diversity, and richness of our
            planet. We believe that travel fosters cultural understanding,
            personal growth, and lifelong memories, and we're committed to
            making those opportunities available to all.
          </p>
        </div>
      </section>
    </main>
  );
}
