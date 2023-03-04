let delete_btn = document.querySelectorAll(".delete-btn");
  
  delete_btn.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add("deleted-btn");
      console.log('Delete button clicked!');
    });
  });