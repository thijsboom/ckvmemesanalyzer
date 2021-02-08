let analyzer = {};
function frequencyFinder() {
    let countedTemplates = analyzer.types.reduce(function (allTemplates, name) {
        if (name in allTemplates) {
            allTemplates[name]++
        }
        else {
            allTemplates[name] = 1
        }
        return allTemplates
      }, {})
    return separateObject(countedTemplates);
}

function getTypes() {
    analyzer.types = [];
    for (let i = 0; i < analyzer.array.length; i++) {
        let type = analyzer.array[i].type;
        analyzer.types.push(type)
    }
    return analyzer.types
}

const separateObject = obj => {
    const keys = Object.keys(obj);
    const result = [];
    for(let i = 0; i < keys.length; i++){
        result.push({
            'type': keys[i],
            'frequency': obj[keys[i]]
        });
   };
   return result;  
};

function analyze(arr) {
    analyzer.array = arr;
    getTypes();
    analyzer.frequencies = frequencyFinder();
    return analyzer;
}