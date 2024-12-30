# StartSync

StartSync is a practice project designed to help entrepreneurs and startups share their pitches dynamically in real time. By submitting their business or startup details through an intuitive interface, users can see their pitches instantly showcased on the homepage without the need for page reloads. This project focuses on learning and experimenting with modern web development technologies.

## Features

- **Submit Your Pitch**: Practice implementing a form for submitting business or startup details.
- **Real-Time Updates**: Experiment with dynamic updates to the homepage without reloading.
- **Authentication**: Explore secure and seamless user authentication using NextAuth.js.
- **Modern UI/UX**: Create a clean, responsive design using Tailwind CSS and ShadCn components.
- **Schema Validation**: Practice robust input validation and schema handling with Zod.

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
   git clone https://github.com/visy-ani/startsync.git
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

5. **Update ****`package.json`**:
   Ensure compatibility with pnpm and React 19 by configuring the package manager and overrides:

   ```json
   {
     "packageManager": "pnpm@10.5.2",
     "overrides": {
       "react": "$19.0.0",
       "react-dom": "$19.0.0"
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

This is a practice project, so contributions are not expected. However, feel free to fork the repository and experiment with it on your own.

## Disclaimer

This project is for learning and experimentation purposes only. No license is provided. If you wish to use or build upon this project, please contact the author for permission.

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
GitHub: [visy-ani](https://github.com/visy-ani)

---

Enjoy experimenting with StartSync and have fun learning!

