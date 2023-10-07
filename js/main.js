let btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('show-nav');
    let expanded = this.getAttribute('aria-expanded') == 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});


// Typing Animation

var typed = typed = new Typed(".typing",{
    strings:["Web Designer", "Front-End Developer","Web Developer", "Student" ],
    typeSpeed:70,
    backSpeed:50,
    loop: true
})

//  Menu 

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){

        const a = navList[i].querySelector('a');
        a.addEventListener('click', function(){
            
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add("active");
            showSection(this);
        })
    }

    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove('active');
        }
      const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#' + target).classList.add('active');
    }