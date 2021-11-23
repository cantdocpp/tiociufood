<template>
    <div class="restaurant-card">
        <div class="restaurant-card__image__wrapper">
            <img 
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80" 
                alt="restaurant image"
                class="restaurant-card__image"
            >
        </div>
        <div class="restaurant-card__content">
            <h1 class="restaurant-card__title">Restoran Taman Ayam Panggang Situ Gintung sadsadsa</h1>
            <div class="restaurant-card__rating__wrapper">
                <div class="restaurant-card__rating">
                    4.7
                    <i class="restaurant-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.9rem" height="0.9rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg>
                    </i>
                </div>
                <span class="restaurant-card__rating__text">
                    RATED
                </span>
            </div>
            <div class="restaurant-card__address">
                Mall Kelapa Gading, Kelapa Gading, Jakarta utara    
            </div>
        </div>
    </div>
</template>

<style scoped>
    .restaurant-card {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .restaurant-card__image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }

    .restaurant-card__content {
        margin-top: 5px;
    }

    .restaurant-card__title {
        white-space: nowrap;
        font-weight: 700;
        font-size: 15px;
    }

    .restaurant-card__rating__wrapper {
        margin-top: 8px;
        display: flex;
    }

    .restaurant-card__rating {
        color: #fff;
        box-sizing: border-box;
        padding-left: 3px;
        padding-right: 3px;
        padding-bottom: 2px;
        background: #CB202D;
        border-radius: 5px;
        vertical-align: text-top;
    }

    .restaurant-card__icon {
        vertical-align: middle;
        margin-left: 3px;
    }

    .restaurant-card__rating__text {
        margin-left: 10px;
    }

    .restaurant-card__address {
        white-space: nowrap;
        margin-top: 8px;
    }
</style>