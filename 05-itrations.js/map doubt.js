const map =new Map()
map.set('IN',"India")
map.set('USA',"United of America")
map.set('Fr',"French")

// map is not itratable


for (const key in map) {
    console.log(key); // no result
}