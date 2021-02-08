fetchData(url);

function print(printable) {
    for (let i = 0; i < analyzer.array.length; i++) {
        if (printable.frequencies[i] === undefined) { continue; }
        const content = '<tr>' + '<td>' + printable.frequencies[i].type + '</td>' + '<td>' + printable.frequencies[i].frequency + '</td>' + '</tr>'

        document.querySelector('#print').innerHTML += content
    }
}

function run() {
    const dataToAnalyze = createArray(data);
    let out = analyze(dataToAnalyze)
    print(out);
    return out.frequencies.value;  
}
