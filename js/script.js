const clinicPhone = "917021614768";
const reviews = [
  {name:"Mathew Cheruvattolil",text:"Reliable and customer friendly, with reasonable service."},
  {name:"Srinivasan Titai S.",text:"Doctor and staff members are very kind and helpful."},
  {name:"Asha Jai",text:"The environment is very clean and positive, and the staff is excellent."}
];
const services = {
  aligners:{number:"01",title:"Invisible Aligners",copy:"A discreet way to improve tooth alignment using a sequence of clear, removable trays planned around your bite.",points:["Digital assessment and personalised planning","Removable trays for everyday convenience","Progress reviews throughout treatment"]},
  implants:{number:"02",title:"Dental Implants",copy:"A fixed tooth-replacement option designed to restore confident chewing and a natural-looking smile after careful clinical evaluation.",points:["Individual bone and oral-health assessment","Restorative planning for fit and function","Clear aftercare and maintenance guidance"]},
  "root-canal":{number:"03",title:"Root Canal Care",copy:"Treatment focused on removing infection, easing discomfort and preserving your natural tooth whenever clinically appropriate.",points:["Comfort-conscious anaesthesia","Precision cleaning and sealing","Restoration plan to protect the tooth"]},
  "smile-design":{number:"04",title:"Smile Designing",copy:"A personalised approach to shape, shade and proportion—designed to complement your facial features rather than follow a template.",points:["Smile and facial assessment","Natural-looking material and shade choices","Treatment plan aligned with oral health"]},
  children:{number:"05",title:"Children’s Dentistry",copy:"Friendly preventive and restorative care that helps children build positive dental habits from their earliest visits.",points:["Gentle, age-appropriate communication","Preventive checks and hygiene guidance","Support for parents and growing smiles"]},
  emergency:{number:"06",title:"Emergency Dental Care",copy:"Prompt assessment for sudden tooth pain, swelling, broken teeth or dental injuries. Call first so the clinic can guide you appropriately.",points:["Rapid telephone guidance","Priority based on clinical urgency","Pain-relief and next-step planning"]}
};

const menuButton=document.querySelector('.menu-button'),nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

let currentReview=0,timer;
const reviewText=document.querySelector('#review-text'),reviewName=document.querySelector('#review-name'),reviewAvatar=document.querySelector('#review-avatar'),dots=document.querySelector('#review-dots');
reviews.forEach((_,i)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`Show review ${i+1}`);button.addEventListener('click',()=>showReview(i));dots.appendChild(button)});
function showReview(index){currentReview=(index+reviews.length)%reviews.length;const review=reviews[currentReview];reviewText.textContent=review.text;reviewName.textContent=review.name;reviewAvatar.textContent=review.name.split(' ').map(word=>word[0]).slice(0,2).join('');[...dots.children].forEach((dot,i)=>dot.classList.toggle('active',i===currentReview));clearInterval(timer);timer=setInterval(()=>showReview(currentReview+1),6000)}
document.querySelector('#prev-review').addEventListener('click',()=>showReview(currentReview-1));document.querySelector('#next-review').addEventListener('click',()=>showReview(currentReview+1));showReview(0);

document.querySelectorAll('.accordion article button').forEach(button=>button.addEventListener('click',()=>{const article=button.parentElement,wasOpen=article.classList.contains('open');document.querySelectorAll('.accordion article').forEach(item=>{item.classList.remove('open');item.querySelector('button').setAttribute('aria-expanded','false');item.querySelector('b').textContent='+'});if(!wasOpen){article.classList.add('open');button.setAttribute('aria-expanded','true');button.querySelector('b').textContent='−'}}));

const modal=document.querySelector('#service-modal');
document.querySelectorAll('.service-row').forEach(row=>row.addEventListener('click',()=>{const service=services[row.dataset.service];modal.querySelector('.modal-number').textContent=service.number;modal.querySelector('.modal-title').textContent=service.title;modal.querySelector('.modal-copy').textContent=service.copy;modal.querySelector('.modal-points').innerHTML=service.points.map(point=>`<span>✓ &nbsp;${point}</span>`).join('');modal.querySelector('.modal-book').dataset.treatment=service.title;modal.showModal();document.body.classList.add('modal-open')}));
function closeModal(){modal.close();document.body.classList.remove('modal-open')}
modal.querySelector('.modal-close').addEventListener('click',closeModal);modal.addEventListener('click',event=>{if(event.target===modal)closeModal()});modal.querySelector('.modal-book').addEventListener('click',event=>{document.querySelector('[name="treatment"]').value=event.currentTarget.dataset.treatment;closeModal()});

const dateInput=document.querySelector('#appointment-date');dateInput.min=new Date().toISOString().split('T')[0];
document.querySelector('#appointment-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=`Hello Aesthetic Avenue Dental Clinic, I would like to request an appointment.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nTreatment: ${data.get('treatment')}\nPreferred date: ${data.get('date')}`;window.open(`https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`,'_blank','noopener')});
document.querySelector('#year').textContent=new Date().getFullYear();
