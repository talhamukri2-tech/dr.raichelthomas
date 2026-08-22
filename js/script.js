const clinicPhone = "917021614768";

const treatments = {
  aligners: {
    number: "01",
    title: "Invisible Aligners",
    copy: "A discreet way to improve tooth position with a sequence of clear, removable trays planned around your bite and everyday routine.",
    points: ["Digital assessment and personal planning", "Removable trays for daily convenience", "Progress reviews throughout treatment"],
    cta: "Discuss aligners"
  },
  smile: {
    number: "02",
    title: "Smile Design",
    copy: "A considered plan for tooth shape, proportion and shade that complements your face while respecting healthy function.",
    points: ["Smile and facial assessment", "Natural-looking material choices", "A plan shaped around oral health"],
    cta: "Discuss smile design"
  },
  whitening: {
    number: "03",
    title: "Teeth Whitening",
    copy: "Professional whitening planned after assessing your teeth and gums, with guidance to protect comfort and maintain the result.",
    points: ["Suitability check before treatment", "Professionally supervised process", "Practical aftercare advice"],
    cta: "Ask about whitening"
  },
  veneers: {
    number: "04",
    title: "Laminates & Veneers",
    copy: "Thin restorations used in selected cases to refine tooth shape, shade and symmetry with a natural-looking finish.",
    points: ["Detailed smile assessment", "Shade and proportion planning", "Conservative approach where suitable"],
    cta: "Discuss veneers"
  },
  jewellery: {
    number: "05",
    title: "Dental Jewellery",
    copy: "A small decorative detail placed professionally for patients who want their smile to carry a little more personality.",
    points: ["Choice of shapes and styles", "Professional placement", "Cleaning and care instructions"],
    cta: "Ask about jewellery"
  },
  crowns: {
    number: "06",
    title: "Crowns & Bridges",
    copy: "Custom restorations designed to protect weakened teeth or replace missing teeth while restoring bite and appearance.",
    points: ["Bite and tooth assessment", "Material and shade selection", "Fit, function and maintenance guidance"],
    cta: "Discuss crowns"
  },
  rct: {
    number: "07",
    title: "Root Canal Treatment",
    copy: "Treatment focused on removing infection, easing discomfort and preserving your natural tooth whenever clinically appropriate.",
    points: ["Comfort-conscious anaesthesia", "Careful cleaning and sealing", "Restoration plan to protect the tooth"],
    cta: "Discuss root canal care"
  },
  implants: {
    number: "08",
    title: "Dental Implants",
    copy: "A fixed tooth-replacement option planned to restore confident chewing and a natural-looking smile after careful evaluation.",
    points: ["Bone and oral-health assessment", "Restorative planning for function", "Clear healing and maintenance guidance"],
    cta: "Discuss implants"
  },
  fillings: {
    number: "09", title: "Dental Fillings",
    copy: "Tooth-coloured restorations used to repair selected areas of decay or damage while preserving as much healthy tooth as possible.",
    points: ["Careful decay assessment", "Shade-matched restorative material", "Bite and finish checked precisely"], cta: "Discuss fillings"
  },
  dentures: {
    number: "10", title: "Complete & Partial Dentures",
    copy: "Removable tooth-replacement solutions planned for comfort, everyday function and a natural appearance that suits your smile.",
    points: ["Personal fit assessment", "Natural tooth and gum shades", "Guidance for wear and cleaning"], cta: "Discuss dentures"
  },
  overdentures: {
    number: "11", title: "Overdentures",
    copy: "A removable restoration supported by retained teeth or implants to improve stability, chewing confidence and day-to-day comfort.",
    points: ["Support and suitability review", "Stability-focused planning", "Long-term maintenance guidance"], cta: "Discuss overdentures"
  },
  scaling: {
    number: "12", title: "Scaling & Polishing",
    copy: "Professional cleaning that removes plaque, tartar and surface stains to support healthier gums and a fresher-looking smile.",
    points: ["Plaque and tartar removal", "Gentle surface polishing", "Home-care guidance for gums"], cta: "Book a cleaning"
  },
  extractions: {
    number: "13", title: "Tooth Extractions",
    copy: "Careful removal of a tooth when it cannot be predictably restored, with clear planning for comfort, healing and next steps.",
    points: ["Clinical and X-ray assessment", "Comfort-conscious procedure", "Detailed healing instructions"], cta: "Discuss an extraction"
  },
  gums: {
    number: "14", title: "Gum Disease Treatment",
    copy: "Targeted care for bleeding, swelling or gum infection, planned to control disease and protect the support around your teeth.",
    points: ["Complete gum-health assessment", "Non-surgical or surgical options", "Maintenance plan to reduce recurrence"], cta: "Discuss gum care"
  },
  conservative: {
    number: "15", title: "Conservative Dentistry",
    copy: "Treatment centred on saving healthy tooth structure, managing early problems and restoring function with a minimal approach.",
    points: ["Early diagnosis and prevention", "Tooth-preserving treatment choices", "Function-focused restoration"], cta: "Discuss conservative care"
  },
  splints: {
    number: "16", title: "Orthotic Splints Therapy",
    copy: "A custom oral appliance planned to support the jaw, protect teeth and manage selected bite-related muscle or joint concerns.",
    points: ["Jaw and bite assessment", "Custom-fitted appliance", "Fit reviews and usage guidance"], cta: "Discuss splint therapy"
  }
};

const reviews = [
  { name: "Mathew Cheruvattolil", text: "Reliable and customer friendly, with reasonable service." },
  { name: "Srinivasan Titai S.", text: "Doctor and staff members are very kind and helpful." },
  { name: "Asha Jai", text: "The environment is very clean and positive, and the staff is excellent." }
];

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

const treatmentNumber = document.querySelector("#treatment-number");
const treatmentTitle = document.querySelector("#treatment-title");
const treatmentCopy = document.querySelector("#treatment-copy");
const treatmentPoints = document.querySelector("#treatment-points");
const treatmentBook = document.querySelector("#treatment-book");

document.querySelectorAll(".arch-treatment").forEach((button) => {
  button.addEventListener("click", () => {
    const treatment = treatments[button.dataset.treatment];
    document.querySelectorAll(".arch-treatment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    treatmentNumber.textContent = `Treatment ${treatment.number}`;
    treatmentTitle.textContent = treatment.title;
    treatmentCopy.textContent = treatment.copy;
    treatmentPoints.replaceChildren(...treatment.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    }));
    treatmentBook.innerHTML = `${treatment.cta} <span>↗</span>`;
    treatmentBook.dataset.treatment = treatment.title;
  });
});

treatmentBook.addEventListener("click", () => {
  const treatment = treatmentBook.dataset.treatment || "Invisible Aligners";
  const select = document.querySelector('[name="treatment"]');
  const matchingOption = [...select.options].find((option) => option.text === treatment);
  if (matchingOption) select.value = matchingOption.value;
});

let reviewIndex = 0;
let reviewTimer;
const reviewText = document.querySelector("#review-text");
const reviewName = document.querySelector("#review-name");
const reviewAvatar = document.querySelector("#review-avatar");
const reviewDots = document.querySelector("#review-dots");

function initials(name) {
  return name.split(" ").map((word) => word[0]).slice(0, 2).join("");
}

function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  const review = reviews[reviewIndex];
  reviewText.textContent = `“${review.text}”`;
  reviewName.textContent = review.name;
  reviewAvatar.textContent = initials(review.name);
  [...reviewDots.children].forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === reviewIndex));
  window.clearInterval(reviewTimer);
  reviewTimer = window.setInterval(() => showReview(reviewIndex + 1), 6500);
}

reviews.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show review ${index + 1}`);
  dot.addEventListener("click", () => showReview(index));
  reviewDots.appendChild(dot);
});

document.querySelector("#review-prev").addEventListener("click", () => showReview(reviewIndex - 1));
document.querySelector("#review-next").addEventListener("click", () => showReview(reviewIndex + 1));
showReview(0);

document.querySelectorAll(".accordion article button").forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");
    const willOpen = !article.classList.contains("open");
    document.querySelectorAll(".accordion article").forEach((item) => {
      item.classList.remove("open");
      item.querySelector("button").setAttribute("aria-expanded", "false");
      item.querySelector("b").textContent = "+";
    });
    if (willOpen) {
      article.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector("b").textContent = "−";
    }
  });
});

const dateInput = document.querySelector("#appointment-date");
dateInput.min = new Date().toISOString().split("T")[0];

document.querySelector("#appointment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello Aesthetic Avenue Dental Clinic, I would like to request an appointment.\n\nName: ${data.get("name")}\nMobile: ${data.get("phone")}\nTreatment: ${data.get("treatment")}\nPreferred date: ${data.get("date")}`;
  window.open(`https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();
