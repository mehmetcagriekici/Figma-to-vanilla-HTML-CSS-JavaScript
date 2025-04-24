//accordion
//wait until all DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  //get the accordion items
  const faqItems = document.querySelectorAll(".faq-item");

  //loop over each accoridon item
  faqItems.forEach((item) => {
    //question -> trigger
    const question = item.querySelector(".faq-question");
    //answer ->panel
    const answer = item.querySelector(".faq-answer");

    // Collapse all answers by default
    answer.style.height = "0px";

    question.addEventListener("click", () => {
      //check if clickked element is already open
      const isOpen = item.classList.contains("open");

      // Collapse all
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherItem.classList.remove("open");
        otherAnswer.style.height = "0px";
      });

      // If this wasn't already open, open it now
      if (!isOpen) {
        item.classList.add("open");
        answer.style.height = answer.scrollHeight + "px";
      }
    });
  });
});
