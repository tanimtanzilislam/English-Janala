const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data));

}

const displayLevelWord=(words)=>{
    //console.log(words);

    const  wordContainer=document.getElementById('word-container');
    wordContainer.innerHTML=" ";

    words.forEach(word=>{
        console.log(word);
    })
}

//loadLesson();

const loadLevelWord=(id)=>{
   
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url);
    fetch(url).then(res=>res.json()).then(data=>displayLevelWord(data.data))
}

const displayLesson=(lessons)=>{


    const levelContainer =document.getElementById('level-container');
    levelContainer.innerHTML="";

    for(let lesson of lessons){
        
       console.log(lesson);
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>
        Learn -${lesson.level_no}
        </button> 
        `

        levelContainer.append(btnDiv);

    }

}

loadLessons()