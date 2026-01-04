'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactInquiryProps {
  className?: string;
}

const ContactInquiry = ({ className = '' }: ContactInquiryProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'info@villageconnect.gov'
    },
    {
      icon: 'ClockIcon',
      label: 'Office Hours',
      value: 'Mon-Fri: 9:00 AM - 5:00 PM'
    }
  ];

  if (!isHydrated) {
    return (
      <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-12 bg-muted rounded"></div>
            </div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Contact for Inquiries</h3>
        <p className="text-muted-foreground font-body mt-2">
          Have questions about our village? Get in touch with our development team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                Full Name *
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
              <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                Email Address *
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

            <div>
              <label htmlFor="phone" className="block text-sm font-body font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-body font-medium text-foreground mb-2">
                Inquiry Type *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
              >
                <option value="">Select inquiry type</option>
                <option value="relocation">Relocation Information</option>
                <option value="business">Business Development</option>
                <option value="tourism">Tourism & Visits</option>
                <option value="investment">Investment Opportunities</option>
                <option value="general">General Information</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold flex items-center justify-center gap-2"
            >
              <Icon name="PaperAirplaneIcon" size={20} />
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg p-6 border border-border">
            <h4 className="text-lg font-headline font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={info.icon as any} size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-body">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-body font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground font-body">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInquiry;