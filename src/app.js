const input = document.querySelector("input")

const form = document.querySelector("form")
form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    age()
})

const dayTex = document.querySelector("#dayTex")
const monthTex = document.querySelector("#monthTex")
const yearTex = document.querySelector("#yearTex")

function age() {
    let d1 = document.getElementById("day").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;
  
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;
  
    dayTex.textContent = y
	monthTex.textContent = m
	yearTex.textContent = d

    if(input.value == "") {
        input.classList.add("error")
        console.log("ishlamadi");
    }else {
    }
  }