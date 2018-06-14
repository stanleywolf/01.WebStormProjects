function extract(text) {
    let capitalWords=[];
    for (let sentence of text) {
        let words=sentence.split(/\W+/)
            .filter(word => word != '');
        for (let word of words) {
            if(word==word.toUpperCase()){
                capitalWords.push(word);
            }
        }
    }
    console.log(capitalWords.join(", "));
}
extract(['SQL','Server','and','ASP','NET','MVC'])