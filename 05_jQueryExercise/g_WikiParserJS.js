function wikiParser(selector) {
    let element=$(selector)

    let h3Pattern = /===(.*?)===/g
    let h2Pattern = /==(.*?)==/g
    let h1Pattern = /=(.*?)=/g
    let anchorPattern  = /\[\[([^\[\]]+?)\|(.+?)\]\]/g
    let singleAnchorPattern  = /\[\[([^\[\]]+?)\]\]/g
    let boltPattern = /'''(.*?)'''/g
    let italicPattern = /''(.*?)''/g
    let text = element.text()
    element.text('')
    text = text
        .replace(h3Pattern,(m,group)=> `<h3>${group}</h3>`)
        .replace(h2Pattern,(m,group)=> `<h2>${group}</h2>`)
        .replace(h1Pattern,(m,group)=> `<h1>${group}</h1>`)
        .replace(anchorPattern,(m,group1,group2)=> `<a href='/wiki/${group1}'>${group2}</a>`)
        .replace(singleAnchorPattern,(m,group)=> `<a href='/wiki/${group}'>${group}</a>`)
        .replace(boltPattern,(m,group)=> `<b>${group}</b>`)
        .replace(italicPattern,(m,group)=> `<i>${group}</i>`)

    element.html(text)
}