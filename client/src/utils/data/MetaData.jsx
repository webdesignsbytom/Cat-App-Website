import {
  CompanyName,
  CompanyPhoneNumber,
  FACEBOOK_BUSINESS_URL,
  FULL_BUSINESS_URL,
  INSTAGRAM_BUSINESS_URL,
} from '../Constants';

// Home page
export const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cat App',
  url: 'https://cat-app.app',
  description: 'Cat App is your ultimate destination for cute cat videos, fun games, and all things feline!',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cat-app.app/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    'https://www.facebook.com/CatApp',
    'https://www.instagram.com/CatApp',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-1234-567890',
    contactType: 'Customer Service',
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
};

export const homePageAdditionalMeta = [
  { property: 'og:title', content: 'Welcome to Cat App' },
  {
    property: 'og:description',
    content: 'Dive into a world of adorable cat videos, fun games, and all things feline at Cat App.',
  },
  { property: 'og:image', content: 'https://cat-app.app/brand/logo.png' },
  { property: 'og:url', content: 'https://cat-app.app' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Welcome to Cat App' },
  {
    name: 'twitter:description',
    content: 'Enjoy endless cat content, from cute videos to games, all in one place!',
  },
  { name: 'twitter:image', content: 'https://cat-app.app/brand/logo.png' },
];


// Forgot password
export const forgottenPasswordPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Reset Password',
  description: 'Reset your password for your Cat App account and regain access to all your favorite cat content.',
  url: 'https://cat-app.app/forgotten-password',
};

export const forgottenPasswordPageAdditionalMeta = [
  { property: 'og:title', content: 'Reset Your Password - Cat App' },
  {
    property: 'og:description',
    content: 'Securely reset your Cat App account password and continue enjoying cute cat videos and games.',
  },
  {
    property: 'og:image',
    content: 'https://cat-app.app/assets/images/pages/reset-password-preview.jpg',
  },
  { property: 'og:url', content: 'https://cat-app.app/forgotten-password' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Reset Your Password - Cat App' },
  {
    name: 'twitter:description',
    content: 'Follow the steps to securely reset your Cat App account password.',
  },
  {
    name: 'twitter:image',
    content: 'https://cat-app.app/assets/images/pages/reset-password-preview.jpg',
  },
];


// Login
export const loginPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Login',
  description: 'Log in to your Cat App account to access cute cat videos, fun games, and more.',
  url: `${FULL_BUSINESS_URL}/login`,
};

export const loginPageAdditionalMeta = [
  { property: 'og:title', content: 'Login - Cat App' },
  {
    property: 'og:description',
    content: 'Access your Cat App account to enjoy endless cat content, games, and exclusive features.',
  },
  {
    property: 'og:image',
    content: 'https://cat-app.app/assets/images/pages/login-preview.jpg',
  },
  { property: 'og:url', content: 'https://cat-app.app/login' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Login - Cat App' },
  {
    name: 'twitter:description',
    content: 'Sign in to your Cat App account and unlock a world of cute cat videos, games, and more.',
  },
  {
    name: 'twitter:image',
    content: 'https://cat-app.app/assets/images/pages/login-preview.jpg',
  },
];


// Register
export const registerPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Register',
  description: `Create an account with ${CompanyName} to access exclusive features and services.`,
  url: `${FULL_BUSINESS_URL}/register`,
};

export const registerPageAdditionalMeta = [
  { property: 'og:title', content: 'Register - Cat App' },
  {
    property: 'og:description',
    content: 'Sign up for a Cat App account to enjoy unlimited cat videos, games, and personalized content.',
  },
  {
    property: 'og:image',
    content: 'https://cat-app.app/assets/images/pages/register-preview.jpg',
  },
  { property: 'og:url', content: 'https://cat-app.app/register' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Register - Cat App' },
  {
    name: 'twitter:description',
    content: 'Join Cat App today to unlock access to adorable cat videos, exciting games, and more.',
  },
  {
    name: 'twitter:image',
    content: 'https://cat-app.app/assets/images/pages/register-preview.jpg',
  },
];

// Maintenance
export const maintenancePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Maintenance Page',
  description: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back soon with more adorable cat content!`,  url: `${FULL_BUSINESS_URL}/maintenance`,
};

export const maintenancePageAdditionalMeta = [
  { property: 'og:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    property: 'og:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/maintenance` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `We'll Be Back Soon - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `The ${CompanyName} website is currently undergoing maintenance. We’ll be back shortly with exciting updates.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/maintenance-preview.jpg`,
  },
];

// Policies page
export const termsAndPoliciesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms and Policies',
  description: `Explore the terms of service and privacy policies of ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/terms-and-policies`,
  mainEntity: {
    '@type': 'FAQPage',
    name: 'Terms and Policies FAQ',
    description: `Frequently asked questions about terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
};

export const termsAndPoliciesAdditionalMeta = [
  { property: 'og:title', content: `Terms and Policies - ${CompanyName}` },
  {
    property: 'og:description',
    content: `Understand the terms of service, privacy policies, and compliance guidelines of ${CompanyName}.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/terms-and-policies` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Terms and Policies - ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Learn more about our terms of service, privacy policies, and compliance at ${CompanyName}.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/terms-preview.jpg`,
  },
];

// Error page
export const errorPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '404 Error Page',
  description: `The requested page could not be found on ${CompanyName}.`,
  url: `${FULL_BUSINESS_URL}/404`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const errorPageAdditionalMeta = [
  { property: 'og:title', content: 'Page Not Found - 404' },
  {
    property: 'og:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/404` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Page Not Found - 404' },
  {
    name: 'twitter:description',
    content: `Oops! The page you’re looking for isn’t here. Visit ${CompanyName} to find what you need.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/assets/images/pages/404-preview.jpg`,
  },
];


// Contact page
export const contactPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: CompanyName,
    url: FULL_BUSINESS_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CompanyPhoneNumber,
      contactType: 'Customer Service',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
    sameAs: [
      FACEBOOK_BUSINESS_URL,
      INSTAGRAM_BUSINESS_URL,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${FULL_BUSINESS_URL}/brand/logo.png`,
    },
  },
};

export const contactPageAdditionalMeta = [
  { property: 'og:title', content: `Contact ${CompanyName}` },
  {
    property: 'og:description',
    content: `Reach out to ${CompanyName} for professional web and circuit design solutions. We're ready to discuss your projects and answer any questions.`,
  },
  {
    property: 'og:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
  { property: 'og:url', content: `${FULL_BUSINESS_URL}/contact` },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Contact ${CompanyName}` },
  {
    name: 'twitter:description',
    content: `Contact ${CompanyName} for expert web and circuit design services. Let's discuss your needs and find the best solution.`,
  },
  {
    name: 'twitter:image',
    content: `${FULL_BUSINESS_URL}/brand/contact-preview.jpg`,
  },
];
