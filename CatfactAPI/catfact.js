const url="https://catfact.ninja/fact";

let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");

btn.addEventListener("click", async ()=>{
    let fact= await getFacts();
    p.innerText=fact;
});

async function getFacts() {
    try{
        let fact=await fetch(url);
        let msg=await fact.json();
        return msg.fact;
    }catch(err){
        console.log("Something went wrong...");
        console.log(err);
    }
}

function getColor(delay, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color=color;
        resolve("Changed successfully!!");
        }, delay);
    });
    
}

async function callingGetColor(params) {
    while (true){
        await getColor(1000,"red");
        await getColor(1000,"hotpink");
        await getColor(1000,"blue");
        await getColor(1000,"purple");
        await getColor(1000,"orange");
        await getColor(1000,"green");
        await getColor(1000,"skyblue");
        await getColor(1000,"teal");
        await getColor(1000,"golden");
        await getColor(1000,"brown");
    }
}
callingGetColor();