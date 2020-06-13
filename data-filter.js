
setTimeout(() => {
    
    const tags =  document.getElementsByClassName('tag');



    for( let i =0; i < tags.length; i++ ) {
        tags[i].addEventListener('click', tagSelect);
    }

    const clearBtn = document.getElementById('clear');

    clearBtn.onclick = clear;
    
    
    
    
    
    
    
    
    
}, 1000);

function tagSelect( e ) {
    let html = '';
    
    html += `<div class="filter" data-type="${e.target.dataset["type"]}">`;
    html += `    <div class="text">${e.target.innerHTML}</div>`;
    html += `    <div class="del" onclick="delTag(this.parentElement)"><i class="fa fa-times"></i></div>`;
    html += `</div>`;

    const filterDiv = document.getElementById( 'filter-bar' );

    if( filterDiv.parentElement.classList.contains('hidden') ) {
        filterDiv.parentElement.classList.remove('hidden')
    }

    if( !filterDiv.innerHTML.includes(html) ) {
        filterDiv.innerHTML += html;
    }

    filterCards()

}

function filterCards() {
    
    const filters = document.getElementsByClassName('filter');
    const cards = document.getElementsByClassName('card');

    for( let i = 0; i < cards.length; i++ ) {


        if( filters.length === 0 ) {
            cards[i].classList.remove('hidden');
        }

        let counter = 0;

        for( let j = 0; j < filters.length; j++ ) {
            
            if( (cards[i].dataset[ filters[j].dataset['type'] ].includes(filters[j].firstElementChild.innerHTML)) ) {
                counter++;
            } 

        }

        if( counter === filters.length )  {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }


    }



}


function delTag(e) {

    const filterDiv = document.getElementById( 'filter-bar' );

    filterDiv.removeChild( e )

    filterCards()

    if( filterDiv.innerHTML === '' ) {
        filterDiv.parentElement.classList.add('hidden')
    }

}

function clear() {

    const filterDiv = document.getElementById( 'filter-bar' );
    filterDiv.innerHTML = '';
    filterDiv.parentElement.classList.add('hidden')

    filterCards()



}