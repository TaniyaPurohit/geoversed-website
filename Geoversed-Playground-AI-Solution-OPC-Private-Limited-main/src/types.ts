export interface ServiceItem {
  id: string; // e.g. "01", "02", "08", etc.
  title: string;
  description: string;
  category?: string;
  iconName?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  organization: string;
  projectScope: string;
}

export interface InsightItem {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  buttonText?: string;
}

export type EventCategory = 'Training' | 'Workshop' | 'MoU' | 'Meeting' | 'Field Visit' | 'Guest Lecture';

export interface EventVideo {
  youtubeId?: string;
  videoUrl?: string;
  title: string;
}

export interface EventItem {
  id: string; // unique slug used in URLs (e.g. "himalayan-spring-workshop-2024")
  title: string;
  date: string; // YYYY-MM-DD
  category: EventCategory;
  location: string;
  summary: string;
  description: string;
  cover: string; // main card & banner image URL
  photos: string[]; // array of image URLs
  videos: EventVideo[]; // array of YouTube videos
}

