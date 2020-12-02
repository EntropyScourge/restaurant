const menus = () => [
{
    id: 'header',
    type: 'h1',
    text: 'Our menu'
},
{
    id: 'starters',
    type: 'div',
},
{
    id: 'starters-header',
    type: 'h2',
    text: 'Starters:',
    parent: 'starters'
},
{
    text: 'kraut bombs......£13.00',
    parent: 'starters'
},
{
    text: 'japanese seaweed & farm-to-table arugula........£10.00',
    parent: 'starters'
},
{
    text: 'invigorated pork belly with ham & homespun marrow........£14.00',
    parent: 'starters'
},
{
    id: 'mains',
    type: 'div'
},
{
    id: 'mains-header',
    type: 'h2',
    text: 'Mains:',
    parent: 'mains'
},
{
    text: 'homemade vinegar........£18.00',
    parent: 'mains'
},
{
    text: 'breaded monkfish......£16.00',
    parent: 'mains'
},
{
    text: 'fermented bluefish balls with acorn bruschetta........£16.00',
    parent: 'mains'
},
{
    id: 'dessert',
    type: 'div'
},
{
    id: 'dessert-header',
    type: 'h2',
    text: 'Dessert:',
    parent: 'dessert'
},
{
    text: 'ramp & pressed pepper crumble........£15.00',
    parent: 'dessert'
},
{
    text: 'rubbed gravlax with farfalle waffle........£10.00',
    parent: 'dessert'
},
{
    text: 'fennel & sheltered water pancake........£9.00',
    parent: 'dessert'
},
{
    text: 'sprouted sardine discs........£16.00',
    parent: 'dessert'
}
];

export default menus;