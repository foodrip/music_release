let container = document.querySelector(`.albums`);
let input = document.querySelector(`.search`);
for(let i = 0; i < albums.length; i++)
container.innerHTML += `
            <div class="col">
                <a href="album.html?i=${i}" class="text-decoration-none">
                    <div class="card">
                        <img src="${albums[i].img}" class="card-img-top" alt="">
                        <div class="card-body">
                            <p class="card-text">${albums[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>`
