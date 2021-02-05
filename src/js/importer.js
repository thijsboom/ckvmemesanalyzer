const url = 'assets/templates.tsv';
let data;
let out = {};

function fetchData(url) {
    fetch(url).then(
        function(u){ return u.text();}
      ).then(
        function(text){
          data = text
        }
    )
}

class template {
    constructor(row) {
        this.meme = row.split(/\t/)[0].toLowerCase();
        this.type = row.split(/\t/)[1].toLowerCase();
    }
}

function createArray(data) {
    const rows = data.split(/\r?\n/);
    out.array = [];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i] == "") { continue }
        newRow = new template(rows[i])
        out.array.push(newRow)
        console.log(newRow)
    }
    return out.array;
}