import React from 'react';
import s from './ChartsComponent.module.css'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

const ChartsComponent = ({teamsName, score, title}) => {
    console.log('score',teamsName, score)
    const currentScore = []
    let place = 0
    let current = -1
    teamsName.forEach((team,i)=>currentScore.push({teamName:team, score:score[i]}))
    currentScore.sort((a, b) =>{
        return b.score - a.score})
    return teamsName && teamsName.length >0?(
        <div className={s.wrapper}>
            <div className={s.title}>{title}</div>
            <table className={s.t_score}>
                <tbody>
                {currentScore.map((team, index)=>{
                    if(current !== team.score){
                        place++
                        current = team.score
                    }

                    return(
                        <tr key={'team_score_'+index}>
                            <td>{place} место</td>
                            <td>{team.teamName}</td>
                            <td>{team.score}</td>
                        </tr>
                    )
                })}
                {}

                </tbody>
            </table>
        </div>

    ):(
        <></>
    )
};

export default ChartsComponent;