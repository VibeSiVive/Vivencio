// let skills =  ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
// let skills = ["EEQR", "WWER", "QQQR", "QQER", "EEQR"]
// let skills = ["ABC", "123", "DoReMi", "?!@-", "QWER"]

//let mana = 500

function skill () {
    if (mana > 0){
        if (skills === "QQQ"){
            let spellName = "Cold Snap"
            let manaUsed = 90
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "QQW"){
            let spellName = " Ghost Walk"
            let manaUsed = 177
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "QQE"){
            let spellName = "Ice Wall"
            let manaUsed = 125
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "WWW"){
            let spellName = "E.M.P."
            let manaUsed = 175
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "WWQ"){
            let spellName = " Tornado"
            let manaUsed = 140
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "WWE"){
            let spellName = "Alacrity"
            let manaUsed = 90
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "EEE"){
            let spellName = "Sunstrike"
            let manaUsed = 175
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "EEQ"){
            let spellName = "Forge Spirit"
            let manaUsed = 75
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "EEW"){
            let spellName = "Chaos Meteor"
            let manaUsed = 200
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        } else if (skills === "QWE"){
            let spellName = " Deafening Blast"
            let manaUsed = 250
            let manaLeft = mana - manaUsed
            console.log(spellName + ". Mana Used: " + manaUsed + ".Mana Left: " + manaLeft)

        }
    } else {
        console.log("invalid combination")
    }
}
let skills =  ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
let mana = 500

for (let i = 0; i < skills.length; i++){
     skill(skills[i])
}
let invoker = skill(skills)
console.log(invoker)