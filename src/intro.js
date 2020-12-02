const intro = () => [
{
    id: 'header',
    type: 'h1',
    text: `Welcome to Pat Donald's restaurant!`
},

{
    id: 'subheader',
    type: 'h2',
},

{
    id: 'subheader-text',
    type: 'em',
    text: 'Est. 1946',
    parent: 'subheader'
},

{
    id: 'main-photo',
    type: 'img',
    text: '',
    attr: [{attr:'src', value:'../src/res1.jpg'}, {attr:'width', value:'500px'}]

},

{
    id: 'copy-container',
    type: 'div'
},

{
    id: 'para-1',
    text: `Come eat here for the finest dining, the finest wining, and the finest atmosphere! We even serve food!`,
    parent: 'copy-container'
},

{
    id: 'para-2',
    text: `This restaurant is really really good, but don\'t just take our word for it, ask our customers!`,
    parent: 'copy-container'
},

{
    id: 'quote-1',
    type: 'div',
    text: `"This is an extremely good restaurant" - some dude who is definitely a real customer`,
    attr: [{attr:'class', value:'quote'}],
    parent: 'copy-container'
},

{
    id: 'para-3',
    text: `So come along right now and spend lots of money in our lovely wonderful restaurant! You won't regret it, and that's a fact! Or at least it will be in the future presumably, after you have been to our restaurant...`,
    parent: 'copy-container'
},

{
    id: 'para-4',
    text: `Seriously, we could gush on and on all day about how great this restaurant is, and we kind of need to to be honest, because this home page isn't going to write itself. It'll knock your socks off!
    Not literally of course, but you get the idea. And we're sure they'll be plenty more ideas you'll get in the fascinating conversations you'll have by dining here. Conversations you could have
    absolutely nowhere else because the atmosphere in this lovely wonderful restaurant facilitates them so much. In fact, reputable scientists that certainly exist have confirmed through extensive peer-reviewed research that
    our restaurant provides the most intellectually stimulating ambience of any such establishment in the world!`,
    parent: 'copy-container'
},

{
    id: 'para-5',
    text: `And believe us, we haven't even got to the food yet! Oh my goodness, the food! O, what wondrous sensations of flavour await thee! You'll never want to eat anywhere else ever again. You can prepare yourselves by
    disposing of your fridge, cooker and all other appliances and utensils necessary for the storage and preparation of food, because trust us, you ain't gonna need 'em any longer.`,
    parent: 'copy-container'
},

{
    id: 'conclusion',
    text: `So in conclusion, `
},

{
    id: 'creepy',
    type: 'em',
    text: `come join us! It's bliss!`,
    parent: 'conclusion'
}

];

export default intro;