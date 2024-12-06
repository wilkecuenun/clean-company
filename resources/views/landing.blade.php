<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Welcome to our Cleaning Company! We offer professional cleaning services for your home or office. Explore our range of cleaning packages and benefits. Trusted by many, we provide top-notch maintenance and exceptional customer reviews. Contact us today to experience a cleaner, healthier environment.">
    <title>Cleaning company</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="css/index.css">
    <link rel="shortcut icon" type="image/png" href="images/favicon.ico">
</head>

<body>
    <header class="header">
        <div class="container header__container">
            <div class="theme-toggler-wrap theme-toggler-wrap--light">
                <div class="theme__circle theme__circle--light">
                    <div class="circle-item circle__sun"></div>
                    <div class="circle-item circle__moon circle__moon--hidden"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                    <div class="circle__ray"></div>
                </div>
            </div>

            <nav class="nav">
                <a href="./index.html" class="nav__logo">
                    <img src="{{ asset('images/logo.jpeg') }}" alt="logo" class="img_logo">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="./" class="nav__link">House</a>
                        </li>
                        <li class="nav__item">
                            <a href="./service" class="nav__link">Service</a>
                        </li>
                    </ul>
                </a>
            </nav>
            <div class="contacts">
                <ul class="socials contacts__socials">
                    <li class="socials__item">
                        <a class="socials__link" href="https://www.instagram.com/"
                            aria-label="Link to the company's Instagram" target="_blank">
                            <svg class="socials__icon socials__inst-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="socials__item">
                        <a class="socials__link" href="https://www.facebook.com"
                            aria-label="Link to the company's Facebook" target="_blank">
                            <svg class="socials__icon socials__facebook-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="socials__item">
                        <a class="socials__link" href="https://www.messenger.com/"
                            aria-label="Link to the company's WhatsApp" target="_blank">
                            <svg class="socials__icon socials__whatsApp-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-whatsApp"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <a href="tel:+12064743536" class="tel-btn">+1 206 4743 536</a>
            </div>
            <button type="button" class="menu-toggle open-menu-btn" aria-expanded="false" aria-controls="mobile-menu"
                aria-label="open side navigation menu">
                <svg class="menu-toggle__icon icon" width="24" height="18">
                    <use href="images/sprite.svg#icon-menu"></use>
                </svg>
            </button>
        </div>
        <div class="aside-menu" id="mobile-menu">
            <button class="menu-toggle close-menu-btn" type="button" aria-expanded="false"
                aria-label="Close side navigation menu">
                <svg class="menu__icon-close" width="42" height="42">
                    <use href="images/sprite.svg#icon-plus"></use>
                </svg>
            </button>
            <nav class="nav nav--aside-menu">
                <a href="./index.html" class="nav__logo">
                    <svg class="nav__logo-img" width="54" height="68" aria-label="логотип">
                        <use href="images/sprite.svg#icon-logo"></use>
                    </svg>
                </a>
                <ul class="nav__list nav__list--light">
                    <li class="nav__item nav__item--light">
                        <a href="./" class="nav__link nav__link--light">House</a>
                    </li>
                </ul>
            </nav>
            <ul class="aside-menu__about">
                <li class="about__item aside-menu__item">
                    <a href="{{ route('admin.login') }}" class="about__link aside-menu__link">
                        Admin
                    </a>
                </li>
            </ul>
            <div class="contacts contacts--aside-menu">
                <ul class="socials contacts__socials socials--aside-menu">
                    <li class="socials__item socials__item--white-bg socials__item--aside-menu">
                        <a class="socials__link" href="https://www.instagram.com/"
                            aria-label="Посилання на Інстраграм компанії" target="_blank">
                            <svg class="socials__icon socials__inst-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="socials__item socials__item--white-bg socials__item--aside-menu">
                        <a class="socials__link" href="https://www.facebook.com"
                            aria-label="Посилання на Фейсбук компанії" target="_blank">
                            <svg class="socials__icon socials__facebook-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="socials__item socials__item--white-bg socials__item--aside-menu">
                        <a class="socials__link" href="https://www.messenger.com/"
                            aria-label="Посилання на Вотсап компанії" target="_blank">
                            <svg class="socials__icon socials__whatsApp-icon" width="40" height="40">
                                <use href="images/sprite.svg#icon-whatsApp"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <a href="tel:+12064743536" class="tel-btn tel-btn--white-bg tel-btn--aside--menu">
                    +1 206 474 3536
                </a>
            </div>
        </div>
    </header>

    <main>
        <section class="relative-positioned section section--dark-background section--hero home-hero">
            <div class="container hero__container">
                <div class="hero__info">
                    <h1 class="hero__title">
                        <span>Sparkling Clean Houses</span>
                    </h1>
                    <div class="animated-btn-wrap">
                        <a href="#office-calc-discount" class="btn hero__btn action-btn blob-btn">
                            Order cleaning
                            <span class="blob-btn__inner">
                                <span class="blob-btn__blobs">
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                </span>
                            </span>
                        </a>
                        <svg class="animated-btn-icon">
                            <defs>
                                <filter id="goo-15" x="0%" y="0%" width="100%" height="100%">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                    </feGaussianBlur>
                                    <feColorMatrix in="blur" type="matrix"
                                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                    </feColorMatrix>
                                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="sphere"></div>
                </div>
                <div class="container--thumb-wrapp">
                    <div class="hero__image"></div>
                </div>
            </div>
        </section>

        <section class="section section--dark-background section--benefits-expanded">
            <div class="container">
                <h2 class="section__title visually-hidden">Особливості</h2>
                <ul class="features">
                    <li class="features__item features__item--benefits">
                        <div class="features__image-wrap">
                            <picture class="features__photo">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/subscription@1x.webp 1x,
      images/benefits/tablet/subscription@2x.webp 2x
    "
                                    media="(max-width: 1439px)" type="image/webp">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/subscription@1x.png 1x,
      images/benefits/tablet/subscription@2x.png 2x
    "
                                    media="(max-width: 1439px)" type="image/png">

                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/subscription@1x.webp 1x,
      images/benefits/desktop/subscription@2x.webp 2x
    "
                                    media="(min-width: 1440px)" type="image/webp">
                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/subscription@1x.png 1x,
      images/benefits/desktop/subscription@2x.png 2x
    "
                                    media="(min-width: 1440px)" type="image/png">

                                <img width="221" height="221" class="features__photo"
                                    src="images/benefits/tablet/subscription@1x.png" alt="Долари та центи">
                            </picture>

                        </div>
                        <h3 class="features__title">Budget subscription</h3>
                        <p class="features__desc">
                            The cost of a monthly subscription is only
                            <span>$100.</span>
                            It includes 2
                            cleanings per month.
                        </p>
                    </li>
                    <li class="features__item features__item--benefits">
                        <div class="features__image-wrap">
                            <picture class="features__photo">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/chemistry@1x.webp 1x,
      images/benefits/tablet/chemistry@2x.webp 2x
    "
                                    media="(max-width: 1439px)" type="image/webp">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/chemistry@1x.png 1x,
      images/benefits/tablet/chemistry@2x.png 2x
    "
                                    media="(max-width: 1439px)" type="image/png">

                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/chemistry@1x.webp 1x,
      images/benefits/desktop/chemistry@2x.webp 2x
    "
                                    media="(min-width: 1440px)" type="image/webp">
                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/chemistry@1x.png 1x,
      images/benefits/desktop/chemistry@2x.png 2x
    "
                                    media="(min-width: 1440px)" type="image/png">

                                <img width="221" height="221" class="features__photo"
                                    src="images/benefits/tablet/chemistry@1x.png" alt="Знак безпеки">
                            </picture>

                        </div>
                        <h3 class="features__title">Safety sign</h3>
                        <p class="features__desc">
                            In cleaning, I use only high-quality and non-aggressive chemicals
                            <span>KIEHL</span>
                            and
                            <span>Pomoc Domowa</span>
                            .
                        </p>
                    </li>
                    <li class="features__item features__item--benefits">
                        <div class="features__image-wrap">
                            <picture class="features__photo">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/technic@1x.webp 1x,
      images/benefits/tablet/technic@2x.webp 2x
    "
                                    media="(max-width: 1439px)" type="image/webp">
                                <source width="138" height="138"
                                    srcset="
      images/benefits/tablet/technic@1x.png 1x,
      images/benefits/tablet/technic@2x.png 2x
    "
                                    media="(max-width: 1439px)" type="image/png">

                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/technic@1x.webp 1x,
      images/benefits/desktop/technic@2x.webp 2x
    "
                                    media="(min-width: 1440px)" type="image/webp">
                                <source width="221" height="221"
                                    srcset="
      images/benefits/desktop/technic@1x.png 1x,
      images/benefits/desktop/technic@2x.png 2x
    "
                                    media="(min-width: 1440px)" type="image/png">

                                <img width="221" height="221" class="features__photo"
                                    src="images/benefits/tablet/technic@1x.png" alt="Пилосос">
                            </picture>

                        </div>
                        <h3 class="features__title">Vacuum cleaner</h3>
                        <p class="features__desc">
                            My main work assistants are -
                            <span>KARCHER</span>
                            equipment.
                            I provide really “crystal” cleaning.
                        </p>
                    </li>
                    <li class="features__item features__item--benefits">
                        <div class="features__icon-wrap">
                            <div class="features__image-wrap">
                                <picture class="features__photo">
                                    <source width="138" height="138"
                                        srcset="
      images/benefits/tablet/quality@1x.webp 1x,
      images/benefits/tablet/quality@2x.webp 2x
    "
                                        media="(max-width: 1439px)" type="image/webp">
                                    <source width="138" height="138"
                                        srcset="
      images/benefits/tablet/quality@1x.png 1x,
      images/benefits/tablet/quality@2x.png 2x
    "
                                        media="(max-width: 1439px)" type="image/png">

                                    <source width="221" height="221"
                                        srcset="
      images/benefits/desktop/quality@1x.webp 1x,
      images/benefits/desktop/quality@2x.webp 2x
    "
                                        media="(min-width: 1440px)" type="image/webp">
                                    <source width="221" height="221"
                                        srcset="
      images/benefits/desktop/quality@1x.png 1x,
      images/benefits/desktop/quality@2x.png 2x
    "
                                        media="(min-width: 1440px)" type="image/png">

                                    <img width="221" height="221" class="features__photo"
                                        src="images/benefits/tablet/quality@1x.png" alt="Знак якості">
                                </picture>

                            </div>
                        </div>
                        <h3 class="features__title">Quality mark</h3>
                        <p class="features__desc">
                            I always ask for
                            <span>customer feedback.</span>
                            If you are not satisfied
                            with the cleaning, I will come right away and fix everything!
                        </p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section section--cleaning-types">
            <div class="container">
                <h2 class="section__title title">What is included in cleaning?</h2>
                <div class="swiper">
                    <ul class="swiper-pagination-rooms"></ul>
                    <div class="swiper-container ">
                        <div class="swiper-wrapper ">
                            <div class="swiper-slide schema--kitchen ">
                                <picture class="rooms__image">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/kitchen@1x.webp 1x,
      images/rooms/mobile/kitchen@2x.webp 2x
    "
                                        media="(max-width: 767px)" type="image/webp">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/kitchen@1x.png 1x,
      images/rooms/mobile/kitchen@2x.png 2x
    "
                                        media="(max-width: 767px)" type="image/png">

                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/kitchen@1x.webp 1x,
      images/rooms/tablet/kitchen@2x.webp 2x
    "
                                        media="(max-width: 1439px)" type="image/webp">
                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/kitchen@1x.png 1x,
      images/rooms/tablet/kitchen@2x.png 2x
    "
                                        media="(max-width: 1439px)" type="image/png">

                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/kitchen@1x.webp 1x,
      images/rooms/desktop/kitchen@2x.webp 2x
    "
                                        media="(min-width: 1440px)" type="image/webp">
                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/kitchen@1x.png 1x,
      images/rooms/desktop/kitchen@2x.png 2x
    "
                                        media="(min-width: 1440px)" type="image/png">

                                    <img width="1160" height="771" src="images/rooms/desktop/kitchen@1x.png"
                                        alt="Фото кухні" loading="lazy">

                                </picture>


                            </div>
                            <div class="swiper-slide  schema--room ">
                                <picture class="rooms__image">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/room@1x.webp 1x,
      images/rooms/mobile/room@2x.webp 2x
    "
                                        media="(max-width: 767px)" type="image/webp">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/room@1x.png 1x,
      images/rooms/mobile/room@2x.png 2x
    "
                                        media="(max-width: 767px)" type="image/png">

                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/room@1x.webp 1x,
      images/rooms/tablet/room@2x.webp 2x
    "
                                        media="(max-width: 1439px)" type="image/webp">
                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/room@1x.png 1x,
      images/rooms/tablet/room@2x.png 2x
    "
                                        media="(max-width: 1439px)" type="image/png">

                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/room@1x.webp 1x,
      images/rooms/desktop/room@2x.webp 2x
    "
                                        media="(min-width: 1440px)" type="image/webp">
                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/room@1x.png 1x,
      images/rooms/desktop/room@2x.png 2x
    "
                                        media="(min-width: 1440px)" type="image/png">

                                    <img width="1160" height="771" src="images/rooms/desktop/room@1x.png"
                                        alt="Фото кімнати" loading="lazy">

                                </picture>

                            </div>
                            <div class="swiper-slide schema--bath ">
                                <picture class="rooms__image">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/bath@1x.webp 1x,
      images/rooms/mobile/bath@2x.webp 2x
    "
                                        media="(max-width: 767px)" type="image/webp">
                                    <source width="335" height="223"
                                        srcset="
      images/rooms/mobile/bath@1x.png 1x,
      images/rooms/mobile/bath@2x.png 2x
    "
                                        media="(max-width: 767px)" type="image/png">

                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/bath@1x.webp 1x,
      images/rooms/tablet/bath@2x.webp 2x
    "
                                        media="(max-width: 1439px)" type="image/webp">
                                    <source width="690" height="459"
                                        srcset="
      images/rooms/tablet/bath@1x.png 1x,
      images/rooms/tablet/bath@2x.png 2x
    "
                                        media="(max-width: 1439px)" type="image/png">

                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/bath@1x.webp 1x,
      images/rooms/desktop/bath@2x.webp 2x
    "
                                        media="(min-width: 1440px)" type="image/webp">
                                    <source width="1160" height="771"
                                        srcset="
      images/rooms/desktop/bath@1x.png 1x,
      images/rooms/desktop/bath@2x.png 2x
    "
                                        media="(min-width: 1440px)" type="image/png">

                                    <img width="1160" height="771" src="images/rooms/desktop/bath@1x.png"
                                        alt="Фото ванної кімнати" loading="lazy">

                                </picture>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--dark-background section--calc-order-cost">
            <div class="container order-cleaning__container relative-positioned">
                <h2 class="section__title title--office-calc">
                    Calculation of the cost of cleaning
                </h2>
                <div class="office-calc__wrap" id="office-calc-block">
                    <div class="form--subscription office-calc__block data-order">
                        <h3 class="form-title data-order__title">Choose the area of ​​the room</h3>
                        <div class="data-order__wrap wrap--square" data-id="square">
                            <div class="data-order__quantity-block">
                                <button type="button" class="control-quantity-btn control-quantity-btn--minus"
                                    data-type="minus" aria-label=" Зменшити кількість квадратних метрів">
                                    <svg class="icon--minus" width="35" height="35">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                                <span class="quantity-block__text quantity-block__value service-quantity">
                                    <span data-name="square" class="square-value">1</span>
                                    feet
                                </span>
                                <button type="button" class="control-quantity-btn control-quantity-btn--plus"
                                    data-type="plus" aria-label="Збільшити кількість квадратних метрів">
                                    <svg class="icon--plus" width="35" height="35">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                </button>
                            </div>
                            <span class="data-order__text">2 per feet</span>
                        </div>
                        <h4 class="form-title data-order__title">Additional services</h4>
                        <ul class="data-order__add-services-list">
                            @foreach ($services as $service)
                                <li class="add-services-list__item">
                                    <label class="service-element" data-id="{{ $service->id }}">
                                        <input class="checkbox" type="checkbox">
                                        <span class="checkbox-custom checkbox-custom--service"></span>
                                        <span class="service-image-wrapper">
                                            <img src="{{ asset($service->image) }}" width="50px" height="50px">
                                        </span>
                                        <span
                                            class="service-element__text"><strong>{{ $service->name }}</strong></span>
                                        &nbsp; -&nbsp;
                                        <span class="service-element__accent"
                                            data-value="{{ $service->price }}">{{ number_format($service->price, 2) }}</span>
                                        &nbsp;
                                    </label>
                                    <div class="data-order__wrap wrap--service isHidden">
                                        <div class="data-order__quantity-block">
                                            <button type="button"
                                                class="control-quantity-btn control-quantity-btn--minus"
                                                data-type="minus"
                                                aria-label="Decrease quantity of {{ $service->name }} by 1">
                                                <svg class="icon--minus" width="35" height="35">
                                                    <use href="images/sprite.svg#icon-minus"></use>
                                                </svg>
                                            </button>
                                            <span class="quantity-block__text quantity-block__value service-quantity"
                                                data-name="{{ $service->id }}">{{ $service->quantity }}</span>
                                            <button type="button"
                                                class="control-quantity-btn control-quantity-btn--plus"
                                                data-type="plus"
                                                aria-label="Increase quantity of {{ $service->name }} by 1">
                                                <svg class="icon--plus" width="35" height="35">
                                                    <use href="images/sprite.svg#icon-plus"></use>
                                                </svg>
                                            </button>
                                        </div>
                                        <span class="data-order__text">Number</span>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                        <h3 class="form-title">Your data</h3>
                        <form class="subscr__form form" method="POST">
                            <ul class="form__user-info list">
                                <li class="row-container">
                                    <div class="form__item form__item--short">
                                        <input class="form__input" type="text" name="userName"
                                            placeholder="Your first name" pattern="[A-Za-z\s]+"
                                            oninvalid="this.setCustomValidity('Please fill in your name.')"
                                            onchange="try{setCustomValidity('')}catch(e){};">
                                    </div>
                                    <div class="form__item form__item--short">
                                        <input class="form__input" type="text" name="userSurname"
                                            placeholder="Your last name" pattern="[A-Za-z\s]+"
                                            oninvalid="this.setCustomValidity('Please fill in your last name.')"
                                            onchange="try{setCustomValidity('')}catch(e){};">
                                    </div>
                                </li>
                                <li class="form__item">
                                    <label class="form__field">
                                        <input class="form__input" type="tel" pattern="\+?[0-9\s\-]+"
                                            name="userTel" placeholder="Phone number (e.g., +1 234 5678 900)"
                                            oninvalid="this.setCustomValidity('Please fill in your phone number using only numbers.')"
                                            onchange="try{setCustomValidity('')}catch(e){};">
                                    </label>
                                </li>
                                <li class="form__item">
                                    <input class="form__input" type="email" name="userEmail"
                                        placeholder="Email (e.g., name@mail.com)"
                                        oninvalid="this.setCustomValidity('Please fill in your email in the format email@mail.com')"
                                        onchange="try{setCustomValidity('')}catch(e){};">
                                </li>
                                <li class="form__item">
                                    <span class="form__wrap">
                                        <input class="form__input" type="text" name="userDate"
                                            placeholder="When do you want the cleaning done?">
                                        <svg class="form__icon icon icon--calendar" width="24" height="24">
                                            <use href="images/sprite.svg#icon-calendar"></use>
                                        </svg>
                                    </span>
                                    <div class="shedule-wrap">
                                        <div class="calendar isHidden">
                                            <div class="calendar__header">
                                                <button class="calendar__prevMonth-btn" type="button"
                                                    aria-label="Go to the previous month in the calendar">
                                                    <svg width="40" height="40">
                                                        <use href="images/sprite.svg#icon-prev-btn "></use>
                                                    </svg>
                                                </button>
                                                <h3 class="calendar__monthYear">October 2023</h3>
                                                <button class="calendar__nextMonth-btn" type="button"
                                                    aria-label="Go to the next month in the calendar">
                                                    <svg width="40" height="40">
                                                        <use href="images/sprite.svg#icon-next-btn"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th class="calendar__day-name">Mon</th>
                                                        <th class="calendar__day-name">Tue</th>
                                                        <th class="calendar__day-name">Wed</th>
                                                        <th class="calendar__day-name">Thu</th>
                                                        <th class="calendar__day-name">Fri</th>
                                                        <th class="calendar__day-name">Sat</th>
                                                        <th class="calendar__day-name">Sun</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="calendar__body"></tbody>
                                            </table>
                                        </div>
                                        <div class="work-shedule isHidden">
                                            <h3 class="work-shedule__title">Work Schedule</h3>
                                            <ul class="work-shedule__list">
                                                <li class="work-shedule__item">
                                                    <ul class="days-list">
                                                        <li lass="days-list__item">Mon</li>
                                                        <li class="days-list__item">Tue</li>
                                                        <li class="days-list__item">Wed</li>
                                                        <li class="days-list__item">Thu</li>
                                                        <li class="days-list__item">Fri</li>
                                                    </ul>
                                                    <p class="work-shedule__text">
                                                        <span class="work-shedule__text-wrap">
                                                            <span>7</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                        <span class="work-shedule__text--space">-</span>
                                                        <span class="work-shedule__text-wrap">
                                                            <span>21</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                    </p>
                                                </li>
                                                <li class="work-shedule__item">
                                                    <ul class="days-list">
                                                        <li class="days-list__item days-list__item--accent">Sat</li>
                                                        <li class="days-list__item days-list__item--accent">Sun</li>
                                                    </ul>
                                                    <p class="work-shedule__text">
                                                        <span class="work-shedule__text-wrap">
                                                            <span>10</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                        <span class="work-shedule__text--space">-</span>
                                                        <span class="work-shedule__text-wrap">
                                                            <span>19</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="form__item">
                                    <span class="form__wrap">
                                        <input class="form__input" type="text" name="userTime"
                                            placeholder="What time is it?">
                                        <svg class="form__icon icon icon--clock" width="24" height="24">
                                            <use href="images/sprite.svg#icon-clock"></use>
                                        </svg>
                                    </span>
                                    <div class="shedule-wrap">
                                        <div class="time-picker-wrap isHidden">
                                            <div class="time-picker__block">
                                                <div class="time-picker__hours">15</div>
                                                <div class="time-picker__separator">:</div>
                                                <div class="time-picker__minutes">00</div>
                                            </div>
                                            <div class="time-picker__tablo tablo--hours">
                                                <div class="number hours am" data-id="12">12</div>
                                                <div class="number hours am disabled" data-id="01">1</div>
                                                <div class="number hours am disabled" data-id="02">2</div>
                                                <div class="number hours am disabled" data-id="03">3</div>
                                                <div class="number hours am disabled" data-id="04">4</div>
                                                <div class="number hours am disabled" data-id="05">5</div>
                                                <div class="number hours am disabled" data-id="06">6</div>
                                                <div class="number hours am" data-id="07">7</div>
                                                <div class="number hours am" data-id="08">8</div>
                                                <div class="number hours am" data-id="09">9</div>
                                                <div class="number hours am" data-id="10">10</div>
                                                <div class="number hours am" data-id="11">11</div>
                                                <div class="number hours pm disabled" data-id="24">24</div>
                                                <div class="number hours pm" data-id="13">13</div>
                                                <div class="number hours pm" data-id="14">14</div>
                                                <div class="number hours pm active" data-id="15">15</div>
                                                <div class="number hours pm" data-id="16">16</div>
                                                <div class="number hours pm" data-id="17">17</div>
                                                <div class="number hours pm" data-id="18">18</div>
                                                <div class="number hours pm" data-id="19">19</div>
                                                <div class="number hours pm" data-id="20">20</div>
                                                <div class="number hours pm" data-id="21">21</div>
                                                <div class="number hours pm disabled" data-id="22">22</div>
                                                <div class="number hours pm disabled" data-id="23">23</div>
                                            </div>
                                            <div class="time-picker__tablo tablo--minutes isHidden">
                                                <div class="number minutes am active" data-id="00">00</div>
                                                <div class="number minutes am" data-id="05">05</div>
                                                <div class="number minutes am" data-id="10">10</div>
                                                <div class="number minutes am" data-id="15">15</div>
                                                <div class="number minutes am" data-id="20">20</div>
                                                <div class="number minutes am" data-id="25">25</div>
                                                <div class="number minutes am" data-id="30">30</div>
                                                <div class="number minutes am" data-id="35">35</div>
                                                <div class="number minutes am" data-id="40">40</div>
                                                <div class="number minutes am" data-id="45">45</div>
                                                <div class="number minutes am" data-id="50">50</div>
                                                <div class="number minutes am" data-id="55">55</div>
                                            </div>
                                            <button class="time-picker__btn" type="button"
                                                aria-label="Підтвердити обраний час замовлення">ОК</button>
                                        </div>
                                        <div class="work-shedule isHidden">
                                            <h3 class="work-shedule__title">Work Schedule</h3>
                                            <ul class="work-shedule__list">
                                                <li class="work-shedule__item">
                                                    <ul class="days-list">
                                                        <li class="days-list__item">Mon</li>
                                                        <li class="days-list__item">Tue</li>
                                                        <li class="days-list__item">Wed</li>
                                                        <li class="days-list__item">Thu</li>
                                                        <li class="days-list__item">Fri</li>
                                                    </ul>
                                                    <p class="work-shedule__text">
                                                        <span class="work-shedule__text-wrap">
                                                            <span>7</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                        <span class="work-shedule__text--space">-</span>
                                                        <span class="work-shedule__text-wrap">
                                                            <span>21</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                    </p>
                                                </li>
                                                <li class="work-shedule__item">
                                                    <ul class="days-list">
                                                        <li class="days-list__item days-list__item--accent">Sat</li>
                                                        <li class="days-list__item days-list__item--accent">Sun</li>
                                                    </ul>
                                                    <p class="work-shedule__text">
                                                        <span class="work-shedule__text-wrap">
                                                            <span>10</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                        <span class="work-shedule__text--space">-</span>
                                                        <span class="work-shedule__text-wrap">
                                                            <span>19</span>
                                                            <span class="work-shedule__text--above">00</span>
                                                        </span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="form__item">
                                    <span class="form__wrap">
                                        <input class="form__input form__input--long-placeholder form__input--location"
                                            type="text" name="userLocation"
                                            placeholder="Your full address (including house number and apartment)"
                                            oninvalid="this.setCustomValidity('Please fill in your address')"
                                            onchange="try{setCustomValidity('')}catch(e){};">
                                        <svg class="form__icon icon form__icon--vertical-centered" width="24"
                                            height="24">
                                            <use href="images/sprite.svg#icon-location"></use>
                                        </svg>
                                    </span>
                                    <label class="form__label">
                                        *We work in the city of charlotte and +30 km outside the city (travel outside
                                        the city is paid
                                        separately)
                                    </label>
                                </li>
                                <li class="form__item">
                                    <textarea class="form__input form__comment" name="userComment" placeholder="Your comment"></textarea>
                                </li>
                            </ul>
                            <div class="form__agreement-block">
                                <p class="form__error-text form__policy-error-text isHidden">
                                    *Agreement with the company's terms and conditions is mandatory
                                </p>
                                <label class="form__agreement">
                                    <input checked class="checkbox" type="checkbox" name="studio-policy-check"
                                        value="accept-policy">
                                    <span class="checkbox-custom"></span>
                                    <span class="form__check-text">
                                        By placing an order, I agree to&nbsp;
                                        <a href="#" class="form__agreement-link">
                                            public offer agreement
                                        </a>
                                        and&nbsp;
                                        <a href="#" class="form__agreement-link">
                                            privacy policy
                                        </a>
                                    </span>
                                </label>
                                <label class="form__agreement">
                                    <input checked class="checkbox" type="checkbox" name="studio-policy-data"
                                        value="accept-data">
                                    <span class="checkbox-custom"></span>
                                    <span class="form__check-text">
                                        I consent to the use of my personal data for
                                        the purpose of sending subscriptions and promotional offers.
                                    </span>
                                </label>
                            </div>
                            <ul class="form__period-frequency-buttons">
                                <li class="frequency__item">
                                    <button class="option-button frequency-one-time btn frequency__btn" type="button"
                                        data-id="One-time" data-type="userFrequency" aria-label="One-time payment">
                                        One-time
                                    </button>
                                </li>
                                <li class="frequency__item">
                                    <button class="option-button frequency-weekly btn frequency__btn" type="button"
                                        data-id="Weekly" data-type="userFrequency" aria-label="Weekly payment">
                                        Weekly
                                    </button>
                                </li>
                                <li class="frequency__item">
                                    <button class="option-button frequency-biweekly btn frequency__btn" type="button"
                                        data-id="Bi-weekly" data-type="userFrequency" aria-label="Bi-weekly payment">
                                        Bi-weekly
                                    </button>
                                </li>
                                <li class="frequency__item">
                                    <button class="option-button frequency-monthly btn frequency__btn" type="button"
                                        data-id="Monthly" data-type="userFrequency" aria-label="Monthly payment">
                                        Monthly
                                    </button>
                                </li>
                            </ul>
                            <p class="form__payment-error-text form__error-text isHidden">
                                *Select payment method
                            </p>
                            <ul class="form__payment-buttons">
                                <!-- Visa/PayPal/Google Pay Button -->
                                <li class="payment__item">
                                    <button
                                        class="option-button payment-online btn btn--light payment__btn card-payment-btn btn--active"
                                        type="button" id="card-payment-btn">
                                        <span>Visa/PayPal/Google Pay</span>
                                    </button>
                                </li>

                                <!-- Cash Button -->
                                <li class="payment__item">
                                    <button
                                        class="option-button payment-cash btn btn--light payment__btn cash-payment-btn"
                                        type="button" id="cash-payment-btn">
                                        <span>In cash</span>
                                    </button>
                                </li>
                            </ul>
                            <div id="card-details-container" class="card-details-container hidden">
                                <div id="card-details" class="card-details">
                                    <!-- Input Container -->
                                    <div class="input-container">
                                        <input type="text" id="card-combined" placeholder="Card Number"
                                            class="form-control" />
                                    </div>

                                    <div class="expiry-cvc">
                                        <input type="text" id="expiry-date" placeholder="MM/YY"
                                            class="form-control" />
                                        <input type="text" id="cvc" placeholder="CVC"
                                            class="form-control" />
                                    </div>

                                    <div class="input-container">
                                        <input type="text" id="price" placeholder="Enter Amount"
                                            value="" readonly class="form-control" />
                                    </div>

                                    <div class="card-icons">
                                        <img id="card-icon-visa" src="/images/cards/Visa_Inc.png" alt="Visa Card" />
                                        <img id="card-icon-mastercard" src="/images/cards/Mastercard.png"
                                            alt="MasterCard" />
                                        <img id="card-icon-amex" src="/images/cards/Express.png"
                                            alt="American Express" />
                                        <img id="card-icon-paypal" src="/images/cards/PayPal.png" alt="PayPal" />
                                    </div>
                                    <div class="card_btn">
                                        <button id="submit-payment" class="btn btn-primary">Submit Payment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="office-calc__block full-order-table">
                        <div class="table__header table__block">
                            <span>Service</span>
                            <span>Cost</span>
                        </div>
                        <ul class="table__data">
                            <li class="table__item table__block">
                                <span>
                                    Area:
                                    <span class="square-value square-value-total">1</span> feet</span>
                                <span class="service-value" data-service="square">2</span>
                            </li>
                        </ul>
                        <div class="table__sum table__block">
                            <span>Cost</span>
                            <span class="total-order-value">2</span>
                        </div>
                        <div class="animated-btn-wrap">
                            <button type="submit" class=" action-btn btn calc-btn blob-btn">
                                Order cleaning
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                    </span>
                                </span>
                                <svg class="animated-btn-icon">
                                    <defs>
                                        <filter id="goo-8" x="0%" y="0%" width="100%" height="100%">
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                            </feGaussianBlur>
                                            <feColorMatrix in="blur" type="matrix"
                                                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                            </feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="discount" id="office-calc-discount">
                        <span class="discount__value">-10%</span>
                        <span class="discount__text">for the first cleaning!</span>
                        <span class="discount__remark">
                            *Indicate that this is your first order in the comment field
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--buildings">
            <div class="container">
                <div class="cleaning__banner banner banner--services">
                    <h3 class="title--white title--no-margin title--services">
                        Didn't find the service you need?
                    </h3>
                    <p class="text text--services">
                        Write to us and we will help you choose the right cleaning services and advise you on any
                        questions!
                    </p>
                    <div class="animated-btn-wrap">
                        <a href="tel:+12064743536"
                            class="hero__btn  btn action-btn blob-btn blob-btn--light blob-btn--white-border"
                            data-support-modal-open>
                            Contact the manager
                            <span class="blob-btn__inner blob-btn__inner--light">
                                <span class="blob-btn__blobs">
                                    <span class="blob-btn__blob blob-btn__blob--light"></span>
                                    <span class="blob-btn__blob blob-btn__blob--light"></span>
                                    <span class="blob-btn__blob blob-btn__blob--light"></span>
                                    <span class="blob-btn__blob blob-btn__blob--light"></span>
                                </span>
                            </span>
                        </a>
                        <svg class="animated-btn-icon">
                            <defs>
                                <filter id="goo-18" x="0%" y="0%" width="100%" height="100%">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                    </feGaussianBlur>
                                    <feColorMatrix in="blur" type="matrix"
                                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                    </feColorMatrix>
                                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--dark-background section--questions no-padding-top">
            <div class="container">
                <h2 class="discount__title">Seasonal discounts</h2>
                <div class="discounts__slider">
                    <div class="swiper-container-parent"></div>
                    <div class="swiper-pagination swiper-pagination-parent"></div>
                </div>
            </div>
        </section>

        <section class="section reviews">
            <div class="container reviews__container">
                <h2 class="section__title title">Reviews about Sparkiling Cleaning Houses</h2>
                <div class="inner-swiper">
                    <div class="gallery">
                        <ul class="swiper-wrapper reviews__swiper"></ul>
                    </div>
                    <div class="gallery__swiper-pagination"></div>
                </div>
                <div class="mobile__reviews">
                    <div class="mobile__gallery">
                        <ul class="mobile__reviews-list"></ul>
                        <div class="animated-btn-wrap">
                            <button class="mobile__show-more-btn reviews__btn btn blob-btn" type="button"
                                aria-label="Показати більше відгуків">
                                Show more
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                    </span>
                                </span>
                            </button>
                            <svg class="animated-btn-icon">
                                <defs>
                                    <filter id="goo-7" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <ul class="reviews__button-list">
                    <li class="button-list__item">
                        <div class="animated-btn-wrap">
                            <a target="_blank" href="https://www.google.com/search?q=cleanhouses@sparkingch"
                                class="btn action-btn reviews__btn btn--centered blob-btn">
                                Leave a review on Google
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                        <span class="blob-btn__blob"></span>
                                    </span>
                                </span>
                            </a>
                            <svg class="animated-btn-icon">
                                <defs>
                                    <filter id="goo-11" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </li>
                    <li class="button-list__item">
                        <div class="animated-btn-wrap">
                            <a href="https://www.facebook.com" target="_blank"
                                class="btn action-btn reviews__btn btn--centered blob-btn blob-btn--light">
                                Leave a review on Facebook
                                <span class="blob-btn__inner blob-btn__inner--light">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob--light"></span>
                                        <span class="blob-btn__blob blob-btn__blob--light"></span>
                                        <span class="blob-btn__blob blob-btn__blob--light"></span>
                                        <span class="blob-btn__blob blob-btn__blob--light"></span>
                                    </span>
                                </span>
                            </a>
                            <svg class="animated-btn-icon">
                                <defs>
                                    <filter id="goo-10" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section section--dark-background section--questions no-padding-top">
            <div class="container">
                <h2 class="feq__title title">Frequently Asked Questions</h2>
                <div class="section__container questions__container">
                    <ul class="questions__list">
                        <li class="questions__item accordion no-padding-top">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">How much does cleaning cost?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    For residential homes and apartments, we offer a monthly subscription plan starting
                                    at
                                    <span>$99</span>.
                                </p>
                                <p class="questions__text">
                                    This plan includes 1 deep cleaning and 1 maintenance cleaning each month.
                                </p>
                                <p class="questions__text">
                                    For office and restaurant cleaning, our rate is
                                    <span>$0.20 per sq. ft.</span>.
                                </p>
                                <p class="questions__text">
                                    Post-renovation cleaning costs are
                                    <span>$0.50 per sq. ft.</span>.
                                </p>
                            </div>
                        </li>
                        <li class="questions__item accordion">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">What cleaning products do you use?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    We only use high-quality, eco-friendly cleaning solutions that are safe for children
                                    and pets,
                                    along with professional-grade equipment. Our team ensures that every product is
                                    non-toxic and biodegradable.
                                </p>
                            </div>
                        </li>
                        <li class="questions__item accordion">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">How long does cleaning take?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    The duration of cleaning depends on the size of the space and the level of dirt.
                                    Typically, our cleaners complete the job within
                                    2-4 hours.
                                </p>
                            </div>
                        </li>
                        <li class="questions__item accordion">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">What is a cleaning subscription?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    A subscription is a unique promotional offer for a monthly cleaning package!
                                    The advantage of a subscription is that you receive 1 deep cleaning and 1 regular
                                    maintenance cleaning
                                    per month at an affordable price. Once you sign up, you won’t have to think about
                                    scheduling
                                    again — we will arrive at the agreed time.
                                </p>
                            </div>
                        </li>
                        <li class="questions__item accordion">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">What quality guarantee do you offer?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    We closely monitor our cleaning quality and collect feedback from all clients. If
                                    you're not satisfied with the cleaning quality,
                                    we'll come back to clean again within a few days.
                                </p>
                            </div>
                        </li>
                        <li class="questions__item accordion">
                            <div class="relative-positioned accordion__intro">
                                <h3 class="question__title">How to order and pay for cleaning?</h3>
                                <button type="button" class="toggle-question-btn plus-btn">
                                    <svg class="toggle-question-icon icon--plus" width="23" height="23"
                                        aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-plus"></use>
                                    </svg>
                                    <svg class="toggle-question-icon icon--minus isHidden" width="23"
                                        height="23" aria-label="toggle to show/hide answer to the question">
                                        <use href="images/sprite.svg#icon-minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="accordion__content">
                                <p class="questions__text">
                                    You can easily order and pay for cleaning directly on our website! Just fill out the
                                    form with your information, select the date and address, and choose a convenient
                                    payment method (online or cash upon arrival). Additionally, on our website, you can
                                    calculate the cost of cleaning using
                                    <a href="./calc-order.html">
                                        <span>our calculator!</span>
                                    </a>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="animated-btn-wrap">
                        <button type="button" data-support-modal-open
                            class="btn action-btn order-btn btn--centered ask-btn blob-btn"
                            aria-label="Ask your question">
                            Ask your question
                            <span class="blob-btn__inner">
                                <span class="blob-btn__blobs">
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                </span>
                            </span>
                            <svg class="animated-btn-icon">
                                <defs>
                                    <filter id="goo-9" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <footer class="footer">
        <div class="footer__wrap">
            <div class="container footer__container">
                <div class="footer__about-section footer__section">
                    <h2 class="footer__title">About Us</h2>
                    <ul class="about">
                        <li class="about__item footer__item">
                            <a href="./services.html" class="about__link footer__link">
                                Services
                            </a>
                        </li>
                        <li class="about__item footer__item">
                            <a href="./calc-order.html" class="about__link footer__link">
                                Cost
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__services-section footer__section">
                    <h2 class="footer__title">Services</h2>
                    <ul class="services">
                        <li class="services_item footer__item">
                            <a href="./index.html" class="services_link footer__link">
                                Cleaning of apartments and houses
                            </a>
                        </li>
                        <li class="services_item footer__item">
                            <a href="./office.html" class="services_link footer__link">
                                Office and restaurant cleaning
                            </a>
                        </li>
                        <li class="services__item footer__item">
                            <a href="./after-repair.html" class="services__link footer__link">
                                Cleaning after renovation
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__contacts-section footer__section">
                    <h2 class="footer__title">Contacts</h2>
                    <ul class="footer__contacts">
                        <li class="contacts_item footer__item">In touch 24/7</li>
                        <li class="contacts_item">
                            <a href="tel:+48534517801" class="contacts__link footer__link">
                                +1 206 4743 536
                            </a>
                        </li>
                        <li class="contacts__item footer__item">
                            <a href="mailto:email@mail.com" class="contacts__link footer__link">
                                yaserarafet@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__support-section footer__section">
                    <h2 class="footer__title">Our technical support</h2>
                    <ul class="socials footer__socials">
                        <li class="socials__item socials__item--white-bg">
                            <a class="socials__link" href="https://www.instagram.com/"
                                aria-label="Посилання на Інстраграм компанії" target="_blank">
                                <svg class="socials__icon socials__inst-icon socials__icon--footer" width="40"
                                    height="40">
                                    <use href="images/sprite.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="socials__item socials__item--white-bg">
                            <a class="socials__link" href="https://www.facebook.com"
                                aria-label="Посилання на Фейсбук компанії" target="_blank">
                                <svg class="socials__icon socials__facebook-icon socials__icon--footer"
                                    width="40" height="40">
                                    <use href="images/sprite.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="socials__item socials__item--white-bg">
                            <a class="socials__link" href="https://www.messenger.com/"
                                aria-label="Посилання на Вотсап компанії" target="_blank">
                                <svg class="socials__icon socials__whatsApp-icon socials__icon--footer"
                                    width="40" height="40">
                                    <use href="images/sprite.svg#icon-whatsApp"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container footer__copyright">
                <span class="copyright__text"> © 2024 All rights reserved</span>
                <a href="#" class="copyright__text">Privacy Policy</a>
                <a href="#" class="copyright__text">Public Offer Agreement</a>
            </div>
        </div>
    </footer>

    <ul id="scrollToTopBtn" class="scroll-to-top-btn">
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
        <li class="circle"></li>
    </ul>

    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="./js/index.bundle.js"></script>
    <script src="./js/payment.js"></script>
    <script src="https://js.stripe.com/v3/"></script>
</body>

</html>
