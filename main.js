let api = "https://67373ef6aafa2ef222332786.mockapi.io/UserList"
let box=document.querySelector(".box")
async function get(params) {
    try {
        let response=await fetch(api)
        let data= await response.json()
        getData(data)
    } catch (error) {
        console.error(error);
        
    }
}
get()
function getData(data) {
    
    data.forEach((e)=>
    {
        let conteiner=document.createElement("div")

        let h1Name=document.createElement("h1")
        h1Name.innerHTML=e.name

        let pAge=document.createElement("p")
        pAge.innerHTML=e.age

        conteiner.append(h1Name,pAge)
        box.append(conteiner)
    })
}
