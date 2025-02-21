# E-Commerce React Application

## Overview

A modern e-commerce application built with React, featuring a shopping cart, product listing, and responsive design. The application uses Context API for state management and Material-UI components.

## 🚀 Features

- Product listing with dynamic loading
- Shopping cart functionality
- Responsive design for all devices
- Real-time cart updates
- Product hover effects
- Lazy loading images
- Accessible UI components

## 🛠 Tech Stack

- React 18
- Material-UI
- React Router v6
- Context API for state management
- CSS Modules
- PropTypes for type checking
- Vite for build tooling

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/e-commerce-app.git
cd e-commerce-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗 Project Structure

```
e-commerce-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Card.jsx       # Product card component
│   │   ├── CartButton.jsx # Shopping cart button
│   │   ├── NavBar.jsx     # Navigation bar
│   │   └── ShoppingList.jsx
│   ├── context/           # Context providers and reducers
│   │   ├── CartContext.jsx
│   │   ├── CartProvider.jsx
│   │   ├── ProductsContext.jsx
│   │   ├── ProductsProvider.jsx
│   │   └── cartReducer.js
│   ├── pages/            # Page components
│   │   ├── CartPage.jsx
│   │   └── ShoppingPage.jsx
│   ├── styles/           # CSS styles
│   │   ├── card.css
│   │   ├── navbar.css
│   │   └── shoppingPage.css
│   └── EComerceApp.jsx   # Main app component
```

## 🔧 Configuration

The application uses Vite for development and building. Key configuration files:

- `vite.config.js` - Vite configuration
- `.eslintrc.js` - ESLint rules
- `package.json` - Project dependencies and scripts

## 📝 Usage

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

```bash
npm run test
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

## 📚 API Documentation

The application uses the Fake Store API for product data:

- Base URL: `https://fakestoreapi.com`
- Endpoints:
  - `/products` - Get all products
  - `/products/{id}` - Get single product

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for the product data
- [Material-UI](https://mui.com/) for the UI components
- [React Router](https://reactrouter.com/) for routing
