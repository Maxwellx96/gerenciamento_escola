const links = ['', 'index.html', 'alunos.html']
const sidebar = ['.sidebar-dashboard', '.sidebar-dashboard', '.sidebar-alunos']
const currentURL = window.location.href

for(i = 0; i < links.length -1; i++){
    if(currentURL.includes(links[i]) == true){
        let active = document.querySelector(sidebar[i])
        active.classList.add('active');
        console.log(links[i])
        break;
    }
}