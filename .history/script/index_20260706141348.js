const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data));

}


// {
//     Objectid: 77level: 1meaning: "যাওয়া"pronunciation: "গো"word: "Go"[[Prototype]]: Object

// }
const displayLevelWord=(words)=>{
    //console.log(words);

    const  wordContainer=document.getElementById('word-container');
    wordContainer.innerHTML=" ";

    words.forEach(word=>{
        console.log(word);
        const card=document.createElement("div");
        card.innerHTML=` <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5 space-y-4 ">
         <h2 class="font-bold text-2xl ">${word.word}</h2>
         <p class="font-semibold">Meaning /Pronounciation</p>
         <div class="text-2xl font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
         <div class="flex justify-between items-center ">
            <button class="btn bg-[#1A91FF10] hover:btn-primary "><i class="fa-solid fa-circle-info"></i></button>
            <button  class="btn  bg-[#1A91FF10] hover:btn-primary"><i class="fa-solid fa-volume-high"></i></button>
         </div>
            
         

      </div>`
        wordContainer.append(card);
    })
}


if(words.length==0){
   wordContainer.innerHTML=
    return;
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