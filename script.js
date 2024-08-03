document.getElementById('search-bar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const playerName = card.querySelector('h2').textContent.toLowerCase();
        const clubName = card.getAttribute('data-club').toLowerCase();

        if (playerName.includes(query) || clubName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Sample data
const players = [
    { name: 'Bellingham', club: 'Real Madrid', image: 'bellingham.webp' },
    { name: 'Endrick', club: 'Real Madrid', image: 'endrick.jpeg.webp' },
    { name: 'Mbappe', club: 'Real Madrid', image: 'mbappe.jpg' }
];

// Function to populate the gallery
function populateGallery(players) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-club', player.club);

        const img = document.createElement('img');
        img.src = player.image;
        img.alt = player.name;

        const name = document.createElement('h2');
        name.textContent = player.name;

        card.appendChild(img);
        card.appendChild(name);
        gallery.appendChild(card);
    });
}

// Initial population
populateGallery(players);