import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class HighlightedLinks {
    constructor() {
        this.pageSections = document.querySelectorAll(".page-section");
        this.siteLogo = document.querySelector(".site-header__logo");
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }
    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200));
        window.addEventListener("scroll", debounce(() => this.runOnScroll(), 200));
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight
        }, 333))
    }
    runOnScroll() {
        this.determineScrollDirection()
        this.pageSections.forEach(el => this.calcSection(el));
    }
    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        }
        this.previousScrollY = window.scrollY;
    }
    calcSection(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;
            if (scrollPercent < 82 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(matchingLink).classList.add("is-current-link");
            }
            if (scrollPercent > 82 && this.scrollDirection == 'up') {
                let matchingLink = el.getAttribute('data-matching-link');
                document.querySelector(matchingLink).classList.remove('is-current-link');
            }
        }
        if (window.scrollY == 0) {
            let matchingLink = el.getAttribute("data-matching-link");
            document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
            this.siteLogo.classList.add("site-header__logo--is-current");
        } else {
            this.siteLogo.classList.remove("site-header__logo--is-current");
        }
    }
}

export default HighlightedLinks;