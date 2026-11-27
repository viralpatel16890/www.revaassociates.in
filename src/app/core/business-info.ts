/**
 * Single source of truth for Reva Associates' public contact details.
 * Update values here and every page, the structured data and the footer follow.
 */
const PHONE_DIGITS = '8879146502';
const EMAIL = 'revaassociates22@gmail.com';
const ADDRESS_FULL =
  '15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar, Borivali East, Mumbai - 400066';
const MAPS_QUERY = encodeURIComponent(
  'Reva Associates, 15 Patrakar Sadan, Rajendra Nagar, Borivali East, Mumbai 400066',
);

export const BUSINESS = {
  name: 'Reva Associates',
  founder: 'Pooja Patel',
  siteUrl: 'https://www.revaassociates.in',

  phoneDisplay: '8879 146 502',
  phoneDisplayIntl: '+91 8879 146 502',
  phoneHref: `tel:+91${PHONE_DIGITS}`,
  whatsappUrl: `https://wa.me/91${PHONE_DIGITS}`,

  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,

  address: {
    full: ADDRESS_FULL,
    street: '15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar',
    locality: 'Borivali East, Mumbai',
    region: 'Maharashtra',
    postalCode: '400066',
    country: 'IN',
  },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`,

  hours: {
    display: 'Mon - Sat, 10:00 AM - 7:00 PM',
    short: 'Mon-Sat, 10 AM - 7 PM',
    closed: 'Sunday: Closed',
  },
} as const;

export type BusinessInfo = typeof BUSINESS;
