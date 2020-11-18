import intro from './intro';

const loadContent = () => {

    function addComponent(component) {
        const type = component.type ? component.type : 'p';
        const element = document.createElement(type);
        element.setAttribute('id', component.id);
        if (component.text) element.textContent = component.text;
        const attr = component.attr ? component.attr : [];
        attr.forEach(attribute => {
          element.setAttribute(attribute.attr, attribute.value);
        });
        const parent = component.parent ? component.parent : 'content';
        document.getElementById(parent).appendChild(element);
    }

    const content = document.getElementById('content');
    const introContent = intro();

    introContent.forEach(component => {
      addComponent(component);
    });

    /*const header = createComponent('h1', 'Welcome to Fat Donald\'s restaurant!');
    content.appendChild(header);

    const subHeader = createComponent('h2');
    const established = createComponent('em', 'Est. 1946');
    subHeader.appendChild(established);
    content.appendChild(subHeader);
    
    const mainImage = document.createElement('img');
    mainImage.src = '../src/res1.jpg';
    mainImage.id = 'main-photo';
    mainImage.setAttribute('width', '500px');
    content.appendChild(mainImage);
    
    const paras = [];
    paras.push(createComponent('p', 'Come eat here for the finest dining, the finest wining, and the finest atmosphere! We even serve food!'));
    paras.push(createComponent('p', 'This restaurant is really really good, but don\'t just take our word for it, ask our customers!'));
    paras.push(createComponent('div', '"This is an extremely good restaurant" - some dude who is definitely a real customer', 'quote'));
    paras.push(createComponent('p', `So come along right now and spend lots of money in our lovely wonderful restaurant! You won't regret it, and that's a fact! Or at least it will be in the future presumably, after you have been to our restaurant...`))
    paras.push(createComponent('p', `Seriously, we could gush on and on all day about how great this restaurant is, and we kind of need to to be honest, because this home page isn't going to write itself. It'll knock your socks off!
    Not literally of course, but you get the idea. And we're sure they'll be plenty more ideas you'll get in the fascinating conversations you'll have by dining here. Conversations you could have
    absolutely nowhere else because the atmosphere in this lovely wonderful restaurant facilitates them so much. In fact, reputable scientists that certainly exist have confirmed through extensive peer-reviewed research that
   our restaurant provides the most intellectually stimulating ambience of any such establishment in the world!`));
    paras.push(createComponent('p', `And believe us, we haven't even got to the food yet! Oh my goodness, the food! O, what wondrous sensations of flavour await thee! You'll never want to eat anywhere else ever again. You can prepare yourselves by
    disposing of your fridge, cooker and all other appliances and utensils necessary for the storage and preparation of food, because trust us, you ain't gonna need 'em any longer.`));
    paras.push(createComponent('p', `And believe us, we haven't even got to the food yet! Oh my goodness, the food! O, what wondrous sensations of flavour await thee! You'll never want to eat anywhere else ever again. You can prepare yourselves by
    disposing of your fridge, cooker and all other appliances and utensils necessary for the storage and preparation of food, because trust us, you ain't gonna need 'em any longer.`));
    const creepy = createComponent('em', `come join us! It's bliss!`);
    const conclusion = createComponent('p', `So in conclusion, `);
    conclusion.appendChild(creepy);
    paras.push(conclusion);

    paras.forEach(para => {
      content.appendChild(para);
    });*/
    return content;
}

export default loadContent;