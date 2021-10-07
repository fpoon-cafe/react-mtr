import React from 'react'
import './trains.css';


const Trains = ({ trains }) => {

    function lookup(code) {
        var station = 'UNDEFINED';

        if ( code == 'POA') {
            station = 'Po Lam';
        } else if (code = 'LHP') {
            station = 'Lohas Park';
        }
        return station;
    };

    function getRoute(code) {
        var station = 'UNDEFINED';

        if ( code == 'POA') {
            station = 'Tseung Kwan O • Hang Hau • Po Lam';
        } else if (code = 'LHP') {
            station = 'Tseung Kwan O • Lohas Park';
        }
        return station;
    };    

    function getETA(timestr) {
        var date = new Date(timestr.replace(/\s/, 'T') + '+08:00');  
        console.log(date.getHours() + ":" + date.getMinutes())
       ;
        return  ('0'+date.getHours()).slice(-2) + ":" +  ('0'+date.getMinutes()).slice(-2);
    };

    return (
    <div>
        <center><h1>今度の列車</h1>
        <table>            
            <tr>
                <th class="th2" ></th>
                <th class="th2" >將軍澳線<br/>TKO Line</th>
                <th colspan="3" class="th2" >寶琳•康城 方面<br/> for Po Lam, Lohas Park</th>                
            </tr>
            <tr>
                <th>のりば<br/>Track</th>
                <th>種别<br/>Type</th>
                <th>行&nbsp;先<br/>Destination</th>
                <th>時&nbsp;刻<br/>Departure Time</th>
                <th>路&nbsp;線<br/>Route</th>
            </tr>
        {trains.map((train) => (        
            <tr>
                <td class="platform">{train.plat}</td>
                <td class="express">LOCAL</td>
                <td class="station">{lookup(train.dest)}</td>
                <td class="date">{getETA(train.time)}</td>
                <td class="station"><marquee>{getRoute(train.dest)}</marquee></td>
            </tr>
        ))}
        </table></center>


    </div>
    )
};

export default Trains