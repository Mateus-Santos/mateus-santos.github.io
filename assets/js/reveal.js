window.revelar = ScrollReveal({reset:true})

var temp_normal = 1800;
var temp_img = temp_normal * 2;
var duration1 = 600;
var duration2 = duration1 * 2;
var duration3 = duration2 * 2;

revelar.reveal('.efeito-baixo',{
    duration: temp_normal,
    distance: '90px',
    origin: 'bottom'
})

revelar.reveal('.efeito-topo',{
    duration: temp_normal,
    distance: '90px',
    origin: 'top'
})

revelar.reveal('.efeito-topo-2',{
    duration: temp_normal,
    distance: '90px',
    origin: 'top',
    duration: duration2
})

revelar.reveal('.efeito-topo-3',{
    duration: temp_normal,
    distance: '90px',
    origin: 'top',
    duration: duration3
})

revelar.reveal('.efeito-esq',{
    duration: temp_normal,
    distance: '90px',
    origin: 'left'
})

revelar.reveal('.efeito-dir',{
    duration: temp_normal,
    distance: '90px',
    origin: 'right'
})

revelar.reveal('.efeito-esq-img',{
    duration: temp_img,
    distance: '90px',
    origin: 'left',
    duration: duration2
})