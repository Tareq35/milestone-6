const loadAllNewsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayAllNewsCategories(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
    finally {

    }
}
loadAllNewsCategories();

const displayAllNewsCategories = (categories) => {
    const newsCategoriesContainer = document.getElementById('news-categories-container');
    categories.forEach(category => {
        const ul = document.createElement('ul');
        // console.log(category);
        ul.innerHTML = `
            <p onclick="loadNews('${category.category_id}', '${category.category_name}')" class="px-2 text-lg font-semibold" style="cursor: pointer;">${category.category_name}</p>
        `;
        newsCategoriesContainer.appendChild(ul);
    })
    loadNews('01', 'breaking News')
}

const loadNews = async (category_id, category_name) => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayNews(data.data, category_name);
    }
    catch (error) {
        console.log(error);
    }
    finally {

    }
}

const displayNews = (news, category_name) => {
    // console.log(news)
    toggleSpinner(false);
    document.getElementById('news-found').innerText = news.length;
    document.getElementById('category-name').innerText = category_name;

    const newsItems = document.getElementById('news-items');
    newsItems.innerHTML = '';


    news.forEach(newsItem => {
        // console.log(newsItem);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-2xl border lg:flex-row p-2 mb-10">
            <figure class="mx-auto">
                <img src="${newsItem.thumbnail_url}" alt="news" />
            </figure>
            <div class="card-body w-1/2 mx-auto">
                <h2 class="card-title">
                ${newsItem.title}
                </h2>
                <p>
                ${newsItem.details.slice(0, 400) + ('...')}
                </p>
                <div class="card-actions flex justify-between items-center">
                    <div class="flex gap-1 items-center">
                        <img class="w-10 h-10 rounded-full" src="${newsItem.author.img}" alt="">
                        <div>
                            <p class="font-semibold">${newsItem.author.name === null || newsItem.author.name === '' ? 'No author found' : newsItem.author.name}</p>
                            <small class="text-neutral-400">${newsItem.author.published_date === null ? 'No date found' : newsItem.author.published_date}</small>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" width="25">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="font-semibold">${newsItem.total_view === null || newsItem.total_view === 0 ? 'No views found' : newsItem.total_view}</span>
                    </div>
                    <div class="flex gap-2">
                        <div>
                            <i class="fa-solid fa-star text-amber-400"></i>
                            <i class="fa-solid fa-star text-amber-400"></i>
                            <i class="fa-solid fa-star text-amber-400"></i>
                            <i class="fa-solid fa-star text-amber-400"></i>
                            <i class="fa-solid fa-star text-stone-300"></i>
                        </div>
                        <div>
                            <p class="font-semibold">${newsItem.rating.number}</p>
                        </div>
                    </div>
                    <div>
                        <label onclick="loadModal('${newsItem._id}')" for="my-modal-4" class="btn bg-fuchsia-500 border-none">Details</label>

                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label id="modal-details" class="modal-box relative w-11/12 max-w-7xl" for="">
                            
                            </label>
                         </label>
                    </div>
                </div>
            </div>
    </div>
        `;
        newsItems.appendChild(div);
    });
}

const toggleSpinner = isSpinning => {
    const spinnerSection = document.getElementById('spinner');
    if(isSpinning){
        spinnerSection.classList.remove('hidden');
    }
    else{
        spinnerSection.classList.add('hidden');
    }
}

const loadModal = async (_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayModal(data.data);
    }
    catch (error) {
        console.log(error);
    }
    finally {

    }
}

const displayModal = async (detailsNews) => {
    console.log(detailsNews)
    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = '';

    detailsNews.forEach(news => {
        console.log(news)
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="card bg-base-100 border lg:flex-row p-2">
        <figure class="mx-auto">
            <img src="${news.thumbnail_url}" alt="news" />
        </figure>
        <div class="card-body w-1/2 mx-auto">
            <h2 class="card-title">
            ${news.title}
            </h2>
            <p>
            ${news.details}
            </p>
            <div class="card-actions flex justify-between items-center">
                <div class="flex gap-1 items-center">
                    <img class="w-10 h-10 rounded-full" src="${news.author.img}" alt="">
                    <div>
                        <p class="font-semibold">${news.author.name === null || news.author.name === '' ? 'No author found' : news.author.name}</p>
                        <small class="text-neutral-400">${news.author.published_date === null ? 'No date found' : news.author.published_date}</small>
                    </div>
                </div>
                <div class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" width="25">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="font-semibold">${news.total_view === null || news.total_view === 0 ? 'No views found' : news.total_view}</span>
                </div>
                <div class="flex gap-2">
                    <div>
                        <i class="fa-solid fa-star text-amber-400"></i>
                        <i class="fa-solid fa-star text-amber-400"></i>
                        <i class="fa-solid fa-star text-amber-400"></i>
                        <i class="fa-solid fa-star text-amber-400"></i>
                        <i class="fa-solid fa-star text-stone-300"></i>
                    </div>
                    <div>
                        <p class="font-semibold">${news.rating.number}</p>
                    </div>
                </div>                
            </div>
        </div>
</div>

        `;
        modalDetails.appendChild(div);
    })
}