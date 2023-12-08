const links = ['', 'index.html', 'alunos.html']
const sidebar = [ '.sidebar-dashboard', '.sidebar-dashboard', '.sidebar-alunos']
const currentURL = window.location.href

for(i = 0; i < links.length; i++){
    if(currentURL.slice(22) == links[i]){
        let active = document.querySelector(sidebar[i])
        active.classList.add('active');
        console.log(links[i])
    }
    else{
        active = document.querySelector(sidebar[0])
    }
}