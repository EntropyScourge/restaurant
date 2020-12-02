const contact = () => [
{
    id: 'contact',
    type: 'h1',
    text: 'Contact:'
},
{
    id: 'address',
    type: 'div',
},
{
    text: 'Pat Donald\'s',
    type: 'div',
    parent: 'address'
},
{
    text: '43 Qumpin Way',
    type: 'div',
    parent: 'address'
},
{
    text: 'Stangerford',
    type: 'div',
    parent: 'address'
},
{
    text: 'C3P0 R2D2',
    type: 'div',
    parent: 'address'
},
{
    text: '01234 567890'
},
{
    text: 'enquiries@patdonalds.com'
}
];

export default contact;