 const answers = document.querySelectorAll(".faqs");
    answers.forEach((answer) => {
      answer.addEventListener("click", () => {
        answer.classList.toggle("open");
      });
    });
    const images = document.querySelectorAll('.inner');
    const outer_images = document.querySelectorAll('.outer');
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },{threshold: 0.5});
    images.forEach(img => observer.observe(img));
    outer_images.forEach(img=> observer.observe(img))
    fetch("http://localhost:3000/api/campaigns")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data Fetched");
        const today = new Date();
        const newData = data.filter(
          (campaign) => new Date(campaign.endDate) > today
        );
        if (newData.length > 4) {
          const topCampaigns = newData.slice(0, 4);
          const urgent_camp_cards = document.querySelectorAll(".urgent-funds");
          topCampaigns.forEach((campaign, index) => {
            const card = urgent_camp_cards[index];
            card.querySelector(".fund-img").src = `/Frontend/assets/${campaign.image}`;
            card.querySelector(".fund-organizer").textContent =
              campaign.beneficiary;
            card.querySelector(".fund-name").textContent = campaign.title;
            const bar_filled =
              (campaign.raisedAmount / campaign.goalAmount) * 100;
            card.querySelector(".fund-bar-fill").style.width = `${bar_filled}%`;
            card.querySelector(".fund-money").textContent = campaign.goalAmount;
            const end = new Date(campaign.endDate);
            const diffMs = end - today;
            const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
            card.querySelector(
              ".fund-timeleft"
            ).textContent = `${daysLeft} days left`;
          });
        }
      })
      .catch((err) => console.error(err));