const products = 
    [
        {
            "name": "Laptop",
            "description": "Laptop de alta gama con pantalla de 15 pulgadas y procesador Intel i7.",
            "price": "1200.00"
        },
        {
            "name": "Smartphone",
            "description": "Smartphone con pantalla OLED y cámara de 48 MP.",
            "price": "700.00"
        },
        {
            "name": "Auriculares inalámbricos",
            "description": "Auriculares con cancelación de ruido y batería de larga duración.",
            "price": "150.00"
        },
        {
            "name": "Smartwatch",
            "description": "Reloj inteligente con monitor de actividad y resistencia al agua.",
            "price": "250.00"
        },
        {
            "name": "Tablet",
            "description": "Tablet de 10 pulgadas con almacenamiento expandible.",
            "price": "300.00"
        },
        {
            "name": "Televisor 4K",
            "description": "Televisor 4K de 55 pulgadas con tecnología HDR.",
            "price": "800.00"
        },
        {
            "name": "Cámara DSLR",
            "description": "Cámara DSLR de 24.2 MP con lente intercambiable.",
            "price": "550.00"
        },
        {
            "name": "Bocina Bluetooth",
            "description": "Bocina portátil con sonido envolvente y resistente al agua.",
            "price": "120.00"
        },
        {
            "name": "Cafetera espresso",
            "description": "Cafetera de espresso con espumador de leche incorporado.",
            "price": "90.00"
        },
        {
            "name": "Aspiradora robot",
            "description": "Aspiradora inteligente con programación automática.",
            "price": "200.00"
        },
        {
            "name": "Reloj de pared",
            "description": "Reloj decorativo para pared en diseño vintage.",
            "price": "30.00"
        },
        {
            "name": "Silla ergonómica",
            "description": "Silla de oficina ergonómica ajustable.",
            "price": "100.00"
        },
        {
            "name": "Lámpara de escritorio",
            "description": "Lámpara LED ajustable con puerto USB.",
            "price": "20.00"
        },
        {
            "name": "Set de cuchillos de cocina",
            "description": "Set de cuchillos de acero inoxidable para chefs.",
            "price": "60.00"
        },
        {
            "name": "Horno eléctrico",
            "description": "Horno eléctrico con función de convección y temporizador.",
            "price": "180.00"
        },
        {
            "name": "Plancha de vapor",
            "description": "Plancha de ropa con sistema anti goteo.",
            "price": "50.00"
        },
        {
            "name": "Bicicleta estática",
            "description": "Bicicleta de ejercicio con resistencia ajustable.",
            "price": "300.00"
        },
        {
            "name": "Mochila",
            "description": "Mochila resistente al agua con múltiples compartimentos.",
            "price": "45.00"
        },
        {
            "name": "Batería externa",
            "description": "Batería externa de 10,000 mAh para dispositivos móviles.",
            "price": "25.00"
        },
        {
            "name": "Botella térmica",
            "description": "Botella de acero inoxidable que mantiene la temperatura.",
            "price": "18.00"
        },
        {
            "name": "Smart TV Box",
            "description": "Dispositivo de streaming compatible con varias apps.",
            "price": "60.00"
        },
        {
            "name": "Guitarra acústica",
            "description": "Guitarra acústica de madera con acabado natural.",
            "price": "120.00"
        },
        {
            "name": "Patinete eléctrico",
            "description": "Patinete eléctrico plegable con autonomía de 20 km.",
            "price": "400.00"
        },
        {
            "name": "Monitor de 24 pulgadas",
            "description": "Monitor LED Full HD de 24 pulgadas.",
            "price": "150.00"
        },
        {
            "name": "Teclado mecánico",
            "description": "Teclado mecánico con iluminación RGB.",
            "price": "80.00"
        },
        {
            "name": "Termómetro digital",
            "description": "Termómetro sin contacto con pantalla digital.",
            "price": "25.00"
        },
        {
            "name": "Set de pesas",
            "description": "Set de pesas ajustables de 20 kg.",
            "price": "70.00"
        },
        {
            "name": "Microondas",
            "description": "Horno microondas con múltiples funciones.",
            "price": "100.00"
        },
        {
            "name": "Colchón ortopédico",
            "description": "Colchón ortopédico de espuma viscoelástica.",
            "price": "200.00"
        },
        {
            "name": "Impresora multifuncional",
            "description": "Impresora con escáner y fotocopiadora incorporados.",
            "price": "90.00"
        }
    ];

    const loadProducts = () => {
        const productsContainer = document.getElementById('product-list');

        products.forEach( (element) => {
            const product = document.createElement('div');

            product.className = 'product';
            const name = document.createElement('p');
            name.innerText = element.name;

            name.className = 'product-name';

            const description = document.createElement('p');
            let descriptionText = element.description;
            if (descriptionText.length > 30) {
                descriptionText = element.description.substring(0, 30) + '...';
            }
            description.innerText = descriptionText;

            description.className = 'description';

            const price = document.createElement('p');
            price.innerText = element.price;

            price.className = 'product-price';

            product.appendChild(name);
            product.appendChild(description);
            product.appendChild(price);

            productsContainer.appendChild(product);

        })

        


    }
    loadProducts();