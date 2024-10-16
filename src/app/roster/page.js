'use client';
import Header from '../components/Header';
//import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import styles from './roster.module.css';

export default function Roster() {
    const {user, loading}= useContext(UserContext);
    if (loading) {
        return <p>Loading...</p>
    }
    //console.log(user.team.players);
    return user ? (
        <div>
            <Header />
            <div className={styles.main}>
                <h2>Team Roster</h2>
                <div className={styles.myTeam}><img src={user.team.logo.img} alt={user.team.logo.alt}></img> <p>{user.team.name}</p></div>
                <table className={styles.rosterTable}>
                    <thead>
                        <tr>
                            <th>Jersey #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>OVR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.team.players.map((player) => (
                            <tr key={player._id}>
                                <td>{player.jerseyNO}</td>
                                <td>{player.Fname}</td>
                                <td>{player.Lname}</td>
                                <td>{player.position}{player.positionSec ? `/${player.positionSec}` : ''}</td>
                                <td>{player.OVR}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <p>Error</p>
    );
};