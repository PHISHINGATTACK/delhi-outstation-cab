const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});

document.querySelectorAll('.fade-left, .fade-right').forEach(el=>{
observer.observe(el);
});