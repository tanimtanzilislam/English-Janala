const createElements=(arr)=>{
    
    const htmlElement= arr.map(el=>`<span class="btn"> ${el}</span>`);
    console,log(htmlElement.join(" "));
}

const synonyms=["jsnj","sdef","deef"];
createElements(synonyms);