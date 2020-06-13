

fetch( 'data.json' ).then((res) => {
    return res.json()
}).then((data) => {

    let html = '';

    for( let i = 0; i < data.length; i++ ) {

        let tools = '';
        let languages = '';
        for(  let j = 0; j < data[i].tools.length ; j++ ) {
            tools += data[i].tools[j]
            tools += ';' 
        }

        for(  let j = 0; j < data[i].languages.length ; j++ ) {
            languages += data[i].languages[j]
            languages += ';' 
        }

        tools = tools.split(';').filter( (item) => {
            return item !== '';
        });

        languages = languages.split(';').filter( (item) => {
            return item !== '';
        });
        // console.log(tools);
        console.log(languages);


        html += `<div class="card" data-role="${data[i].role}" data-level="${data[i].level}" data-languages="${languages.join()}" data-tools="${tools.join()}">`
        html += `    <div class="description">`
        html += `        <img src="${data[i].logo}" alt="${data[i].company}" class="company-logo">`
        html += `        <div class="job-details">`
        html += `            <div class="header">`
        html += `                <span class="company-name">${data[i].company}</span>`
        if( data[i].new ) {
            html += `                <span class="new">NEW!</span>`
        }
        if( data[i].featured ) {
            html += `                <span class="featured">FEATURED</span>`
        }
        html += `            </div>`
        html += `            <h3 class="job">${data[i].position}</h3>`
        html += `            <div class="job-posted">`
        html += `                <span>${data[i].postedAt}</span>`
        html += `                ·`
        html += `                <span>${data[i].contract}</span>`
        html += `                ·`
        html += `                <span>${data[i].location}</span>`
        html += `            </div>`
        html += `        </div>`
        html += `    </div>`
        html += `    <div class="filter-tags">`
        html += `        <div class="tag" data-type="role" >${data[i].role}</div>`
        html += `        <div class="tag" data-type="level" >${data[i].level}</div>`
        for( let j = 0; j < languages.length; j++ ) {
            html += `    <div class="tag" data-type="languages">${languages[j]}</div>`
        }
        for( let j = 0; j < tools.length; j++ ) {
            html += `    <div class="tag" data-type="tools" >${tools[j]}</div>`
        }
        html += `    </div>`
        html += `</div>`
        html += `</div>`


    }

    document.getElementById('cards-container').innerHTML += html;


}).catch((err) => {
    
});
