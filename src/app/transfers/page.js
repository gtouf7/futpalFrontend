'use client';
import styles from './transfers.module.css';
import Header from '../components/Header';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function Transfers() {
    const { user, loading, refresh, setUser } = useContext(UserContext);
    
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const playerList = async () => {
            try {
                const response = await fetch(`/api/getPlayers`);
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error('Error getting players:', error);
            }
        };
        playerList();
        
    }, []);

    const freeAgents = players.filter(player => player.team === null);
    return user ? (
        <div className={styles.main}>
            <Header />
            <h2>Transfers</h2>
            <div className={styles.currency}>
                <p>FutBux Balance: </p>
                <img src="./futCoin.png" alt="in-game currency image" />
                <span>{user.coins}</span>
            </div>
            <div className={styles.playersList}>
            {freeAgents.length > 0 ? (
                freeAgents.map((player, index) => (
                    <div key={index} className={styles.playerCard}>
                        <h3>{player.Fname} {player.Lname}</h3>
                        <p>Position: {player.position}{player.positionSec ? `/${player.positionSec}` : ''}</p>
                        <p>Price: {player.price}</p>
                        <button className={styles.buyButton}>Buy</button>
                    </div>
                ))
            ) : (
            <p>No available free agents. Check again later.</p>
            )}
        </div>
    </div>
    ) : (
        <p>Loading your data...</p>
    );
}