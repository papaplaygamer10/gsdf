document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent page reload
    const name = document.getElementById('name').value;
    document.getElementById('output').innerHTML = `<p>Hello, ${name}!</p>`;
});
