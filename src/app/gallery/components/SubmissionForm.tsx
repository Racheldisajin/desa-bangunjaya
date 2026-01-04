'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SubmissionFormProps {
  onClose: () => void;
}

export default function SubmissionForm({ onClose }: SubmissionFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Community Events',
    photographer: '',
    email: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Community Events',
    'Village Infrastructure',
    'Natural Beauty',
    'Cultural Heritage',
    'Festivals & Celebrations',
    'Daily Life',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl bg-card rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="PhotoIcon" size={28} />
            <h2 className="font-headline font-semibold text-2xl">
              Submit Your Photo
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/10 rounded-full p-2 transition-colors duration-300"
            aria-label="Close form"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircleIcon" size={48} className="text-success" />
              </div>
              <h3 className="font-headline font-semibold text-2xl text-foreground mb-2">
                Submission Received!
              </h3>
              <p className="font-body text-muted-foreground">
                Thank you for contributing to our village gallery. Your photo will be reviewed and published soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload */}
              <div>
                <label className="block font-body font-medium text-foreground mb-2">
                  Upload Photo *
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors duration-300 cursor-pointer">
                  <Icon name="CloudArrowUpIcon" size={48} className="text-muted-foreground mx-auto mb-3" />
                  <p className="font-body text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    PNG, JPG, JPEG up to 10MB
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    required
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block font-body font-medium text-foreground mb-2">
                  Photo Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  placeholder="Enter a descriptive title"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block font-body font-medium text-foreground mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photographer Name */}
              <div>
                <label htmlFor="photographer" className="block font-body font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="photographer"
                  name="photographer"
                  value={formData.photographer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block font-body font-medium text-foreground mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body resize-none"
                  placeholder="Tell us about this photo..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold"
                >
                  Submit Photo
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors duration-300 font-cta font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}