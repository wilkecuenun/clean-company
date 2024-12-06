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
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
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
        <section class="section  section--dark-background no-padding-top">
            <div class="container">
                <h2 class="servicelist__title">Our Services</h2>
                <ul class="block-wrapper services-types__list"></ul>
                <h2 class="cost__title title--dry-clean">Cost of Dry Cleaning</h2>
                <div class="swiper dry-clean__swiper">
                    <ul class="dry-clean__list swiper-wrapper"></ul>
                </div>
                <h2 class="transformation__title title title--comparison">Transformation of Cleanliness</h2>
                <div class="comparison__container">
                    <ul class="comparison__categories-list"></ul>
                    <ul class="comparison__slider-list"></ul>
                    <ul class="more-less-btn-list">
                        <li class="animated-btn-wrap btn-wrap--more isVisible">
                            <button class="mobile__show-more-btn comparison__show-more-btn btn blob-btn"
                                type="button" aria-label="Показати більше фото до/після">
                                Show More
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
                                    <filter id="goo-19" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </li>
                        <li class="animated-btn-wrap btn-wrap--less">
                            <button class="mobile__show-more-btn comparison__show-more-btn btn blob-btn"
                                type="button" aria-label="Показати менше фото до/після">
                                Show less
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
                                    <filter id="goo-20" x="0%" y="0%" width="100%" height="100%">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
                                        <feColorMatrix in="blur" type="matrix"
                                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                        </feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </li>
                    </ul>
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
                                <svg class="socials__icon socials__facebook-icon socials__icon--footer" width="40"
                                    height="40">
                                    <use href="images/sprite.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="socials__item socials__item--white-bg">
                            <a class="socials__link" href="https://www.messenger.com/"
                                aria-label="Посилання на Вотсап компанії" target="_blank">
                                <svg class="socials__icon socials__whatsApp-icon socials__icon--footer" width="40"
                                    height="40">
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
    <script src="./js/services.bundle.js"></script>
</body>

</html>
