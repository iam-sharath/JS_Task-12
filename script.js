form = document.getElementById("form");
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let mobile = document.getElementById("mobile").value;


        if (usernameCheck(username) && passwordCheck(password) && mobileCheck(mobile)) {
          alert('Login successful!');
        } else {
          alert('Invalid username or password. Please try again.');
        }
      });

      function usernameCheck(username) {
        return username = /^(?=.*(@gmail.com))/.test(username);
      }

      function passwordCheck(password) {
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
        return passwordRegex.test(password);
      }
      function mobileCheck(mobile) {
        let mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
      }