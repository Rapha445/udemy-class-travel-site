import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import HighlightedLinks from './modules/HighlightedLinks';
import Modal from './modules/Modal'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new Modal();

let mobileMenu = new MobileMenu();

let stickyHeader = new StickyHeader();

let highlightedLinks = new HighlightedLinks();

if (module.hot) {
    module.hot.accept()
};

