# StartSync

StartSync is a practice project designed to help entrepreneurs and startups share their pitches dynamically in real time. By submitting their business or startup details through an intuitive interface, users can see their pitches instantly showcased on the homepage without the need for page reloads. This project focuses on learning and experimenting with modern web development technologies.

## Features

- **Submit Your Pitch**: Practice implementing a form for submitting business or startup details.
- **Real-Time Updates**: Experiment with dynamic updates to the homepage without reloading.
- **Authentication**: Explore secure and seamless user authentication using NextAuth.js.
- **Modern UI/UX**: Create a clean, responsive design using Tailwind CSS and ShadCn components.
- **Schema Validation**: Practice robust input validation and schema handling with Zod.
- **Markdown Editing**: Implemented react-md-editor to allow users to format their pitches using Markdown syntax.

## Tech Stack

- **Next.js**: Framework for building a fast, scalable, and secure web application.
- **Sanity**: CMS to manage and structure startup details dynamically.
- **Zod**: For schema-based validation of user inputs.
- **Tailwind CSS**: Utility-first CSS framework for modern and responsive styling.
- **ShadCn**: A component library for consistent and reusable UI elements.
- **NextAuth.js**: Authentication library for secure user login and session management.
- **@uiw/react-md-editor**: A Markdown editor that enables users to format text easily when submitting pitches.

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

5. **Update \*\*\*\*\*\*\*\*****`package.json`**:
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
├── lib/               # Query definitions and client utilities
├── public/            # Static assets
└── .env.local         # Environment variables
```

## What I Learned

1. **Authentication in Next.js**:
   Implemented secure user authentication using NextAuth.js, exploring session handling and provider integration.

2. **Defining Schemas in Sanity**:
   Learned to define and structure schemas for content management. Example:

   ```javascript
   export const author = defineType({
       name: "author",
       title: "Author",
       type: "document",
       icon: UserIcon,
       fields: [
           defineField({ name: "id", type: "number" }),
           defineField({ name: "name", type: "string" }),
           defineField({ name: "username", type: "string" }),
           defineField({ name: "email", type: "string" }),
           defineField({ name: "image", type: "url" }),
           defineField({ name: "bio", type: "text" }),
       ],
       preview: {
           select: {
               title: "name",
           },
       },
   });
   ```

3. **Sanity Content Management**:

   - Used GROQ (Sanity's open-source query language) to fetch data efficiently.

   - Visualized and tested queries in Sanity Vision.

   - Defined queries in a dedicated file for better structure:

     ```javascript
     import { defineQuery } from "next-sanity";

     export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
         id,
         title,
         slug,
         _createdAt,
         author -> {
           _id, name, image, bio
         },
         views,
         description,
         category,
         image
     }`);
     ```

   - Fetched posts in a single line using the client:

     ```javascript
     const posts = await client.fetch(STARTUPS_QUERY);
     ```

   - Automated type safety using Sanity Typegen to ensure consistency and reliability.

4. **Configuring Fonts and Images in Next.js**:
   Learned to customize fonts by defining local fonts. Example:

   ```javascript
   const workSans = localFont({
     src: [
       { path: './fonts/WorkSans-Black.ttf', weight: '900', style: 'normal' },
       { path: './fonts/WorkSans-ExtraBold.ttf', weight: '800', style: 'normal' },
       { path: './fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' },
       { path: './fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
       { path: './fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
       { path: './fonts/WorkSans-Regular.ttf', weight: '400', style: 'normal' },
       { path: './fonts/WorkSans-Thin.ttf', weight: '300', style: 'normal' },
       { path: './fonts/WorkSans-Light.ttf', weight: '200', style: 'normal' },
       { path: './fonts/WorkSans-ExtraLight.ttf', weight: '100', style: 'normal' },
     ],
     variable: '--font-work-sans',
   });
   ```

## Contributing

This is a practice project, so contributions are not expected. However, feel free to fork the repository and experiment with it on your own.

## Disclaimer

This project is for learning and experimentation purposes only. No license is provided. If you wish to use or build upon this project, please contact the author for permission.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- Typegen
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

