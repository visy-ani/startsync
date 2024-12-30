# StartSync

StartSync is a dynamic, real-time platform designed for entrepreneurs and startups to share their pitches effortlessly. By submitting their business or startup details through our intuitive interface, users can see their pitches instantly showcased on the homepage without the need for page reloads. This seamless experience is powered by cutting-edge technologies, ensuring speed, security, and responsiveness.

## Features

- **Submit Your Pitch**: Entrepreneurs can easily submit their business or startup details via a user-friendly form.
- **Real-Time Updates**: Submitted pitches are displayed on the homepage dynamically, eliminating the need for reloading.
- **Authentication**: Secure and seamless user authentication using NextAuth.js.
- **Modern UI/UX**: A clean, responsive design built with Tailwind CSS and ShadCn components.
- **Schema Validation**: Robust input validation and schema handling with Zod.

## Tech Stack

- **Next.js**: Framework for building a fast, scalable, and secure web application.
- **Sanity**: CMS to manage and structure startup details dynamically.
- **Zod**: For schema-based validation of user inputs.
- **Tailwind CSS**: Utility-first CSS framework for modern and responsive styling.
- **ShadCn**: A component library for consistent and reusable UI elements.
- **NextAuth.js**: Authentication library for secure user login and session management.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/startsync.git
   cd startsync
   ```

2. **Install pnpm**:
   Ensure you have pnpm installed globally:

   ```bash
   npm install pnpm -g
   ```

3. **Install Dependencies**:
   Using pnpm (recommended):

   ```bash
   pnpm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXTAUTH_URL=your-deployment-url
   NEXTAUTH_SECRET=your-nextauth-secret
   SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_DATASET=your-sanity-dataset
   SANITY_API_VERSION=your-sanity-api-version
   ```

5. **Update \*\*\*\*\*\*\*\*\*\*\*\*****`package.json`**:
   Ensure compatibility with pnpm and React 19 by configuring the package manager and overrides:

   ```json
   {
     "packageManager": "pnpm@10.5.2",
     "overrides": {
       "react": "$react",
       "react-dom": "$react-dom"
     }
   }
   ```

6. **Start the Development Server**:

   ```bash
   pnpm run dev
   ```

   Your application will be running at `http://localhost:3000`.

## Project Structure

```
startsync/
├── components/        # Reusable UI components
├── pages/             # Next.js pages
├── styles/            # Tailwind CSS styles
├── sanity/            # Sanity CMS configuration
├── utils/             # Utility functions and helpers
├── validations/       # Zod schemas for input validation
├── public/            # Static assets
└── .env.local         # Environment variables
```

## Contributing

We welcome contributions to StartSync! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request, and we'll review it as soon as possible.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCn Components](https://shadcn.dev/)
- [NextAuth.js](https://next-auth.js.org/)

## Contact

If you have any questions or suggestions, feel free to reach out:

**Anish Yadav**\
Email: [chocoboyanish566@gmail.com](mailto\:chocoboyanish566@gmail.com)\
GitHub: visy-ani

---

Enjoy using StartSync! Together, let's empower entrepreneurs and startups to shine.

