document.querySelector("form").addEventListener("submit", jokes);
 async function jokes(e){
    e.preventDefault();
    let number = document.getElementById("number").value;
    const res = await fetch(`https://api.icndb.com/jokes/random/${number}`);
    const resData = await res.json();
    let output = "";
    resData.value.forEach(item =>  output += `<li>${item.joke}</li>`);
    document.getElementById("jokesOutput").innerHTML = output;
 }
//FETCH API
//  function jokes(e){
//      e.preventDefault();
//      let number = document.getElementById("number").value;
//      fetch(`http://api.icndb.com/jokes/random/${number}`)
//      .then(res => res.json())
//      .then(data => {
//          let output = "";
//          data.value.forEach(item =>  output += `<li>${item.joke}</li>`);
//          document.getElementById("jokesOutput").innerHTML = output;
//      });
//  }

//AJAX
// function getJokes(e){
//     e.preventDefault();
//     let number = document.getElementById("number").value;
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             let output = "";
//             let jokesObj = JSON.parse(this.responseText);
//             jokesObj.value.forEach(function(obj){
//                 output += `<li>${obj.joke}</li>`;
//             });
//             document.getElementById("jokesOutput").innerHTML = output;
//         }
//     }
//     xhr.send();
// }
