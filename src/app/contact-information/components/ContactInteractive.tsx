'use client';

import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import DepartmentCard from './DepartmentCard';
import MeetingScheduleCard from './MeetingScheduleCard';
import FeedbackForm from './FeedbackForm';
import OfficeLocationMap from './OfficeLocationMap';
import Icon from '@/components/ui/AppIcon';

interface Department {
  department: string;
  head: string;
  phone: string;
  email: string;
  hours: string;
}

interface Meeting {
  title: string;
  date: string;
  time: string;
  location: string;
  agenda: string;
}

export default function ContactInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('departments');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const emergencyContacts = [
    {
      icon: '🚨',
      title: 'Emergency Services',
      details: ['Police: 911', 'Fire Department: 911', 'Ambulance: 911']
    },
    {
      icon: '🏥',
      title: 'Village Health Center',
      details: ['Emergency Line: (555) 123-4567', 'Non-Emergency: (555) 123-4568', 'After Hours: (555) 123-4569']
    },
    {
      icon: '⚡',
      title: 'Utilities Emergency',
      details: ['Power Outage: (555) 234-5678', 'Water Emergency: (555) 234-5679', 'Gas Leak: (555) 234-5680']
    }
  ];

  const generalContacts = [
    {
      icon: '📞',
      title: 'Main Office',
      details: ['Phone: (555) 100-2000', 'Fax: (555) 100-2001', 'Hours: Mon-Fri 8:00 AM - 5:00 PM']
    },
    {
      icon: '✉️',
      title: 'Email Contacts',
      details: ['General: info@villageconnect.gov', 'Services: services@villageconnect.gov', 'Support: support@villageconnect.gov']
    },
    {
      icon: '📍',
      title: 'Mailing Address',
      details: ['Village Connect Administration', '123 Main Street, Village Center', 'Greenfield Village, State 12345']
    }
  ];

  const departments: Department[] = [
    {
      department: 'Administration',
      head: 'Sarah Johnson',
      phone: '(555) 100-2010',
      email: 'admin@villageconnect.gov',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
    },
    {
      department: 'Public Works',
      head: 'Michael Chen',
      phone: '(555) 100-2020',
      email: 'publicworks@villageconnect.gov',
      hours: 'Mon-Fri: 7:00 AM - 4:00 PM'
    },
    {
      department: 'Planning & Development',
      head: 'Emily Rodriguez',
      phone: '(555) 100-2030',
      email: 'planning@villageconnect.gov',
      hours: 'Mon-Fri: 8:30 AM - 4:30 PM'
    },
    {
      department: 'Finance & Treasury',
      head: 'David Thompson',
      phone: '(555) 100-2040',
      email: 'finance@villageconnect.gov',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM'
    },
    {
      department: 'Community Services',
      head: 'Lisa Martinez',
      phone: '(555) 100-2050',
      email: 'community@villageconnect.gov',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      department: 'Parks & Recreation',
      head: 'James Wilson',
      phone: '(555) 100-2060',
      email: 'parks@villageconnect.gov',
      hours: 'Mon-Sat: 7:00 AM - 7:00 PM'
    }
  ];

  const upcomingMeetings: Meeting[] = [
    {
      title: 'Village Board Meeting',
      date: 'January 15, 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Village Hall Council Chambers',
      agenda: 'Budget review, infrastructure projects update, community development proposals, and public comments.'
    },
    {
      title: 'Planning Commission Meeting',
      date: 'January 22, 2025',
      time: '6:30 PM - 8:30 PM',
      location: 'Community Center Conference Room',
      agenda: 'Zoning variance requests, new development applications, comprehensive plan review, and public hearings.'
    },
    {
      title: 'Parks & Recreation Committee',
      date: 'January 29, 2025',
      time: '5:00 PM - 6:30 PM',
      location: 'Recreation Center Meeting Room',
      agenda: 'Summer program planning, facility maintenance updates, event calendar approval, and budget discussion.'
    }
  ];

  const tabs = [
    { id: 'departments', label: 'Departments', icon: 'BuildingOfficeIcon' },
    { id: 'meetings', label: 'Meetings', icon: 'CalendarDaysIcon' },
    { id: 'feedback', label: 'Feedback', icon: 'ChatBubbleLeftRightIcon' }
  ];

  if (!isHydrated) {
    return (
      <div className="space-y-12">
        <div className="h-64 bg-muted rounded-lg animate-pulse"></div>
        <div className="h-96 bg-muted rounded-lg animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Emergency Contacts Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">Emergency Contacts</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            For immediate assistance, please use these emergency contact numbers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
              variant="emergency"
            />
          ))}
        </div>
      </section>

      {/* General Contact Information */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">General Contact Information</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Reach out to us through multiple channels for non-emergency inquiries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generalContacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
      </section>

      {/* Office Location Map */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">Visit Our Office</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Find us at our main administration building in the heart of the village
          </p>
        </div>
        <OfficeLocationMap />
      </section>

      {/* Tabbed Content Section */}
      <section>
        <div className="bg-card rounded-lg shadow-subtle overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-border bg-muted">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-body font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-card text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <Icon name={tab.icon as any} size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'departments' && (
              <div>
                <h3 className="font-headline font-semibold text-2xl text-primary mb-6">Department Directory</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((dept, index) => (
                    <DepartmentCard key={index} {...dept} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'meetings' && (
              <div>
                <h3 className="font-headline font-semibold text-2xl text-primary mb-6">Upcoming Public Meetings</h3>
                <div className="space-y-6">
                  {upcomingMeetings.map((meeting, index) => (
                    <MeetingScheduleCard key={index} meeting={meeting} />
                  ))}
                </div>
                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h4 className="font-headline font-semibold text-lg text-primary mb-3">Meeting Information</h4>
                  <ul className="space-y-2 font-body text-sm text-foreground">
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span>All meetings are open to the public and encourage community participation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Meeting agendas are posted 48 hours in advance on our website</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Public comment periods are included in all board meetings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Meeting minutes are published within 7 days of each meeting</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div>
                <FeedbackForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accessibility Resources */}
      <section className="bg-card rounded-lg p-8 shadow-subtle">
        <h2 className="font-headline font-semibold text-2xl text-primary mb-6">Accessibility & Language Assistance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-headline font-semibold text-lg text-secondary mb-4">Accessibility Services</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Wheelchair accessible facilities with ramps and elevators</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Sign language interpreters available upon request (48-hour notice)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Large print and Braille documents available</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Assistive listening devices in meeting rooms</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-secondary mb-4">Language Assistance</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Translation services available in Spanish and other languages</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Bilingual staff members available during business hours</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Key documents translated into multiple languages</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                <span>Phone interpretation services available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="font-body text-sm text-foreground">
            <strong>Request Accommodations:</strong> Contact us at least 48 hours in advance at{' '}
            <a href="tel:5551002000" className="text-primary hover:text-secondary transition-colors">
              (555) 100-2000
            </a>{' '}
            or{' '}
            <a href="mailto:accessibility@villageconnect.gov" className="text-primary hover:text-secondary transition-colors">
              accessibility@villageconnect.gov
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}