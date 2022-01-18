(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,a,i){"use strict";i.r(a),i.d(a,"SkillsPage",(function(){return n}));var s=i(62),o=function(e,a,i,s){var o,t=arguments.length,n=t<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(n=(t<3?o(n):t>3?o(a,i,n):o(a,i))||n);return t>3&&n&&Object.defineProperty(a,i,n),n},t=function(e,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,a)};let n=class extends s.a{constructor(){super(),this.languanges=[{id:"js",name:"JavaScript",description:"Desde os 15 anos tenho me interagio com a área web, e com isso pude ir me aprimorando nas técnicas de JS, HTML e CSS.",percentage:93},{id:"ts",name:"TypeScript",description:"Após o lançamento do framework Angular 2, comecei a estudar e utilizar o TypeScript em praticamente todo projeto front-end web.",percentage:94},{id:"csharp",name:"C# (.NET)",description:"Em 2015 iniciei estudos em C# para trabalhar numa empresa onde eu atuaria utilizando a linguagem, onde fiquei utilizando a linguagem até meados de 2018.",percentage:78},{id:"swift",name:"Swift (iOS)",description:"Em 2019 houve uma opotunidade para atuar no desenvolvimento iOS utilizando Swift, e atualmente é umas das linaguagens que tenho utilizado no dia a dia.",percentage:69},{id:"dart",name:"Dart (Flutter)",description:"No final de 2019, iniciei um intenso estudo sobre Flutter, entendo como funciona e também no desenvolvimento de aplicativos para Android e iOS usando a linguagem Dart.",percentage:55},{id:"php",name:"PHP",description:"Praticamente foi a primeira linguagem server-side que utilizei, aos 15 anos de idade. O contato com a linguagem foi diminuindo em 2015, mas ainda tinha contato mesmo que de forma rara.",percentage:70}],this.technologies=[{id:"ng",name:"Angular 2+",description:"Desde o lançamento do Angular 2, tenho desenvolvido aplicações utilizando o framework, portanto é o framework Web que possuo mais domínio.",percentage:90},{id:"react",name:"React",description:"Biblioteca que nunca atuei profissionalmente, apenas utilizei a título de estudos.",percentage:65},{id:"nb",name:"Nimble",description:"Framework desenvolvido por mim, sem a utilização de libs ou dependências de terceiros, onde o seu objeto é facilitar o desenvolvimento de websites.",percentage:100},{id:"git",name:"Git",description:"Demorei um pouco a mexer somente Git, pois antes utilizava SVN, mas desde 2017 que utilizo apenas Git para versionar tudo.",percentage:72},{id:"laravel",name:"Laravel",description:"Praticamente primeiro framework de desenvolvimento que utilizei na vida, e foi um impacto muito grande, pois o Laravel realmente revolucionou a forma como se programava em PHP na época.",percentage:66}],this.skills=[{id:1,name:"Componentização",description:"Sem dúvidas esta é umas das minhas maiores habilidades, pois a paixão pelo desenvolvimento se reflete principalmente no apreço pela criação de componentes, seja qual for.",percentage:100},{id:2,name:"Ensinamento",description:"Com o passar dos anos, é natural que não tenhamos muitos desafios mais, e o desejo de repassar o conhecimento para os mais jovens ou iniciantes é algo natural.",percentage:80},{id:3,name:"Trabalho em equipe",description:"Trabalho em equipe é algo essencial, até mesmo pelo fato de não fazermos nada sozinhos, alguém precisa ou precisou colaborar com algo para que tudo corresse bem.",percentage:99},{id:4,name:"Produtividade com qualidade",description:"Sempre trabalhei com muita itensidade, sempre atento a qualidade e aos prazos de entrega.",percentage:90},{id:5,name:"Criatividade",description:"Nunca fui uma pessoa muito criativa ao ponto de criar novas telas, pois sou daqueles antigos devs que fazia desde o design ao servidor, mas sempre tive muita criatividade para soluções lógicas.",percentage:98}]}onEnter(){}onExit(){}};n=o([Object(s.b)({template:i(91),style:i(92),title:"Skills"}),t("design:paramtypes",[])],n)},62:function(e,a,i){"use strict";i.d(a,"a",(function(){return s.a})),i.d(a,"b",(function(){return c}));var s=i(23);class o{constructor(e){Object.assign(this,e)}}class t{constructor(e){this.description="",this.keywords="",this.og={},Object.assign(this,e),this.og&&(this.og=new o(this.og))}}class n{constructor(e){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,e),this.meta&&(this.meta=new t(this.meta))}}var r=i(3);i(24);function c(e){return function(a){return e=new n(e),Object.assign(a.prototype,e),Reflect.defineMetadata(r.a,!0,a),a}}},91:function(e,a){e.exports='<div class="skills-page animated fadeIn"> <h1> <strong>Linguagens</strong> <p class=f-w-300>níveis de domínio</p> </h1> <div class=skill-area> <section @for="language of languanges" [class]=language.id> <div class=circle-area> <svg class=circle-progress viewbox="0 0 100 100" stroke-dasharray="{{(251.2 * (language.percentage/100)) + \',251.2\'}}"> <path class=background fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> <path fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> </svg> <p> <img [src]="\'assets/img/languages/\' + language.id + \'.svg\'" alt=""/> <span>{{language.percentage}}%</span> </p> </div> <div class=skill-info> <h4 class=f-w-500>{{language.name}}</h4> <p>{{language.description}}</p> </div> </section> </div> <h1 class=mt-8> <strong>Tecnologias</strong> <p class=f-w-300>e outros</p> </h1> <div class=skill-area> <section @for="technology of technologies"> <div class=circle-area> <svg class="circle-progress grey" viewbox="0 0 100 100" stroke-dasharray="{{(251.2 * (technology.percentage/100)) + \',251.2\'}}"> <path class=background fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> <path fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> </svg> <p> <span>{{technology.percentage}}%</span> </p> </div> <div class=skill-info> <h4 class=f-w-500>{{technology.name}}</h4> <p>{{technology.description}}</p> </div> </section> </div> <h1 class=mt-8> <strong>Caraterísticas</strong> <p class=f-w-300>e diferenciais</p> </h1> <div class=skill-area> <section @for="skill of skills"> <div class=circle-area> <svg class="circle-progress grey" viewbox="0 0 100 100" stroke-dasharray="{{(251.2 * (skill.percentage/100)) + \',251.2\'}}"> <path class=background fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> <path fill=none d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path> </svg> <p> <span>{{skill.percentage}}%</span> </p> </div> <div class=skill-info> <h4 class=f-w-500>{{skill.name}}</h4> <p>{{skill.description}}</p> </div> </section> </div> </div>'},92:function(e,a,i){}}]);