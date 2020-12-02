import loadContent from './loadContent';
import intro from './intro';
import menus from './menus';
import contact from './contact';

loadContent(intro(), 'intro-container');
const content = document.getElementById('content');

document.getElementById('intro-button').addEventListener("click", () => {
    content.removeChild(content.children[0]);
    loadContent(intro(), 'intro-container');
});

document.getElementById('menus-button').addEventListener("click", () => {
    content.removeChild(content.children[0]);
    loadContent(menus(), 'menus-container');
});

document.getElementById('contact-button').addEventListener("click", () => {
    content.removeChild(content.children[0]);
    loadContent(contact(), 'contact-container');
});