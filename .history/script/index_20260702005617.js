const loadLesson=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data))

}

//loadLesson();

const displayLesson=(lessons)=>{


    const levelContainer =document.getElementById('level-container');
    levelContainer.innerHTML="";

    for(let lesson of lessons){
        
       console.log(lesson);
        const btnDiv=document.createElement("div");
        btnDiv.innerHTML=`
        <button  class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>
        Learn
        </button> 
        `

        levelContainer.append(btnDiv);

    }

}

loadLesson()