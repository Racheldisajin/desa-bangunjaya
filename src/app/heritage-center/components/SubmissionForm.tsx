'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  storyTitle: string;
  category: string;
  yearPeriod: string;
  description: string;
  hasPhotos: boolean;
  consent: boolean;
}

export default function SubmissionForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    storyTitle: '',
    category: '',
    yearPeriod: '',
    description: '',
    hasPhotos: false,
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        storyTitle: '',
        category: '',
        yearPeriod: '',
        description: '',
        hasPhotos: false,
        consent: false
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg shadow-md p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-6 md:p-8">
      <div className="mb-6">
        <h3 className="font-headline font-semibold text-2xl text-foreground mb-2">Share Your Heritage Story</h3>
        <p className="font-body text-muted-foreground">Help us preserve our community's history by sharing your stories, photos, and memories.</p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-start gap-3">
          <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-cta font-semibold text-success">Submission Successful!</p>
            <p className="font-body text-sm text-success-foreground mt-1">Thank you for contributing to our village heritage. We'll review your submission and contact you soon.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
              Full Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
              Email Address <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="category" className="block font-body font-medium text-foreground mb-2">
              Category <span className="text-error">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
            >
              <option value="">Select a category</option>
              <option value="founding">Founding Stories</option>
              <option value="traditions">Cultural Traditions</option>
              <option value="events">Historical Events</option>
              <option value="people">Notable People</option>
              <option value="places">Historic Places</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="storyTitle" className="block font-body font-medium text-foreground mb-2">
            Story Title <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="storyTitle"
            name="storyTitle"
            value={formData.storyTitle}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
            placeholder="Give your story a descriptive title"
          />
        </div>

        <div>
          <label htmlFor="yearPeriod" className="block font-body font-medium text-foreground mb-2">
            Year or Time Period
          </label>
          <input
            type="text"
            id="yearPeriod"
            name="yearPeriod"
            value={formData.yearPeriod}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
            placeholder="e.g., 1950s, 1987, Early 1900s"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-body font-medium text-foreground mb-2">
            Story Description <span className="text-error">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body resize-none"
            placeholder="Share your story, memories, or historical information in detail..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="hasPhotos"
              name="hasPhotos"
              checked={formData.hasPhotos}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
            />
            <label htmlFor="hasPhotos" className="font-body text-foreground">
              I have photos or documents to share (we'll contact you about uploading them)
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              required
              className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
            />
            <label htmlFor="consent" className="font-body text-foreground">
              I consent to having my story and any submitted materials included in the village heritage archive <span className="text-error">*</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Icon name="PaperAirplaneIcon" size={20} />
                Submit Story
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              name: '',
              email: '',
              phone: '',
              storyTitle: '',
              category: '',
              yearPeriod: '',
              description: '',
              hasPhotos: false,
              consent: false
            })}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors duration-300 font-cta font-semibold"
          >
            <Icon name="XMarkIcon" size={20} />
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}