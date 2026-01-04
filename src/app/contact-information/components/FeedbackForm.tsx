'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

export default function FeedbackForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
    'General Inquiry',
    'Service Request',
    'Complaint',
    'Suggestion',
    'Document Request',
    'Meeting Attendance',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-8 shadow-subtle">
        <h2 className="font-headline font-semibold text-2xl text-primary mb-6">Send Us Your Feedback</h2>
        <div className="space-y-4">
          <div className="h-12 bg-muted rounded animate-pulse"></div>
          <div className="h-12 bg-muted rounded animate-pulse"></div>
          <div className="h-12 bg-muted rounded animate-pulse"></div>
          <div className="h-32 bg-muted rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-8 shadow-subtle">
      <h2 className="font-headline font-semibold text-2xl text-primary mb-6">Send Us Your Feedback</h2>
      
      {isSubmitted ? (
        <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
          <Icon name="CheckCircleIcon" size={48} className="text-success mx-auto mb-4" />
          <h3 className="font-headline font-semibold text-xl text-success mb-2">Thank You!</h3>
          <p className="font-body text-foreground">Your feedback has been submitted successfully. We will respond within 2-3 business days.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                Full Name <span className="text-cta">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                Email Address <span className="text-cta">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
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
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="category" className="block font-body font-medium text-foreground mb-2">
                Category <span className="text-cta">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2">
              Subject <span className="text-cta">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Brief description of your inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
              Message <span className="text-cta">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Please provide detailed information about your inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md font-cta font-semibold hover:bg-secondary transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="PaperAirplaneIcon" size={20} />
            <span>Submit Feedback</span>
          </button>
        </form>
      )}
    </div>
  );
}