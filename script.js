
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('project-controls');
      const details = document.getElementById(id);
      if (!details) return;

      details.classList.toggle('is-hidden');
      const isOpen = !details.classList.contains('is-hidden');
      btn.setAttribute('project-expanded', String(isOpen));
      btn.textContent = isOpen ? 'Hide Details' : 'Show Details';
    });
  });


    const filterButtons = document.querySelectorAll(".filter-btn");

    const projectCards = document.querySelectorAll(".project-card");


    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const selected = button.dataset.filter;

        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        projectCards.forEach(function (card) {
          const category = card.dataset.category;

          if (selected === "all" || category === selected) {
             card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });


  /* --- Dark Mode Toggle --- */
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          document.body.classList.toggle('dark');
          const isDark = document.body.classList.contains('dark');
          themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
      }


  
    // form validation
    var form = document.querySelector('#contact form');
    if (!form) return;

    var nameElement    = document.getElementById('name');
    var emailElement   = document.getElementById('email');
    var messageElement = document.getElementById('message');

    function clearError(element) {
      if (!element) return;
      element.classList.remove('input-error');

      var msg = element.parentElement.querySelector('.error-msg');
      if (msg) {
        msg.textContent = '';
      }
    }

    function showError(element, text) {
      if (!element) return;
      element.classList.add('input-error');

      var msg = element.parentElement.querySelector('.error-msg');
      if (!msg) {
        msg = document.createElement('div');
        msg.className = 'error-msg';
        element.parentElement.appendChild(msg);
      }
      msg.textContent = text;
    }

    form.onsubmit = function (e) {
      var hasError = false;


      clearError(nameElement);
      clearError(emailElement);
      clearError(messageElement);

      var nameValue    = nameElement.value.trim();
      var emailValue   = emailElement.value.trim();
      var messageValue = messageElement.value.trim();

      // name is required
      if (!nameValue) {
        showError(nameElement, 'Name is required.');
        hasError = true;
      }

      // email is optional, but if not empty must be valid
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue && !emailPattern.test(emailValue)) {
        showError(emailElement, 'Please enter a valid email (e.g., name@example.com).');
        hasError = true;
      }

      // message is required
      if (!messageValue) {
        showError(messageElement, 'Message is required.');
        hasError = true;
      }

      if (hasError) {
        e.preventDefault();
        if (!nameValue) {
          nameElement.focus();
        } else if (emailValue && !emailPattern.test(emailValue)) {
          emailElement.focus();
        } else if (!messageValue) {
          messageElement.focus();
        }
      }

    };

});