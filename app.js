const details=[
    {
        id:1,
        name: "Riya Bansal",
        job: "UX Designer",
        image: "id1.jpg",
        text: "Great customer service. Even when there was a problem with paperwork the employees continued helping us and fixed the issue. Very patient workers and quick, easy and painless process."
    },
    {
        id:2,
        name: "Ishika Pradhan",
        job: "Software Developer",
        image: "id2.jpg",
        text: " We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out."
    },
    {
        id:3,
        name: "Jon Nordan",
        job: "Backend Developer",
        image: "id3.jpg",
        text: "A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly."
    },
    {
        id:4,
        name: "Utkarsh Jain",
        job: "Product Analyst",
        image: "id4.jpg",
        text: "The team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Answers were clear and where necessary detailed enough for us to make informed decisions quickly."
    }
]

const image=document.getElementById("img");
const nam=document.getElementById("name");
const work=document.getElementById("job");
const review=document.getElementById("review");


const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randBtn=document.querySelector(".random-btn");
console.log(prevBtn,nextBtn,randBtn);

let currItem=0;

window.addEventListener("DOMContentLoaded",function(){
showperson(currItem);
})

function showperson(person){
    const item=details[person];
    image.src=item.image;
    nam.textContent=item.name;
    work.textContent=item.job;
    review.textContent=item.text;
}

nextBtn.addEventListener("click",function(){
    currItem++;
    if(currItem>details.length-1){
        currItem=0;
    }
    showperson(currItem);
    
})
prevBtn.addEventListener("click",function(){
    currItem--;
    if(currItem<0){
        currItem=details.length-1;
    }
    showperson(currItem);
})

randBtn.addEventListener("click",function(){
   currItem=Math.floor(Math.random()*4);
   showperson(currItem);
})