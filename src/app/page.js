// MAIN LANDING PAGE
'use client';
import Link from 'next/link';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  function goToLogin() {
    router.push("/login");
  }

  return (
    <div className={styles.main}>
      <img src="./futpal-logo-text.png" alt="FutPal logo"></img>
      <div className={styles.startingTxT}>
        <p><span className={styles.startingWrd}>BECOME</span> a top class manager.</p>
        <p><span className={styles.startingWrd}>CREATE</span> your dream team.</p>
        <p><span className={styles.startingWrd}>CONQUER</span> the league.</p>
      </div>
      {/* Login button */}
      <button onClick={goToLogin} className={styles.actionBtn}>Play now</button>
      <div className={styles.info}>
        <h2 className={styles.special}>What's FUTPAL?</h2>
        <div className={styles.txtBoxMain}>
          <p>Ever dreamt of playing the perfect football management simulator?</p>
          <p>Where you don't have to worry about having to play 60 games per season?</p>
          <p>A game that lets you play a manager's career in your own terms?</p>
          <p>That game is FUTPAL!</p>
          <p>Sign up today and start exploring your football managing skills!</p>
        </div>
      </div>
      <div>
        <h2 className={styles.special}>What are FUTPAL's features?</h2>
        <div className={styles.infoSection}>
          <img src="./team-badge.png" alt="An image of a round team badget with yellow lines and a star."></img>
          <p>Create your own club or manage your favorite team in a competitive online league.
          Test your coaching skills in a custom league and play against the computer.
          </p>
        </div>
        <div className={styles.infoSection}>
          <p>Customize your team’s formations and playstyle. Bring the best out of your players and win the league.</p>
          <img src="./stadium.png" alt="An image of soccer tactics on a field"></img>
        </div>
        <div className={styles.infoSection}>
          <img src="./coin.png" alt="An image of the FutPal in-game currency"></img>
          <p>Play games and earn FutBux(Φ), FUTPAL's in-game currency. Use your FutBux to buy players and upgrade your club.</p>
        </div>
      </div>
      <h2 className={styles.special}>Join FUTPAL, your football pal!</h2>
      <button onClick={goToLogin} className={styles.actionBtn}>Play now</button>
      <footer className={styles.footer}>
        <h2 className={styles.special}>FUTPAL</h2>
        <p>Georgios Toufexis © Copyright 2024, All Rights Reserved</p>
      </footer>
    </div>
  );
}
