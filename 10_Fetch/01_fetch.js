fetch("https://api.github.com/users/Nautiyal-Ashish")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
