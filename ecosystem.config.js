module.exports = {
  apps: [
    {
      name: "uspminvest", // Name of the application
      script: "node_modules/next/dist/bin/next", // Using npm to run the app
      args: "start", // Start command for the app
      cwd: "/rvdata/uspminvest", // The project directory (path to your Next.js app)
      env: {
        NODE_ENV: "production", // Default environment variables
        PORT: 3025,
      },
      env_file: "/rvdata/env-files/uspminvest.env", // Path to the custom .env file
    },
  ],
};
