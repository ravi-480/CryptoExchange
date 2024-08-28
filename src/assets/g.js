const arr = ["ravi", "mohit", "satyam", "nitesh"];

const changeElement = document.getElementById("hello");
let a = 0;
changeElement.addEventListener("click", () => {
  if (a > arr.length - 1) {
    a = 0;
  }
  changeElement.textContent = arr[a];
  a+=1;
});
