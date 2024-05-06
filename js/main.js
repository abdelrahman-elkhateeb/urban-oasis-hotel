// faq show / hide
const faqBtn = document.querySelectorAll(".faqs .faq-box");

const ans = document.querySelectorAll(".faqs .faq-box .faq-body");

const more = document.querySelectorAll(".faqs .faq-box .ques .more");

const quit = document.querySelectorAll(".faqs .faq-box .ques .quit");

faqBtn.forEach((el, i) => {
  el.onclick = () => {
    ans[i].classList.toggle("show");
    quit[i].classList.toggle("show");
    more[i].classList.toggle("remove");
  };
});
