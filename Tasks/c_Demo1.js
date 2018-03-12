function game(kingdoms, battles) {
    let realm = {};
    for (let data of kingdoms) {
        if (!realm.hasOwnProperty(data.kingdom)) {
            realm[data.kingdom] = {};
            realm[data.kingdom][data.general] = {'army': data.army, 'wins': 0, 'losses': 0};
            realm[data.kingdom]['totalWins'] = 0;
            realm[data.kingdom]['totalLosses'] = 0;
        } else {
            if (!realm[data.kingdom].hasOwnProperty(data.general)) {
                realm[data.kingdom][data.general] = {'army': data.army, 'wins': 0, 'losses': 0};
            } else {
                realm[data.kingdom][data.general]['army'] += data.army;
            }
        }
    }
    for (let [attackerRealm, attackerGeneral, defenderRealm, defenderGeneral] of battles) {
        if (attackerRealm !== defenderRealm) {
            let attacker = realm[attackerRealm][attackerGeneral]['army'];
            let defender = realm[defenderRealm][defenderGeneral]['army'];
            if (attacker > defender) {
                let gain = attacker * 0.1;
                let loss = defender * 0.1;
                realm[attackerRealm][attackerGeneral]['army'] += gain;
                realm[attackerRealm][attackerGeneral]['army'] = Math.floor(realm[attackerRealm][attackerGeneral]['army']);
                realm[attackerRealm][attackerGeneral]['wins'] ++;
                realm[attackerRealm]['totalWins'] ++;
                realm[defenderRealm][defenderGeneral]['army'] -= loss;
                realm[defenderRealm][defenderGeneral]['army'] = Math.floor(realm[defenderRealm][defenderGeneral]['army']);
                realm[defenderRealm][defenderGeneral]['losses'] ++;
                realm[defenderRealm]['totalLosses'] ++;
            } else if (attacker < defender) {
                let gain = defender * 0.1;
                let loss = attacker * 0.1;
                realm[defenderRealm][defenderGeneral]['army'] += gain;
                realm[defenderRealm][defenderGeneral]['army'] = Math.floor(realm[defenderRealm][defenderGeneral]['army']);
                realm[defenderRealm][defenderGeneral]['wins'] ++;
                realm[defenderRealm]['totalWins'] ++;
                realm[attackerRealm][attackerGeneral]['army'] -= loss;
                realm[attackerRealm][attackerGeneral]['army'] = Math.floor(realm[attackerRealm][attackerGeneral]['army']);
                realm[attackerRealm][attackerGeneral]['losses'] ++;
                realm[attackerRealm]['totalLosses'] ++;
            }
        }
    }
    let sortedRealms = Object.keys(realm).sort((a, b) => {
        if (realm[b]['totalWins'] - realm[a]['totalWins'] === 0) {
            if (realm[a]['totalLosses'] - realm[b]['totalLosses'] === 0) {
                return a.localeCompare(b);
            }
            return realm[a]['totalLosses'] - realm[b]['totalLosses'];
        }
        return realm[b]['totalWins'] - realm[a]['totalWins'];
    })[0];
    let sortedGenerals = Object.keys(realm[sortedRealms]).filter(x => x !== 'totalWins' && x !== 'totalLosses').sort((a, b) => {
        let x = realm[sortedRealms][b]['army'];
        let y = realm[sortedRealms][a]['army'];
        return x - y;
    });
    console.log(`Winner: ${sortedRealms}`);
    for (let gen of sortedGenerals) {
        console.log(`/\\general: ${gen}`);
        console.log(`---army: ${realm[sortedRealms][gen]['army']}`);
        console.log(`---wins: ${realm[sortedRealms][gen]['wins']}`);
        console.log(`---losses: ${realm[sortedRealms][gen]['losses']}`);
    }
}

// game([
//     { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Stonegate", "Ulric", "Stonegate", "Doran"],
//         ["Stonegate", "Doran", "Maiden Way", "Merek"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//         ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
//     ])

// game([
//     [ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
//
// ])