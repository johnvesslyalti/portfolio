export const projects = [
    {
        name: "DevNest",
        src: "/devnest.mp4",
        github: "https://github.com/johnvesslyalti/devnest",
        live: "https://web.postman.co/workspace/My-Workspace~9eb63259-5a06-4ff5-8952-fb889e10caed/collection/39926112-1f9a5499-fa3f-4c50-8a15-99117d2626e5?action=share&source=copy-link&creator=39926112",
        shortDescription:
            "A scalable backend platform focused on authentication, caching, and API performance, built to simulate real-world production systems.",
        detailedDescription:
            "- Implements a modular API architecture with secure JWT-based authentication and role-based access control.\n- Utilizes PostgreSQL with Prisma for type-safe queries and Redis-powered caching to optimize performance.\n- Fully containerized with Docker, emphasizing clean architecture and scalability closer to industry standards.",
        tech: [
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "JWT",
            "Docker",
        ],
        category: "Backend",
    },
    {
        name: "LiftLog",
        src: "/liftlog.mp4",
        github: "https://github.com/johnvesslyalti/lift-log",
        live: "https://johnvesslyalti-liftlog.vercel.app",
        shortDescription:
            "A fitness tracking application for logging workouts, tracking progress, and managing user routines with authenticated user profiles.",
        detailedDescription:
            "- Full-stack fitness application for logging workouts and tracking progress with secure user authentication.\n- Features a scalable database schema designed to efficiently handle recurring workout logs, historical data, and user-specific isolation.\n- Prioritizes maintainable data modeling over hardcoded flows, reflecting real-world application concerns.",
        tech: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Auth.js / JWT",
        ],
        category: "Full Stack",
    },
    {
        name: "SubTrackr",
        src: "/subtrackr.mp4",
        github: "https://github.com/johnvesslyalti/sub-trackr",
        live: "https://johnvesslyalti-subtrackr.vercel.app",
        shortDescription:
            "A SaaS application to track, manage, and analyze recurring subscriptions with automated reminders and spending insights.",
        detailedDescription:
            "- SaaS-style application for tracking recurring subscriptions, spending, and renewals with secure authentication.\n- Features automated payment reminders and handles complex edge cases like trial periods and variable renewal intervals.\n- Designed with user-based data isolation and scalable subscription models to ensure predictable data flows.",
        tech: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Auth.js / JWT",
        ],
        category: "Full Stack",
    },
];
