# Email Setup Guide - Resend Integration

## Overview
This guide will help you set up email functionality for your contact form using Resend. When users submit the contact form, emails will be sent to `wolfewiseconsulting@gmail.com`.

## Prerequisites
- A Resend account (free tier available)
- Your domain (for the "from" email address)

## Step 1: Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Once logged in, go to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Give it a name like "Wolfewise Website"
6. Copy the API key (it starts with `re_`)

## Step 2: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Update the `FROM_EMAIL` with your domain:
   ```
   FROM_EMAIL=noreply@yourdomain.com
   ```
   **Important**: You need to verify your domain in Resend first (see Step 3)

## Step 3: Verify Your Domain in Resend

1. In your Resend dashboard, go to [Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS setup instructions to add the required records
5. Wait for verification (usually takes a few minutes)

**Alternative**: For testing, you can use Resend's test domain:
```
FROM_EMAIL=onboarding@resend.dev
```

## Step 4: Run Your Application

### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```
This will start both your React frontend (port 5173) and Express backend (port 3001).

### Production Mode
1. Build your frontend:
   ```bash
   npm run build
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

## Step 5: Test the Integration

1. Open your website at `http://localhost:5173`
2. Scroll to the "Get in Touch" section
3. Fill out the contact form
4. Submit the form
5. Check your email at `wolfewiseconsulting@gmail.com`

## Troubleshooting

### Common Issues

1. **"Failed to send email" error**
   - Check that your Resend API key is correct
   - Ensure your domain is verified in Resend
   - Check the server console for detailed error messages

2. **CORS errors**
   - Make sure both frontend and backend are running
   - Check that the backend is running on port 3001

3. **API key not found**
   - Verify the `.env.local` file exists and has the correct API key
   - Make sure the server is reading from the right environment file

### Checking Logs
- Backend logs: Check the terminal where you ran `npm run server`
- Frontend logs: Open browser developer tools (F12) and check the Console tab

## Email Template

The emails sent will include:
- Sender's name and email
- Subject line
- Full message content
- Professional HTML formatting
- A note that the message came from your website

## Security Notes

- Never commit your `.env.local` file to version control
- The API key should be kept secret
- Consider adding rate limiting for production use
- Validate all form inputs on the backend

## Next Steps

1. Set up your domain in Resend
2. Test the email functionality
3. Deploy your application to a hosting service
4. Update the API URL in your frontend for production

## Support

If you encounter issues:
1. Check the Resend documentation: [https://resend.com/docs](https://resend.com/docs)
2. Review the server logs for error messages
3. Test with the onboarding@resend.dev email first
