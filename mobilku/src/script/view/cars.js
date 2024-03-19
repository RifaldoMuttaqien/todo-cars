const cars = [
    {
        carname: 'Alphard',
        carBrand: 'Toyota',
        carImage: 'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1694995716/moas/news/1694995698_all-new-alphard-hev-mpv-hybrid-mewah-dan-ramah-lingkungan.png',
        carDesc: "Alphard Mobil Orang Kaya",
    },
    {
        carname: 'Alphard',
        carBrand: 'Toyota',
        carImage: 'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1694995716/moas/news/1694995698_all-new-alphard-hev-mpv-hybrid-mewah-dan-ramah-lingkungan.png',
        carDesc: "Alphard Mobil Orang Kaya",
    },
     {
        carname: 'Alphard',
        carBrand: 'Toyota',
        carImage: 'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1694995716/moas/news/1694995698_all-new-alphard-hev-mpv-hybrid-mewah-dan-ramah-lingkungan.png',
        carDesc: "Alphard Mobil Orang Kaya",
    },
     {
        carname: 'Alphard',
        carBrand: 'Toyota',
        carImage: 'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1694995716/moas/news/1694995698_all-new-alphard-hev-mpv-hybrid-mewah-dan-ramah-lingkungan.png',
        carDesc: "Alphard Mobil Orang Kaya",
    },
    
];

document.addEventListener('DOMContentLoaded', function() {
    const carListDiv = document.getElementById('carList');
    const searchForm = document.getElementById('cariForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchTerm = document.getElementById('name').value.toLowerCase();

        carListDiv.innerHTML = '';

        cars.forEach(car => {
            if (car.carBrand.toLowerCase() === searchTerm) {
                const carDiv = document.createElement('div');
                carDiv.classList.add('car');

                const carImg = document.createElement('img');
                carImg.src = car.carImage;
                carImg.alt = car.carname;
                carImg.classList.add('car-image');
                carDiv.appendChild(carImg);

                const carName = document.createElement('h2');
                carName.textContent = car.carname;
                carDiv.appendChild(carName);

                const carBrandDesc = document.createElement('p');
                carBrandDesc.textContent = `${car.carBrand} - ${car.carDesc}`;
                carDiv.appendChild(carBrandDesc);

                carListDiv.appendChild(carDiv);
            }
        });
        
        carListDiv.style.display = 'flex';
    });
});
