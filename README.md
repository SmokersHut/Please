<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Smokers Hut E-Commerce

This contains everything you need to run and deploy your app.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env` to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

1.  **Push to GitHub:** Make sure your project is pushed to a GitHub repository. The repository name should be `smokers-hut` for the deployment to work out-of-the-box.
    *   *If your repository has a different name, update the `base` property in `vite.config.ts` to match `/your-repo-name/`.*

2.  **Run the Deploy Script:** In your terminal, run the following command:
    ```bash
    npm run deploy
    ```
    This command will first build the application for production, then it will push the contents of the `dist` folder to a new `gh-pages` branch on your repository.

3.  **Configure GitHub Pages:**
    *   In your repository settings on GitHub, navigate to the **Pages** section.
    *   Under "Build and deployment", set the **Source** to **Deploy from a branch**.
    *   Set the **Branch** to `gh-pages` with the `/ (root)` folder.
    *   Save your changes.

GitHub will now publish your site. It might take a few minutes, but your application will be live at `https://<your-username>.github.io/smokers-hut/`.
