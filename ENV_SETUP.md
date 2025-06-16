# Environment Variables Configuration

This document explains how to configure the necessary environment variables for the contact form using EmailJS.

## Local Environment Variables

For local development, create a `.env.local` file in the root of the project with the following variables:

```.env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

You can obtain these values from your EmailJS account.

## GitHub Actions Configuration

For automatic deployment with GitHub Actions, you need to configure the following secrets in your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Click on "New repository secret"
4. Add the following secrets:
   - `EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## Verification

To verify that the environment variables are set correctly:

1. In local development: `console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)` should display your service ID
2. In production: The contact form should work properly after deployment

## Troubleshooting

If the contact form doesn't work:

1. Check that the environment variables are correctly configured
2. Check the browser console for any errors related to EmailJS
3. Make sure the secrets are properly set in GitHub if you're using GitHub Actions
