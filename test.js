const data = require('./china_mainland_universities.json')

let all = 0
Object.keys(data).forEach(p => {
  const alls = data[p].all
  alls.forEach((item, idx) => {
    if (alls.indexOf(item) !== idx) {
    	console.log(`${item} 重复`)
    }
    all++
  })
})

console.log(`共计 ${all} 所大学`)
