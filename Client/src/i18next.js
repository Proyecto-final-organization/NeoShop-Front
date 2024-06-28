import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

// Traducciones
const resources = {
  en: {
    translation: {
      Products: "Products",
      Store: "Store",
      Home: "Home",
      Login: "Login",
      Dashboard: "Dashboard",
      Theme: "Theme",
      Cart: "Cart",
      Profile: "Profile",
      Search: "Search",
      Welcome: "Welcome to Neo Shop",
      WelcomeText:
        "Our project aims to create an innovative marketplace allowing users to create personalized stores, securely make purchases, and settle payments through the page.",
      StoreButtonLanding: "Go to Store",
      ProductsButtonLanding: "Post Products",
      whyNeoShop: "Why Choose Neo Shop?",
      personalized: "Personalized Stores",
      personalizedText:
        "Create and customize your store with ease using our intuitive tools.",
      secure: "Secure Transactions",
      secureText:
        "Enjoy safe and secure purchases with our robust payment system.",
      easy: "Easy Integration",
      easyText: "Integrate with various platforms and services effortlessly.",
      storeTitle: "Stores",
      gitHubButton: "Go to GitHub",
      productTitle: "Products",
      addToCart: "Add to cart",
      continuePurchase: "Continue with the purchase",
      personalDetails: {
        personal: "Personal",
        name: "Name",
        lastname: "Lastname",
        document: "Document",
        state: "State",
        city: "City",
        birthdate: "Birth Date",
        accountData: "Account Data",
        email: "Email",
        phoneNumber: "Phone number",
        creationDate: "Creation Date",
        accountType: "Account Type",
        security: "Security",
        password: "Password",
        emailVerified: "Email verified",
        awaitingVerification: "Awaiting verification",
        na: "N/A",
        placeHolder: {
          name: "Jack",
          lastName: "Baker",
          password: "************",
          city: "New York",
          state: "Texas",
          documentNumber: "12345678",
          email: "example@example.com",
        },
      },
      signUp: {
        registerTitle: "Sign up and access your favorite stores!",
        registerSubtitle: "Enjoy the best deals and prices all in one place.",
        fastStart: "Start fast with NeoShop",
        fastStartText:
          "Easily access all your favorite stores and discover new deals every day.",
        allServices: "Access all NeoShop services",
        allServicesText:
          "Get exclusive access to promotions, discounts, and much more.",
        trustedBy: "Trusted by online shoppers",
        trustedByText:
          "Join thousands of users already enjoying the benefits of NeoShop.",
        terms: "Terms",
        privacy: "Privacy",
        security: "Security",
        fixErrors:"Please fix the errors before submitting.",
        registerFailed:"Register failed. Please try again."
      },
      testimonials: [
        "Neo Shop made it so easy to set up my online store. The process was seamless and secure! - Happy Customer",
        "A fantastic platform that allows for customization and secure transactions. Highly recommend! - Satisfied User",
        "I've been using Neo Shop for a few months now, and it's been a game-changer for my business. The integration with other platforms is seamless! - Thrilled Entrepreneur",
        "I was skeptical at first, but Neo Shop exceeded my expectations. The support team is responsive, and the interface is intuitive. - Impressed User",
        "Setting up my store with Neo Shop was a breeze. I love how I can personalize every aspect of my storefront. - Delighted Seller",
      ],
      sideBar: {
        title: "Filters & Orders",
        store: "Select Store",
        brand: "Select Brand",
        category: "Select Category",
        filter: "FILTER",
        maxPrice: "Max price",
        minPrice: "Min price",
      },
      productDetail: {
        published: "Published",
        category: "Category",
        quantity: "Quantity",
        avaliable: "Avaliable",
        seller: "Seller",
        addToCart: "Add to cart",
        sales: "sales",
        goStore: "Go to Store",
        reviews: "Reviews",
        noReviews: "No reviews avaliable",
        characteristics: "Characterístics",
        score:"Score",
        placeHolderReviews:"Write your opinion here...",
        qualification:"Qualification",
        submitReview:"Send Opinion",
        reviewdOn:"Reviewd on"
      },
      homePage:{
        recent:"RECENT PRODUCTS",
        published:"Published on ",
        published2:"Published ",
        storeInfo:"Store Info",
        new:"New",
        ago:"Days ago",
        allRecent:"All recent products",

      },
      storeDetail:{
        since:"Selling since: ",
        totalReviews:"Total Reviews: ",
        reputation:"Reputation: ",
        products:"Products",
      },
      payPreview:{
        delivery:"Choose delivery method",
        standar:"Standar Shipping",
        arrange:"Arrage shipping with seller",
        summary:"Summary",
        continue:"Continue",
        edit:"Edit users data"
      },
      adressUser:{
        edit:"Edit Address",
        details:"Personal data",
        please:"Please complete all the fields.",
        name:"Name and lastname",
        email:"E-mail",
        street:"Street/Avenue",
        number:"Number",
        state:"State",
        city:"City",
        postal:"Postal Code",
        contact:"Contact",
        save:"Save"
      },
      pay:{
        order:"Order summary",
        commission:"COMMISSION",
        delivery:"Delivery",
        total:"TOTAL",
        buyer:"Buyer Information: ",
        name:"Name: ",
        lastName:"Lastname: ",
        email:"Email: ",
        phone:"Phone Number: ",
        adress:"Adress Number: ",
        street:"Street: ",
        city:"City: ",
        state:"State: ",
        postal:"Postal Code: ",
        delivery:"Delivery",
        goBack:"GoBack",
        payButton:"Pay with PayPal"
      },
      login:{
        login:"Login",
        email:"Email",
        password:"Password",
        signIn:"Sign In",
        register:"Register",
        google:"Continue with Google",
        facebook:"Continue with Facebook"
      },
      user:{
        profile:"Profile",
        contact:"Contact",
        logOut:"Logout",        
      },
      profileDetail:{
        profile: "Profile",
        contact: "Contact",
        logOut: "Logout",
        editAccount: "Edit account",
        personalInformation: "Personal information",
        personalInfoDescription: "Information from your identity document and your tax activities.",
        accountDetails: "Your account details",
        accountDetailsDescription: "Data that represents the account you signed in.",
        security: "Security",
        securityDescription: "Security configuration for your account.",
        cards: "Cards",
        cardsDescription: "Data from your cards saved in your account.",
        addresses: "Addresses",
        addressesDescription: "Data from your addresses saved in your account.",
        privacy: "Privacy",
        privacyDescription: "Preferences and control over the use of your data.",
        communications: "Communications",
        communicationsDescription: "Choose what type of information you want to receive.",
        myShopping: "My shopping",
        myShoppingDescription: "Your history of shopping on the app.",
        favorites:"Favorites",
        favoritesDetail:"List of your favorite products."
      },
      confirmation:{
        question:"What will you do within NeoShop?",
        client:"Client",
        store:"Store",
        clientDetail:"You can see stores and buy products",
        storeDetail:"You can sell products by creating your own store",
      },
      storeRegister:{
        title:"Create Store",
        photos:"Photos",
        addImage:"Add image",
        name:"Name",
        namePlaceHolder:"Store Name",
        postalCode:"Postal Code",
        country:"Country",
        city:"City",
        button:"Register",
        firstLogIn: "First, log in to your account",
        registerAndAccess: "Register and access your favorite stores!",
        bestOffers: "Enjoy the best offers and prices in one place.",
        quickStart: "Quick start with NeoShop",
        easyAccess: "Easily access all your favorite stores and discover new offers every day.",
        accessAllServices: "Access all NeoShop services",
        exclusiveAccess: "Get exclusive access to promotions, discounts and much more.",
        trustedBy: "Trusted by online shoppers",
        joinThousands: "Join thousands of users who already enjoy the advantages of NeoShop.",
        terms: "Terms",
        privacy: "Privacy",
        security: "Security",
        neoShop: "© NeoShop"
      },
      toast: {
        emptySearchBar:"Please enter a search term.",
        noProducts:"No Products Found.",
        waiting:"Waiting...",
        loginTrue:"Login successful!",
        loginFalse:"Login error",
        registerTrue:"Register successful!",        
        registerFalse:"Error while registering",
        updateTrue:"Update successful!",
        updateFalse:"Error while updating",
        storeTrue:"Your store is created",
        imageTrue:"Upload image success",
        paymentTrue:"Payment Ok! ",
        paymentFalse:"Error sending payment",
        cartTrue:"Add to cart"
      },
      forgot:"Forgot your password?",
      favorites:{
        title:"Your favorite products",
        youHave:"You have ",
        youHave2:"products on Favorites",
        search:"Search for products...",
      },
      accountDetail:{
        yourAccountDetails: "Your account details",
        accountData: "Account Data",
        email: "Email",
        phoneNumber: "Phone number",
        creationDate: "Creation Date",
        accountType: "Account Type",
        security: "Security",
        password: "Password",
        emailVerified: "Email verified",
        awaitingVerification: "Awaiting verification",
        favorites: {
          title: "Your favorite products",
          youHave: "You have ",
          youHave2: "products on Favorites",
          search: "Search for products..."
        }
      },
      shoppingHistory:{
        yourShoppingHistory: "Your shopping history",
        searchForProducts: "Search for products...",
        youHaveProductsInHistory: "You have {total} products in your history"
      }
      
      
      
      
    },
  },






  es: {
    translation: {
      Products: "Productos",
      Store: "Tienda",
      Home: "Inicio",
      Login: "Iniciar Sesión",
      Dashboard: "Panel",
      Theme: "Tema",
      Cart: "Carrito",
      Profile: "Perfil",
      Search: "Buscar",
      Welcome: "Bienvenidos a NeoShop",
      WelcomeText:
        "Nuestro proyecto tiene como objetivo crear un mercado innovador que permita a los usuarios para crear tiendas personalizadas, realizar compras de forma segura y liquidar pagos a través de la página.",
      StoreButtonLanding: "Ver tiendas",
      ProductsButtonLanding: "Vender Productos",
      whyNeoShop: "Porque Elegir Neo Shop?",
      personalized: "Tiendas Personalizadas",
      personalizedText:
        "Crea y personaliza tu tienda con facilidad utilizando nuestras herramientas intuitivas.",
      secure: "Transacciones seguras",
      secureText:
        "Disfrute de compras seguras con nuestro sólido sistema de pago.",
      easy: "Facil Integracion",
      easyText: "Integre con varias plataformas y servicios sin esfuerzo.",
      storeTitle: "Tiendas",
      gitHubButton: "Ir a GitHub",
      productTitle: "Productos",
      addToCart: "Añadir al carrito",
      continuePurchase: "Continuar con la compra",
      personalDetails: {
        personal: "Personal",
        name: "Nombre",
        lastname: "Apellido",
        document: "Documento",
        state: "Estado",
        city: "Ciudad",
        birthdate: "Fecha de nacimiento",
        accountData: "Datos de la cuenta",
        email: "Correo electrónico",
        phoneNumber: "Número de teléfono",
        creationDate: "Fecha de creación",
        accountType: "Tipo de cuenta",
        security: "Seguridad",
        password: "Contraseña",
        emailVerified: "Correo verificado",
        awaitingVerification: "Esperando verificación",
        na: "N/A",
        placeHolder: {
          name: "Jose",
          lastName: "Vertiz",
          password: "************",
          city: "Buenos Aires",
          state: "Argentina",
          documentNumber: "12345678",
          email: "ejemplo@ejemplo.com",
        },
      },
      signUp: {
        registerTitle: "¡Regístrate y accede a tus tiendas favoritas!",
        registerSubtitle:
          "Disfruta de las mejores ofertas y precios en un solo lugar.",
        fastStart: "Empieza rápido con NeoShop",
        fastStartText:
          "Accede fácilmente a todas tus tiendas favoritas y descubre nuevas ofertas cada día.",
        allServices: "Acceso a todos los servicios de NeoShop",
        allServicesText:
          "Obtén acceso exclusivo a promociones, descuentos y mucho más.",
        trustedBy: "Confiado por compradores en línea",
        trustedByText:
          "Únete a miles de usuarios que ya disfrutan de las ventajas de NeoShop.",
        terms: "Términos",
        privacy: "Privacidad",
        security: "Seguridad",
        fixErrors:"Porfavor corrija los errores antes de enviar.",
        registerFailed:"Error en el registro. Porfavor Inténtalo de nuevo."
      },
      testimonials: [
        "Neo Shop hizo que configurar mi tienda en línea fuera muy fácil. ¡El proceso fue fluido y seguro! - Cliente feliz",
        "Una plataforma fantástica que permite personalización y transacciones seguras. ¡Muy recomendable! - Usuario satisfecho",
        "He estado usando Neo Shop durante algunos meses y ha cambiado las reglas del juego para mi negocio. ¡La integración con otras plataformas es perfecta! - Emprendedor emocionado",
        "Al principio era escéptico, pero Neo Shop superó mis expectativas. El equipo de soporte es receptivo y la interfaz es intuitiva. - Usuario impresionado",
        "Configurar mi tienda con Neo Shop fue muy sencillo. Me encanta cómo puedo personalizar cada aspecto de mi escaparate. - Vendedor encantado",
      ],
      sideBar: {
        title: "Filtros y Ordenamientos",
        store: "Seleccionar tienda",
        brand: "Seleccionar Marca",
        category: "Seleccionar Categoria",
        filter: "FILTRO",
        maxPrice: "Precio Maximo",
        minPrice: "Precio Minimo",
      },
      productDetail: {
        published: "Publicado",
        category: "Categoria",
        quantity: "Cantidad",
        avaliable: "Disponible",
        seller: "Vendedor",
        addToCart: "Añadir al carrito",
        sales: "Ventas",
        goStore: "Ir a la tienda",
        reviews: "Reseñas",
        noReviews: "No hay reseñas disponibles",
        characteristics: "Caracteristicas",
        score:"Puntuacion",
        placeHolderReviews:"Escribe tu opinion aqui...",
        qualification:"Calificacion",
        submitReview:"Enviar opinion",
        reviewdOn:"Comentado el"
      },
      homePage:{
        recent:"PRODUCTOS RECIENTES",
        published:"Publicado el ",
        published2:"Publicado hace ",
        storeInfo:"Informacion de la tienda",
        new:"Nuevo",
        ago:"dias",
        allRecent:"Todos los productos recientes",
      },
      storeDetail:{
        since:"Vendiendo desde: ",
        totalReviews:"Cantidad de reseñas: ",
        reputation:"Reputacion: ",
        products:"Productos",
      },
      payPreview:{
        delivery:"Elegir metodo de envio",
        standar:"Envio normal",
        arrange:"Acordar compra con el comprador",
        summary:"Sumatoria",
        continue:"Continuar",
        edit:"Editar info del usuario"
      },
      adressUser:{
        edit:"Editar domicilio",
        details:"Detalles personales",
        please:"Por favor complete los campos.",
        name:"Nombre y apellido",
        email:"Correo electronico",
        street:"Calle/Avenida",
        number:"Numero",
        state:"Estado",
        city:"Ciudad",
        postal:"Codigo postal",
        contact:"Telefono de contacto",
        save:"Guardar"          
      },
      pay:{
        order:"Suma de la orden",
        commission:"COMMISION",
        delivery:"Entrega",
        total:"TOTAL",
        buyer:"Informacion del comprador: ",
        name:"Nombre: ",
        lastName:"Apellido: ",
        email:"Correo electronico: ",
        phone:"Numero de telefono: ",
        adress:"Direccion: ",
        street:"Calle: ",
        city:"Ciudad: ",
        state:"Estado: ",
        postal:"Codigo postal: ",
        delivery:"Entrega",
        goBack:"Volver",
        payButton:"Pagar con PayPal"
      },
      login:{
        login:"Login",
        email:"Correo electronico",
        password:"Contraseña",
        signIn:"Entrar",
        register:"Registrase",
        google:"Entrar con Google",
        facebook:"Entrar con Facebook"
      },
      user:{
        profile:"Perfil",
        contact:"Contacto",
        logOut:"Salir",        
      },
      profileDetail:{
        profile: "Perfil",
        contact: "Contacto",
        logOut: "Cerrar sesión",
        editAccount: "Editar cuenta",
        personalInformation: "Información personal",
        personalInfoDescription: "Información de tu documento de identidad y tus actividades fiscales.",
        accountDetails: "Detalles de tu cuenta",
        accountDetailsDescription: "Datos que representan la cuenta con la que iniciaste sesión.",
        security: "Seguridad",
        securityDescription: "Configuración de seguridad para tu cuenta.",
        cards: "Tarjetas",
        cardsDescription: "Datos de tus tarjetas guardadas en tu cuenta.",
        addresses: "Direcciones",
        addressesDescription: "Datos de tus direcciones guardadas en tu cuenta.",
        privacy: "Privacidad",
        privacyDescription: "Preferencias y control sobre el uso de tus datos.",
        communications: "Comunicaciones",
        communicationsDescription: "Elige qué tipo de información deseas recibir.",
        myShopping: "Mis compras",
        myShoppingDescription: "Tu historial de compras en la aplicación.",
        favorites:"Favoritos",
        favoritesDetail:"Una lista de tus productos favoritos."
      },
      confirmation:{
        question:"¿Qué harás dentro de NeoShop?",
        client:"Cliente",
        store:"Tienda",
        clientDetail:"Puedes ver tiendas y comprar productos",
        storeDetail:"Puedes vender productos creando tu propia tienda",
      },
      storeRegister:{
        title:"Crear Tienda",
        photos:"Fotos",
        addImage:"Añadir imagen",
        name:"Nombre",
        namePlaceHolder:"Nombre de la tienda",
        postalCode:"Codigo postal",
        country:"Pais",
        city:"Ciudad",
        button:"Registro",
        firstLogIn: "Primero, inicia sesión en tu cuenta",
        registerAndAccess: "¡Regístrate y accede a tus tiendas favoritas!",
        bestOffers: "Disfruta de las mejores ofertas y precios en un solo lugar.",
        quickStart: "Empieza rápido con NeoShop",
        easyAccess: "Accede fácilmente a todas tus tiendas favoritas y descubre nuevas ofertas cada día.",
        accessAllServices: "Acceso a todos los servicios de NeoShop",
        exclusiveAccess: "Obtén acceso exclusivo a promociones, descuentos y mucho más.",
        trustedBy: "Confiado por compradores en línea",
        joinThousands: "Únete a miles de usuarios que ya disfrutan de las ventajas de NeoShop.",
        terms: "Términos",
        privacy: "Privacidad",
        security: "Seguridad",
        neoShop: "© NeoShop"
      },
      toast: {
        emptySearchBar:"Porfavor ingresa algo.",
        noProducts:"No se encontraron productos.",
        waiting:"Esperando...",
        loginTrue:"Ingreso exitoso!",
        loginFalse:"Error al ingresar",
        registerTrue:"Registro exitoso!",        
        registerFalse:"Error al registrarse",
        updateTrue:"Actualizacion exitosa!",
        updateFalse:"Error al actualizar",
        storeTrue:"Tu tienda se creo exitosamente",
        imageTrue:"Se subio la imagen",
        paymentTrue:"Pago completado! ",
        paymentFalse:"Error al enviar el pago",
        cartTrue:"Se añadio al carrito"
      },
      forgot:"¿Te olvidaste tu contraseña?",
      favorites:{
        title:"Tus productos favoritos",
        youHave:"Tienes ",
        youHave2:"productos en tu lista de favoritos",
        search:"Buscar productos...",
      },
      accountDetail:{
        yourAccountDetails: "Detalles de tu cuenta",
        accountData: "Datos de la cuenta",
        email: "Correo electrónico",
        phoneNumber: "Número de teléfono",
        creationDate: "Fecha de creación",
        accountType: "Tipo de cuenta",
        security: "Seguridad",
        password: "Contraseña",
        emailVerified: "Correo verificado",
        awaitingVerification: "En espera de verificación",
        favorites: {
          title: "Tus productos favoritos",
          youHave: "Tienes ",
          youHave2: " productos en Favoritos",
          search: "Buscar productos..."
        }
      },
      shoppingHistory:{
        yourShoppingHistory: "Tu historial de compras",
        searchForProducts: "Buscar productos...",
        youHaveProductsInHistory: "Tienes ",
        youHaveProductsInHistory2: " productos en tu historial"
      }
      
      
      
      
    },
  },
};

i18n
  // .use(Backend) // Si usas un backend para cargar traducciones
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React ya hace el escape
    }
  });

export default i18n;
