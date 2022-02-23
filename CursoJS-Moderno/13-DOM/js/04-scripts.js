const card = document.querySelector('.card');
// console.log(card);



const premium = document.querySelector('.premium .info');
// console.log(premium);




const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
// console.log(segundoCard);



let cardItem;
for(let i = 1; i <=3;i++){
    cardItem = document.querySelector(`section.hospedaje .card:nth-child(${i})`);
    console.log(cardItem);
}
