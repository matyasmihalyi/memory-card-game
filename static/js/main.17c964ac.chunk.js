(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,r,n){"use strict";n.r(r);var t=n(1),s=n.n(t),c=n(3),o=n.n(c),a=n(0),i=function(e){var r=e.handleClick,n=e.flippedCards,t=e.matchedCards,s=e.cardsToRender;return Object(a.jsx)("div",{className:"cards",children:s.map((function(e,s){return Object(a.jsx)("div",{className:"card-wrapper",onClick:function(){return r(s)},children:Object(a.jsxs)("div",{className:n.some((function(e){return e===s}))||t.some((function(e){return e===s}))?"card-inner flipped":"card-inner",children:[Object(a.jsx)("div",{className:"card-front",children:Object(a.jsx)("img",{src:e.sprite,alt:e.pokemonName})}),Object(a.jsx)("div",{className:"card-back"})]})},s)}))})},l=function(e){var r=e.numberOfCards,n=e.cardsToRender,t=e.handleClick,c=e.flippedCards,o=e.matchedCards;return Object(a.jsx)(s.a.Fragment,{children:n.length===r?Object(a.jsx)(i,{cardsToRender:n,numberOfCards:r,handleClick:t,flippedCards:c,matchedCards:o}):Object(a.jsx)("div",{className:"loading-message",children:"Loading cards..."})})},d=function(e){var r=e.toggleModal,n=e.userMoves,t=e.refreshPokemons,s=e.clearCards;return Object(a.jsxs)("nav",{children:[Object(a.jsxs)("div",{className:"score",children:[Object(a.jsx)("span",{className:"label",children:"Moves:"}),Object(a.jsx)("span",{className:"moves",children:n})]}),Object(a.jsx)("div",{className:"reset",onClick:function(){s(),t()},children:Object(a.jsx)("span",{className:"material-icons",children:"restart_alt"})}),Object(a.jsx)("div",{className:"menu",onClick:r,children:Object(a.jsx)("span",{className:"material-icons",children:"settings"})})]})},u=n(2),m=function(){for(var e=new Array(150),r=0;r<e.length;r++)e[r]=r+1;return function(e){for(var r=e.length-1;r>0;r--){var n=Math.floor(Math.random()*r),t=e[r];e[r]=e[n],e[n]=t}}(e),e},f=function(e){var r=Object(t.useState)([]),n=Object(u.a)(r,2),s=n[0],c=n[1],o=function(e){return m().slice(0,e/2)}(e),a=function(){var e=[];o.forEach((function(r,n){fetch("https://pokeapi.co/api/v2/pokemon/".concat(r)).then((function(e){return e.json()})).then((function(r){var n={pokemonName:r.name+"_1",pokemonId:r.id,sprite:"".concat(r.sprites.front_default)},t={pokemonName:r.name+"_2",pokemonId:r.id,sprite:"".concat(r.sprites.front_default)};return e.push(n,t),e})).then((function(e){e.length===2*o.length&&(e.sort((function(){return Math.random()-.5})),c((function(){return e})))})).catch((function(e){return console.log(e)}))}))};return Object(t.useEffect)((function(){a()}),[e]),{pokemons:s,refreshPokemons:a}},j=n(7),h=function(e){var r,n=e.pokemons,s=e.addToMoves,c=e.resetMoves,o=e.userMoves,a=(e.numberOfCards,e.storeScore),i=Object(t.useState)([]),l=Object(u.a)(i,2),d=l[0],m=l[1],f=Object(t.useState)([]),h=Object(u.a)(f,2),b=h[0],g=h[1],O=Object(t.useState)(!1),p=Object(u.a)(O,2),v=p[0],C=p[1];Object(t.useEffect)((function(){2===d.length&&x(d)}),[d]),Object(t.useEffect)((function(){b.length>1&&b.length===n.length&&(a(o),setTimeout((function(){k()}),1500))}),[b]);var x=function(e){var t=Object(u.a)(e,2),s=t[0],c=t[1];n[s].pokemonId===n[c].pokemonId?g((function(e){return[].concat(Object(j.a)(e),[s,c])})):r=setTimeout((function(){m((function(){return[]}))}),1800)},k=function(){C(!v)};return{flippedCards:d,matchedCards:b,handleClick:function(e){d.some((function(r){return r===e}))||b.some((function(r){return r===e}))||(1===d.length?(m((function(r){return[].concat(Object(j.a)(r),[e])})),s()):(m((function(){return[e]})),s(),clearTimeout(r)))},clearCards:function(){var e=document.querySelector(".reset").querySelector("span");e.style.transform="rotate(-360deg)",e.ontransitionend=function(){return e.style.transform="rotate(0deg)"},m((function(){return[]})),g((function(){return[]})),c()},toggleScoreModal:k,scoreVisible:v}},b=function(e){var r=Object(t.useState)(0),n=Object(u.a)(r,2),s=n[0],c=n[1];return{userMoves:s,addToMoves:function(){c((function(e){return e+1})),console.log(s)},resetMoves:function(){c((function(){return 0}))},storeScore:function(r){var n={};if(null!==localStorage.getItem("Highscores")){if(n=localStorage.getItem("Highscores"),void 0===(n=JSON.parse(n))[e])n[e]=r,console.log("no record with this many cards"),localStorage.setItem("Highscores",JSON.stringify(n)),console.log(n);else if(void 0!==n[e]){console.log(n),console.log("there is already a record with this many cards"),n[e]>r&&(console.log("this is a new record"),n[e]=r,localStorage.setItem("Highscores",JSON.stringify(n)))}}else console.log("the highscores object was empty"),n[e]=r,localStorage.setItem("Highscores",JSON.stringify(n)),console.log(n)},getHighScore:function(){var r=localStorage.getItem("Highscores");return r=JSON.parse(r),console.log(r),r[e]}}},g=function(e){var r=e.isVisible,n=e.toggleModal,t=e.decrementCards,s=e.incrementCards,o=e.numberOfCards;return r?c.createPortal(Object(a.jsx)("div",{className:"modal-wrapper",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{children:"Number of Pok\xe9mons"}),Object(a.jsxs)("div",{className:"number-of-cards",children:[Object(a.jsx)("span",{onClick:function(){return t()},className:"material-icons",children:"remove"}),Object(a.jsx)("span",{className:"number-of-mons",children:o.toString()}),Object(a.jsx)("span",{onClick:function(){return s()},className:"material-icons",children:"add"})]}),Object(a.jsx)("button",{onClick:n,children:"OK"})]})}),document.querySelector("#modal")):null},O=function(e){var r=e.toggle,n=e.isVisible,t=e.score,s=e.refreshPokemons,o=e.clearCards,i=e.resetMoves,l=e.getHighScore;return n?c.createPortal(Object(a.jsx)("div",{className:"modal-wrapper",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{children:"Congratulations!"}),Object(a.jsxs)("div",{className:"message-wrapper",children:[Object(a.jsx)("p",{children:"You got all the pairs in"}),Object(a.jsx)("strong",{children:t}),Object(a.jsx)("p",{children:"moves."}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Your personal best is ",Object(a.jsx)("b",{children:l()})," moves"]})]}),Object(a.jsx)("button",{onClick:function(){r(),s(),o(),i()},children:"OK"})]})}),document.querySelector("#modal")):null};var p=function(){var e=function(){var e=Object(t.useState)(!1),r=Object(u.a)(e,2),n=r[0],s=r[1];return{isVisible:n,toggleModal:function(){s(!n)}}}(),r=e.isVisible,n=e.toggleModal,c=function(){var e=Object(t.useState)(12),r=Object(u.a)(e,2),n=r[0],s=r[1];return{numberOfCards:n,incrementCards:function(){n<28&&s((function(e){return e+4}))},decrementCards:function(){n>4&&s((function(e){return e-4}))}}}(),o=c.numberOfCards,i=c.incrementCards,m=c.decrementCards,j=f(o),p=j.pokemons,v=j.refreshPokemons,C=b(o),x=C.userMoves,k=C.addToMoves,S=C.resetMoves,N=C.getHighScore,M=b(o).storeScore,y=h({pokemons:p,addToMoves:k,resetMoves:S,userMoves:x,numberOfCards:o,storeScore:M}),w=y.flippedCards,I=y.matchedCards,T=y.handleClick,H=y.clearCards,P=y.toggleScoreModal,V=y.scoreVisible;return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(l,{numberOfCards:o,cardsToRender:p,handleClick:T,flippedCards:w,matchedCards:I}),Object(a.jsx)(d,{toggleModal:n,userMoves:x,refreshPokemons:v,clearCards:H}),Object(a.jsx)(g,{numberOfCards:o,incrementCards:i,decrementCards:m,isVisible:r,toggleModal:n}),Object(a.jsx)(O,{toggle:P,isVisible:V,score:x,clearCards:H,resetMoves:S,refreshPokemons:v,getHighScore:N})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.17c964ac.chunk.js.map