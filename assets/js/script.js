window.onload = function () {
    // Document objects
    const content = document.getElementsByClassName("content")[0];
    const subscribe = document.getElementsByClassName("form__subscribe")[0];
    const emailError = document.getElementsByClassName("legend__error")[0];
    const emailInput = document.getElementsByClassName("email__input")[0];
    const notification = document.getElementsByClassName("notification")[0];
    const userEmailDisplay = document.getElementsByClassName("user-email")[0];
  
    // Handlers
    const isValidEmail = (email) =>
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  
    const showNotificationSuccess = () => {
      notification.classList.remove("hide");
      content.classList.add("hide");
      userEmailDisplay.innerHTML = emailInput.value;
    };
  
    const showEmailError = () => {
      emailError.classList.add("inline-block");
      emailInput.classList.add("input--error");
    };
  
    // Events
    subscribe.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isValidEmail(emailInput.value)) {
        showEmailError();
        return;
      }
      showNotificationSuccess();
    });
  };