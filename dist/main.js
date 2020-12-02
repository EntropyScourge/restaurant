(()=>{"use strict";const e=(e,t)=>{const a=[];let n=1;const r=document.createElement("div");r.id=t,r.className="content-container",e.forEach((e=>{!function(e,t){const r=e.type?e.type:"p",o=document.createElement(r),s=e.id?e.id:"para-"+n++;o.setAttribute("id",s),e.text&&(o.textContent=e.text),(e.attr?e.attr:[]).forEach((e=>{o.setAttribute(e.attr,e.value)})),a.push(o),e.parent?a.find((t=>t.id===e.parent)).appendChild(o):t.appendChild(o)}(e,r)})),document.getElementById("content").appendChild(r)};e([{id:"header",type:"h1",text:"Welcome to Pat Donald's restaurant!"},{id:"subheader",type:"h2"},{id:"subheader-text",type:"em",text:"Est. 1946",parent:"subheader"},{id:"main-photo",type:"img",text:"",attr:[{attr:"src",value:"../dist/res1.jpg"},{attr:"width",value:"500px"}]},{id:"copy-container",type:"div"},{id:"para-1",text:"Come eat here for the finest dining, the finest wining, and the finest atmosphere! We even serve food!",parent:"copy-container"},{id:"para-2",text:"This restaurant is really really good, but don't just take our word for it, ask our customers!",parent:"copy-container"},{id:"quote-1",type:"div",text:'"This is an extremely good restaurant" - some dude who is definitely a real customer',attr:[{attr:"class",value:"quote"}],parent:"copy-container"},{id:"para-3",text:"So come along right now and spend lots of money in our lovely wonderful restaurant! You won't regret it, and that's a fact! Or at least it will be in the future presumably, after you have been to our restaurant...",parent:"copy-container"},{id:"para-4",text:"Seriously, we could gush on and on all day about how great this restaurant is, and we kind of need to to be honest, because this home page isn't going to write itself. It'll knock your socks off!\n    Not literally of course, but you get the idea. And we're sure they'll be plenty more ideas you'll get in the fascinating conversations you'll have by dining here. Conversations you could have\n    absolutely nowhere else because the atmosphere in this lovely wonderful restaurant facilitates them so much. In fact, reputable scientists that certainly exist have confirmed through extensive peer-reviewed research that\n    our restaurant provides the most intellectually stimulating ambience of any such establishment in the world!",parent:"copy-container"},{id:"para-5",text:"And believe us, we haven't even got to the food yet! Oh my goodness, the food! O, what wondrous sensations of flavour await thee! You'll never want to eat anywhere else ever again. You can prepare yourselves by\n    disposing of your fridge, cooker and all other appliances and utensils necessary for the storage and preparation of food, because trust us, you ain't gonna need 'em any longer.",parent:"copy-container"},{id:"conclusion",text:"So in conclusion, "},{id:"creepy",type:"em",text:"come join us! It's bliss!",parent:"conclusion"}],"intro-container");const t=document.getElementById("content");document.getElementById("intro-button").addEventListener("click",(()=>{t.removeChild(t.children[0]),e([{id:"header",type:"h1",text:"Welcome to Pat Donald's restaurant!"},{id:"subheader",type:"h2"},{id:"subheader-text",type:"em",text:"Est. 1946",parent:"subheader"},{id:"main-photo",type:"img",text:"",attr:[{attr:"src",value:"../dist/res1.jpg"},{attr:"width",value:"500px"}]},{id:"copy-container",type:"div"},{id:"para-1",text:"Come eat here for the finest dining, the finest wining, and the finest atmosphere! We even serve food!",parent:"copy-container"},{id:"para-2",text:"This restaurant is really really good, but don't just take our word for it, ask our customers!",parent:"copy-container"},{id:"quote-1",type:"div",text:'"This is an extremely good restaurant" - some dude who is definitely a real customer',attr:[{attr:"class",value:"quote"}],parent:"copy-container"},{id:"para-3",text:"So come along right now and spend lots of money in our lovely wonderful restaurant! You won't regret it, and that's a fact! Or at least it will be in the future presumably, after you have been to our restaurant...",parent:"copy-container"},{id:"para-4",text:"Seriously, we could gush on and on all day about how great this restaurant is, and we kind of need to to be honest, because this home page isn't going to write itself. It'll knock your socks off!\n    Not literally of course, but you get the idea. And we're sure they'll be plenty more ideas you'll get in the fascinating conversations you'll have by dining here. Conversations you could have\n    absolutely nowhere else because the atmosphere in this lovely wonderful restaurant facilitates them so much. In fact, reputable scientists that certainly exist have confirmed through extensive peer-reviewed research that\n    our restaurant provides the most intellectually stimulating ambience of any such establishment in the world!",parent:"copy-container"},{id:"para-5",text:"And believe us, we haven't even got to the food yet! Oh my goodness, the food! O, what wondrous sensations of flavour await thee! You'll never want to eat anywhere else ever again. You can prepare yourselves by\n    disposing of your fridge, cooker and all other appliances and utensils necessary for the storage and preparation of food, because trust us, you ain't gonna need 'em any longer.",parent:"copy-container"},{id:"conclusion",text:"So in conclusion, "},{id:"creepy",type:"em",text:"come join us! It's bliss!",parent:"conclusion"}],"intro-container")})),document.getElementById("menus-button").addEventListener("click",(()=>{t.removeChild(t.children[0]),e([{id:"header",type:"h1",text:"Our menu"},{id:"starters",type:"div"},{id:"starters-header",type:"h2",text:"Starters:",parent:"starters"},{text:"kraut bombs......£13.00",parent:"starters"},{text:"japanese seaweed & farm-to-table arugula........£10.00",parent:"starters"},{text:"invigorated pork belly with ham & homespun marrow........£14.00",parent:"starters"},{id:"mains",type:"div"},{id:"mains-header",type:"h2",text:"Mains:",parent:"mains"},{text:"homemade vinegar........£18.00",parent:"mains"},{text:"breaded monkfish......£16.00",parent:"mains"},{text:"fermented bluefish balls with acorn bruschetta........£16.00",parent:"mains"},{id:"dessert",type:"div"},{id:"dessert-header",type:"h2",text:"Dessert:",parent:"dessert"},{text:"ramp & pressed pepper crumble........£15.00",parent:"dessert"},{text:"rubbed gravlax with farfalle waffle........£10.00",parent:"dessert"},{text:"fennel & sheltered water pancake........£9.00",parent:"dessert"},{text:"sprouted sardine discs........£16.00",parent:"dessert"}],"menus-container")})),document.getElementById("contact-button").addEventListener("click",(()=>{t.removeChild(t.children[0]),e([{id:"contact",type:"h1",text:"Contact:"},{id:"address",type:"div"},{text:"Pat Donald's",type:"div",parent:"address"},{text:"43 Qumpin Way",type:"div",parent:"address"},{text:"Stangerford",type:"div",parent:"address"},{text:"C3P0 R2D2",type:"div",parent:"address"},{text:"01234 567890"},{text:"enquiries@patdonalds.com"}],"contact-container")}))})();