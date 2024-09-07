let acc=document.querySelectorAll('.accordian');

Array.from(acc).forEach((x) => {
    let icon=x.querySelector(".icon");
    let ans=x.querySelector(".ans")
    x.addEventListener('click',()=>{
    icon.classList.toggle('active');
    ans.classList.toggle('active');
    })
});