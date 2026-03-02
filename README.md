# Amplify Test Site

A simple Next.js app with a home page and a contact form. [View on GitHub](https://github.com/TheAdrianVera/AmplifyContactTest). The form requires name and email, validates the email format, and shows success or error messages on submit.

## What's in it

- **Home page** – Single page with a button that links to the contact form.
- **Contact form** – Name (required), Email (required), and Message. Submit shows a success message when name and email are valid, or an error if required fields are missing or the email is invalid.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the button to go to the contact form, fill in name and email (and optionally message), and submit to test validation and messages.

## Build

```bash
npm run build
npm start
```
