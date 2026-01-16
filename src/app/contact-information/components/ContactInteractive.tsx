'use client';

import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import DepartmentCard from './DepartmentCard';
import MeetingScheduleCard from './MeetingScheduleCard';
import FeedbackForm from './FeedbackForm';
import OfficeLocationMap from './OfficeLocationMap';
import Icon from '@/components/ui/AppIcon';

interface Department {
  jabatan: string;
  head: string;
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

  /* ================= KONTAK DARURAT ================= */
  const emergencyContacts = [
    {
      icon: '🚨',
      title: 'Layanan Darurat',
      details: ['Polisi: 110', 'Pemadam Kebakaran: 113', 'Ambulans: 119']
    },
    {
      icon: '🏥',
      title: 'Puskesmas Desa',
      details: [
        'Darurat: (555) 123-4567',
        'Non-Darurat: (555) 123-4568',
        'Luar Jam Kerja: (555) 123-4569'
      ]
    },
    {
      icon: '⚡',
      title: 'Gangguan Utilitas',
      details: [
        'Listrik Padam: (555) 234-5678',
        'Air Darurat: (555) 234-5679',
        'Kebocoran Gas: (555) 234-5680'
      ]
    }
  ];

  /* ================= KONTAK UMUM ================= */
  const generalContacts = [
    {
      icon: '📞',
      title: 'Kantor Desa',
      details: [
        'Telepon: (555) 100-2000',
        'Faks: (555) 100-2001',
        'Jam Kerja: Senin–Jumat 08.00–17.00'
      ]
    },
    {
      icon: '✉️',
      title: 'Email Resmi',
      details: [
        'Umum: info@villageconnect.gov',
        'Layanan: services@villageconnect.gov',
        'Bantuan: support@villageconnect.gov'
      ]
    },
    {
      icon: '📍',
      title: 'Alamat Kantor',
      details: [
        'Kantor Pemerintah Desa',
        'Jl. Raya Utama No. 123',
        'Desa Bangunjaya'
      ]
    }
  ];

  /* ================= PERANGKAT DESA ================= */
  const departments: Department[] = [
    { jabatan: 'Kepala Desa', head: 'OTENG DAKIK SOLEHUDIN, S.Pd.I.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Sekretaris Desa', head: 'JAJANG SUHERMAN, S.IP.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kaur Keuangan', head: 'NURHAJANAH', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kasi Kesejahteraan', head: 'Uken Lukendri, S.Pd.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kasi Pemerintahan', head: 'Dara Padhila Ulfah, S.Pd.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kaur Perencanaan Program', head: 'Abdul Gani', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kaur Umum & Tata Usaha', head: 'Asep Saeful Mikdar', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Perencanaan & Pembangunan', head: 'Bubun Bunyamin, S.Pd.I.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Staf Kaur Keuangan', head: 'Aldo Suhenra, S.Pd.I.', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Operator Umum', head: 'Depi Ali Mutakin, S.IP.', hours: 'Senin–Jumat: 08.00–18.00' },
    { jabatan: 'Kepala Dusun Limusnunggal', head: 'Ragil Herwanda Kumbara', hours: 'Senin–Sabtu: 08.00–16.00' },
    { jabatan: 'Kepala Dusun Cibitung', head: 'Toni Sahroni', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kepala Dusun Cibunar', head: 'Dedih Herdian', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kepala Dusun Cikadu', head: 'Haliman', hours: 'Senin–Jumat: 08.00–16.00' },
    { jabatan: 'Kepala Dusun Sukasari', head: 'Ida Hidayatul Muminah', hours: 'Senin–Jumat: 08.00–16.00' }
  ];

  /* ================= JADWAL RAPAT ================= */
  const upcomingMeetings: Meeting[] = [
    {
      title: 'Rapat Badan Permusyawaratan Desa',
      date: '15 Januari 2025',
      time: '19.00 – 21.00',
      location: 'Balai Desa',
      agenda: 'Pembahasan anggaran desa, laporan pembangunan, dan aspirasi masyarakat.'
    },
    {
      title: 'Rapat Perencanaan Desa',
      date: '22 Januari 2025',
      time: '18.30 – 20.30',
      location: 'Aula Serbaguna',
      agenda: 'Usulan pembangunan, penataan wilayah, dan musyawarah rencana kerja.'
    },
    {
      title: 'Rapat Karang Taruna',
      date: '29 Januari 2025',
      time: '17.00 – 18.30',
      location: 'Gedung Pemuda',
      agenda: 'Program kepemudaan, kegiatan sosial, dan agenda event desa.'
    }
  ];

  const tabs = [
    { id: 'departments', label: 'Perangkat Desa', icon: 'BuildingOfficeIcon' },
    { id: 'meetings', label: 'Jadwal Rapat', icon: 'CalendarDaysIcon' },
    { id: 'feedback', label: 'Saran & Pengaduan', icon: 'ChatBubbleLeftRightIcon' }
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
      {/* KONTAK DARURAT */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">
            Kontak Darurat
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Gunakan kontak berikut untuk kondisi darurat
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

      {/* KONTAK UMUM */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">
            Informasi Kontak Desa
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk keperluan administrasi dan pelayanan
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

      {/* LOKASI KANTOR */}
      <section>
        <div className="text-center mb-8">
          <h2 className="font-headline font-semibold text-3xl text-primary mb-3">
            Lokasi Kantor Desa
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Kunjungi kantor desa untuk pelayanan langsung
          </p>
        </div>
        <OfficeLocationMap />
      </section>

      {/* TAB */}
      <section>
        <div className="bg-card rounded-lg shadow-subtle overflow-hidden">
          <div className="border-b border-border bg-muted">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-body font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-card text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <Icon name={tab.icon as any} size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'departments' && (
              <>
                <h3 className="font-headline font-semibold text-2xl text-primary mb-6">
                  Daftar Perangkat Desa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((dept, index) => (
                      <DepartmentCard
                        key={index}
                        department={dept.jabatan}
                        head={dept.head}
                        hours={dept.hours}
                      />
                    ))}

                </div>
              </>
            )}

            {activeTab === 'meetings' && (
              <>
                <h3 className="font-headline font-semibold text-2xl text-primary mb-6">
                  Jadwal Rapat Desa
                </h3>
                <div className="space-y-6">
                  {upcomingMeetings.map((meeting, index) => (
                    <MeetingScheduleCard key={index} meeting={meeting} />
                  ))}
                </div>
              </>
            )}

            {activeTab === 'feedback' && <FeedbackForm />}
          </div>
        </div>
      </section>
    </div>
  );
}
