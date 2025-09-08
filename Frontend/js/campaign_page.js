const about = document.getElementById("about");
    const update = document.getElementById("update");
    const update_btn = document.getElementById('update-btn');
    const about_btn = document.getElementById('about-btn');
    window.onload = function () {
      const section = localStorage.getItem("activeSection" || "about");
      toggleSections(section);
    };
    function toggleSections(section) {
      if (section == "about") {
        update.style.display = "none";
        about.style.display = "block";
        about_btn.style.color = '#0A5251';
        about_btn.style.fontWeight = 'bold';
         update_btn.style.color = '#4d4d4d';
        update_btn.style.fontWeight = '500';

      } else if (section === "update") {
        update.style.display = "block";
        about.style.display = "none";
        update_btn.style.color = '#0A5251';
        update_btn.style.fontWeight = 'bold';
        about_btn.style.color = '#4d4d4d';
        about_btn.style.fontWeight = '500';
      }
      localStorage.setItem("activeSection", section);
    }
    const camp_image = document.querySelectorAll('.camp-images');
    const main_image = document.getElementById('main-image');
    camp_image.forEach((image)=>{
      image.addEventListener("click",()=>{
        const bg = image.src;
        main_image.style.backgroundImage = `url('${bg}')`;
        main_image.style.backgroundPosition = 'center';
      });
    })