'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import {
  getArticles,
  fetchArticles,
  addArticle,
  updateArticle,
  deleteArticle,
  getResidents,
  fetchResidents,
  addResident,
  updateResident,
  deleteResident,
  getDownloads,
  fetchDownloads,
  addDownload,
  updateDownload,
  deleteDownload,
  getGallery,
  fetchGallery,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  Article,
  Resident,
  DownloadItem,
  GalleryItem,
  getPengumuman,
  fetchPengumuman,
  addPengumuman,
  updatePengumuman,
  deletePengumuman,
  getLayananSurat,
  fetchLayananSurat,
  addLayananSurat,
  updateLayananSurat,
  deleteLayananSurat,
  Pengumuman,
  LayananSurat,
} from '@/utils/storage';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'articles' | 'residents' | 'downloads' | 'gallery' | 'pengumuman' | 'surat'>('overview');

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  // Data States
  const [articles, setArticles] = useState<Article[]>([]);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
  const [surat, setSurat] = useState<LayananSurat[]>([]);

  // Form States (for Create & Edit modals)
  const [editingItem, setEditingItem] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'articles' | 'residents' | 'downloads' | 'gallery' | 'pengumuman' | 'surat' | null>(null);

  // Form inputs
  const [articleForm, setArticleForm] = useState({ title: '', content: '', image: '', category: 'Kabar Desa' });
  const [residentForm, setResidentForm] = useState<Resident>({
    nik: '',
    nama: '',
    gender: 'Pria',
    usia: 30,
    rt: 1,
    dusun: 'Limusnunggal',
    pendidikan: 'SLTA/Sederajat',
    pekerjaan: 'Swasta',
  });
  const [downloadForm, setDownloadForm] = useState({ title: '', berkas: '' });
  const [galleryForm, setGalleryForm] = useState({ title: '', keterangan: '', image: '', date: '' });
  const [pengumumanForm, setPengumumanForm] = useState({ title: '', content: '', date: '' });
  const [suratForm, setSuratForm] = useState<LayananSurat>({
    id: 0,
    nama_pemohon: '',
    nik: '',
    jenis_surat: 'Surat Keterangan Domisili',
    keperluan: '',
    status: 'Pending',
    date: '',
  });

  // Load Data & Authenticate
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!isLoggedIn) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      // Load local cache instantly
      setArticles(getArticles());
      setResidents(getResidents());
      setDownloads(getDownloads());
      setGallery(getGallery());
      setPengumuman(getPengumuman());
      setSurat(getLayananSurat());

      // Fetch fresh data from Supabase Cloud
      fetchArticles().then(data => setArticles(data));
      fetchResidents().then(data => setResidents(data));
      fetchDownloads().then(data => setDownloads(data));
      fetchGallery().then(data => setGallery(data));
      fetchPengumuman().then(data => setPengumuman(data));
      fetchLayananSurat().then(data => setSurat(data));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    router.push('/admin/login');
  };

  // CRUD Handlers
  const handleOpenCreateModal = (type: 'articles' | 'residents' | 'downloads' | 'gallery' | 'pengumuman' | 'surat') => {
    setEditingItem(null);
    setModalType(type);
    setModalOpen(true);
    if (type === 'articles') {
      setArticleForm({ title: '', content: '', image: '', category: 'Kabar Desa' });
    } else if (type === 'residents') {
      setResidentForm({
        nik: '',
        nama: '',
        gender: 'Pria',
        usia: 30,
        rt: 1,
        dusun: 'Limusnunggal',
        pendidikan: 'SLTA/Sederajat',
        pekerjaan: 'Swasta',
      });
    } else if (type === 'downloads') {
      setDownloadForm({ title: '', berkas: '' });
    } else if (type === 'gallery') {
      setGalleryForm({ title: '', keterangan: '', image: '', date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) });
    } else if (type === 'pengumuman') {
      setPengumumanForm({ title: '', content: '', date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) });
    } else if (type === 'surat') {
      setSuratForm({
        id: 0,
        nama_pemohon: '',
        nik: '',
        jenis_surat: 'Surat Keterangan Domisili',
        keperluan: '',
        status: 'Pending',
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      });
    }
  };

  const handleOpenEditModal = (type: 'articles' | 'residents' | 'downloads' | 'gallery' | 'pengumuman' | 'surat', item: any) => {
    setEditingItem(item);
    setModalType(type);
    setModalOpen(true);
    if (type === 'articles') {
      setArticleForm({ title: item.title, content: item.content, image: item.image, category: item.category });
    } else if (type === 'residents') {
      setResidentForm({ ...item });
    } else if (type === 'downloads') {
      setDownloadForm({ title: item.title, berkas: item.berkas });
    } else if (type === 'gallery') {
      setGalleryForm({ title: item.title, keterangan: item.keterangan, image: item.image, date: item.date });
    } else if (type === 'pengumuman') {
      setPengumumanForm({ title: item.title, content: item.content, date: item.date });
    } else if (type === 'surat') {
      setSuratForm({ ...item });
    }
  };

  const handleDeleteItem = async (type: 'articles' | 'residents' | 'downloads' | 'gallery' | 'pengumuman' | 'surat', uniqueId: any) => {
    if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) return;

    if (type === 'articles') {
      await deleteArticle(uniqueId);
      setArticles(articles.filter(a => a.id !== uniqueId));
    } else if (type === 'residents') {
      await deleteResident(uniqueId);
      setResidents(residents.filter(r => r.nik !== uniqueId));
    } else if (type === 'downloads') {
      await deleteDownload(uniqueId);
      setDownloads(downloads.filter(d => d.id !== uniqueId));
    } else if (type === 'gallery') {
      await deleteGalleryItem(uniqueId);
      setGallery(gallery.filter(g => g.id !== uniqueId));
    } else if (type === 'pengumuman') {
      await deletePengumuman(uniqueId);
      setPengumuman(pengumuman.filter(p => p.id !== uniqueId));
    } else if (type === 'surat') {
      await deleteLayananSurat(uniqueId);
      setSurat(surat.filter(s => s.id !== uniqueId));
    }
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (modalType === 'articles') {
      if (editingItem) {
        await updateArticle(editingItem.id, articleForm);
        setArticles(articles.map(a => a.id === editingItem.id ? { ...a, ...articleForm } : a));
      } else {
        const added = await addArticle({
          title: articleForm.title,
          content: articleForm.content,
          image: articleForm.image || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
          category: articleForm.category,
          date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        });
        setArticles([added, ...articles]);
      }
    } else if (modalType === 'residents') {
      if (editingItem) {
        await updateResident(editingItem.nik, residentForm);
        setResidents(residents.map(r => r.nik === editingItem.nik ? { ...residentForm } : r));
      } else {
        if (residents.some(r => r.nik === residentForm.nik)) {
          alert('NIK sudah terdaftar!');
          return;
        }
        const added = await addResident(residentForm);
        setResidents([...residents, added]);
      }
    } else if (modalType === 'downloads') {
      if (editingItem) {
        await updateDownload(editingItem.id, downloadForm);
        setDownloads(downloads.map(d => d.id === editingItem.id ? { ...d, ...downloadForm } : d));
      } else {
        const added = await addDownload({
          title: downloadForm.title,
          berkas: downloadForm.berkas || 'dokumen.pdf',
        });
        setDownloads([...downloads, added]);
      }
    } else if (modalType === 'gallery') {
      if (editingItem) {
        await updateGalleryItem(editingItem.id, galleryForm);
        setGallery(gallery.map(g => g.id === editingItem.id ? { ...g, ...galleryForm } : g));
      } else {
        const added = await addGalleryItem({
          title: galleryForm.title,
          keterangan: galleryForm.keterangan,
          image: galleryForm.image || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600',
          date: galleryForm.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        });
        setGallery([added, ...gallery]);
      }
    } else if (modalType === 'pengumuman') {
      if (editingItem) {
        await updatePengumuman(editingItem.id, pengumumanForm);
        setPengumuman(pengumuman.map(p => p.id === editingItem.id ? { ...p, ...pengumumanForm } : p));
      } else {
        const added = await addPengumuman({
          title: pengumumanForm.title,
          content: pengumumanForm.content,
          date: pengumumanForm.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        });
        setPengumuman([added, ...pengumuman]);
      }
    } else if (modalType === 'surat') {
      if (editingItem) {
        await updateLayananSurat(editingItem.id, suratForm);
        setSurat(surat.map(s => s.id === editingItem.id ? { ...s, ...suratForm } : s));
      } else {
        const added = await addLayananSurat({
          nama_pemohon: suratForm.nama_pemohon,
          nik: suratForm.nik,
          jenis_surat: suratForm.jenis_surat,
          keperluan: suratForm.keperluan,
          status: suratForm.status || 'Pending',
          date: suratForm.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        });
        setSurat([added, ...surat]);
      }
    }

    setModalOpen(false);
    setModalType(null);
    setEditingItem(null);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-card flex items-center justify-center text-foreground">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary"></div>
          <p className="text-sm text-muted-foreground font-body">Memverifikasi akses admin...</p>
        </div>
      </div>
    );
  }

  // Dashboard Stats Calculations
  const totalResidents = residents.length;
  const maleResidents = residents.filter(r => r.gender === 'Pria').length;
  const femaleResidents = residents.filter(r => r.gender === 'Wanita').length;
  const totalArticles = articles.length;
  const totalDownloads = downloads.length;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
      <Header />

      <div className="flex-grow flex flex-col lg:flex-row pt-20 lg:pt-24">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-64 bg-card border-b lg:border-b-0 lg:border-r border-border flex flex-col p-4 space-y-2">
          <div className="px-4 py-3 mb-4 hidden lg:block">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider font-body">
              Menu Navigasi
            </h2>
          </div>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'overview'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="HomeIcon" size={20} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'articles'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="NewspaperIcon" size={20} />
              Artikel & Berita
            </button>
            <button
              onClick={() => setActiveTab('residents')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'residents'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="UsersIcon" size={20} />
              Data Penduduk
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'downloads'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              Dokumen Unduhan
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'gallery'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="PhotoIcon" size={20} />
              Galeri Desa
            </button>
            <button
              onClick={() => setActiveTab('pengumuman')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'pengumuman'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="BellAlertIcon" size={20} />
              Pengumuman
            </button>
            <button
              onClick={() => setActiveTab('surat')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-cta ${
                activeTab === 'surat'
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-slate-200/40'
              }`}
            >
              <Icon name="EnvelopeIcon" size={20} />
              Layanan Surat
            </button>
          </nav>

          <div className="hidden lg:flex flex-grow items-end pb-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-destructive hover:text-destructive/80 hover:bg-destructive/10 transition-colors font-cta"
            >
              <Icon name="ArrowLeftOnRectangleIcon" size={20} />
              Logout Admin
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow p-6 lg:p-8 overflow-y-auto max-w-7xl">
          {/* Active Tab: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-headline font-bold text-primary">Ringkasan Statistik</h1>
                <button
                  onClick={handleLogout}
                  className="lg:hidden px-4 py-2 text-xs font-semibold text-destructive hover:text-destructive/80 border border-destructive/20 rounded-xl transition-all font-cta"
                >
                  Logout
                </button>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden shadow-card">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                  <h3 className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2 font-body">Total Penduduk</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-primary font-headline">{totalResidents}</span>
                    <span className="text-xs text-muted-foreground">Jiwa</span>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-600 font-body">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> Laki-laki: {maleResidents}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span> Perempuan: {femaleResidents}
                    </span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden shadow-card">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                  <h3 className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2 font-body">Artikel / Berita</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-primary font-headline">{totalArticles}</span>
                    <span className="text-xs text-muted-foreground">Rilis</span>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 font-body">Dipublikasikan secara publik di portal berita</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden shadow-card">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                  <h3 className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2 font-body">Dokumen Unduhan</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-primary font-headline">{totalDownloads}</span>
                    <span className="text-xs text-muted-foreground">Berkas</span>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 font-body">Regulasi & Administrasi Desa siap unduh</p>
                </div>
              </div>

              {/* Graphic/Visual Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-headline font-bold text-primary mb-6">Distribusi Gender Penduduk</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-slate-700 mb-1 font-body">
                        <span>Pria</span>
                        <span>{maleResidents} Jiwa ({totalResidents ? Math.round((maleResidents/totalResidents)*100) : 0}%)</span>
                      </div>
                      <div className="w-full bg-slate-200/70 h-3 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: `${totalResidents ? (maleResidents/totalResidents)*100 : 0}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-slate-700 mb-1 font-body">
                        <span>Wanita</span>
                        <span>{femaleResidents} Jiwa ({totalResidents ? Math.round((femaleResidents/totalResidents)*100) : 0}%)</span>
                      </div>
                      <div className="w-full bg-slate-200/70 h-3 rounded-full overflow-hidden">
                        <div className="bg-pink-500 h-full rounded-full" style={{ width: `${totalResidents ? (femaleResidents/totalResidents)*100 : 0}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-headline font-bold text-primary mb-4 font-body">Informasi Quick Info</h3>
                  <div className="space-y-4 text-sm text-slate-700 font-body">
                    <div className="flex justify-between border-b border-border/40 pb-2">
                      <span className="text-slate-500">Nama Desa</span>
                      <span className="font-semibold text-slate-900">Desa Bangunjaya</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-2">
                      <span className="text-slate-500">Kecamatan</span>
                      <span className="text-slate-900">Langkaplancar</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-2">
                      <span className="text-slate-500">Kabupaten</span>
                      <span className="text-slate-900">Pangandaran</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-slate-500">Status Server</span>
                      <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full animate-ping"></span>
                        Terhubung ke Database Cloud
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Artikel / Berita</h1>
                  <p className="text-sm text-muted-foreground font-body">Tulis, edit, dan publikasikan artikel berita desa</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('articles')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tulis Berita Baru
                </button>
              </div>

              {/* Table list */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-800">
                    <thead className="bg-slate-200/40 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-border">
                      <tr>
                        <th className="px-6 py-4">Judul</th>
                        <th className="px-6 py-4">Kategori</th>
                        <th className="px-6 py-4">Tanggal Rilis</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {articles.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center py-10 text-slate-400 font-body">
                            Tidak ada data artikel.
                          </td>
                        </tr>
                      ) : (
                        articles.map(article => (
                          <tr key={article.id} className="hover:bg-slate-200/20 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-900 max-w-xs truncate font-body">
                              {article.title}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                {article.category || 'Berita'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500 font-body">{article.date}</td>
                            <td className="px-6 py-4 text-right space-x-2">
                              <button
                                onClick={() => handleOpenEditModal('articles', article)}
                                className="text-primary hover:text-primary/80 font-semibold text-xs px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteItem('articles', article.id)}
                                className="text-destructive hover:text-destructive/80 font-semibold text-xs px-2.5 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta"
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: RESIDENTS */}
          {activeTab === 'residents' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Data Penduduk</h1>
                  <p className="text-sm text-muted-foreground font-body">Database kependudukan resmi Desa Bangunjaya</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('residents')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tambah Penduduk
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 bg-card p-4 border border-border rounded-2xl shadow-card">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Cari NIK atau Nama..."
                    className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary font-body"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-48">
                  <select
                    className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option value="">Semua Gender</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                </div>
              </div>

              {/* Table list */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-800">
                    <thead className="bg-slate-200/40 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-border">
                      <tr>
                        <th className="px-6 py-4">NIK</th>
                        <th className="px-6 py-4">Nama</th>
                        <th className="px-6 py-4">Gender</th>
                        <th className="px-6 py-4">Usia</th>
                        <th className="px-6 py-4">Dusun (RT)</th>
                        <th className="px-6 py-4">Pekerjaan</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {residents.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="text-center py-10 text-slate-400 font-body">
                            Tidak ada data penduduk.
                          </td>
                        </tr>
                      ) : (
                        residents
                          .filter(r => {
                            const matchesSearch = r.nik.includes(searchTerm) || r.nama.toLowerCase().includes(searchTerm.toLowerCase());
                            const matchesGender = genderFilter === '' || r.gender === genderFilter;
                            return matchesSearch && matchesGender;
                          })
                          .map(res => (
                            <tr key={res.nik} className="hover:bg-slate-200/20 transition-colors">
                              <td className="px-6 py-4 font-mono text-xs text-slate-500">{res.nik}</td>
                              <td className="px-6 py-4 font-semibold text-slate-900 font-body">{res.nama}</td>
                              <td className="px-6 py-4 font-body">{res.gender}</td>
                              <td className="px-6 py-4 font-body">{res.usia} Tahun</td>
                              <td className="px-6 py-4 font-body">{res.dusun} (RT {res.rt})</td>
                              <td className="px-6 py-4 text-slate-500 font-body">{res.pekerjaan}</td>
                              <td className="px-6 py-4 text-right space-x-2">
                                <button
                                  onClick={() => handleOpenEditModal('residents', res)}
                                  className="text-primary hover:text-primary/80 font-semibold text-xs px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteItem('residents', res.nik)}
                                  className="text-destructive hover:text-destructive/80 font-semibold text-xs px-2.5 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta"
                                >
                                  Hapus
                                </button>
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Berkas Unduhan</h1>
                  <p className="text-sm text-muted-foreground font-body">Bagikan file regulasi, permen, dan dokumen publik</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('downloads')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tambah Berkas
                </button>
              </div>

              {/* Table list */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-800">
                    <thead className="bg-slate-200/40 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-border">
                      <tr>
                        <th className="px-6 py-4">Nama Dokumen / Berkas</th>
                        <th className="px-6 py-4">Nama File</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {downloads.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="text-center py-10 text-slate-400 font-body">
                            Tidak ada dokumen unduhan.
                          </td>
                        </tr>
                      ) : (
                        downloads.map(download => (
                          <tr key={download.id} className="hover:bg-slate-200/20 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-900 font-body">{download.title}</td>
                            <td className="px-6 py-4 text-slate-500 font-mono text-xs">{download.berkas}</td>
                            <td className="px-6 py-4 text-right space-x-2">
                              <button
                                onClick={() => handleOpenEditModal('downloads', download)}
                                className="text-primary hover:text-primary/80 font-semibold text-xs px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteItem('downloads', download.id)}
                                className="text-destructive hover:text-destructive/80 font-semibold text-xs px-2.5 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta"
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Galeri Kegiatan</h1>
                  <p className="text-sm text-muted-foreground font-body">Dokumentasikan momen-momen terbaik desa</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('gallery')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tambah Galeri
                </button>
              </div>

              {/* Gallery Grid */}
              {gallery.length === 0 ? (
                <div className="bg-card border border-border rounded-2xl p-10 text-center text-slate-400 font-body">
                  Tidak ada galeri foto kegiatan.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-body">
                  {gallery.map(item => (
                    <div key={item.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-card group relative">
                      <div className="h-48 overflow-hidden relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-lg text-[10px] text-slate-800 font-bold border border-border shadow-subtle">
                          {item.date}
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-semibold text-slate-900 truncate">{item.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2 h-8">{item.keterangan}</p>
                        <div className="flex justify-end gap-2 pt-3 border-t border-border/40">
                          <button
                            onClick={() => handleOpenEditModal('gallery', item)}
                            className="text-primary hover:text-primary/80 text-xs font-semibold px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteItem('gallery', item.id)}
                            className="text-destructive hover:text-destructive/80 text-xs font-semibold px-2.5 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Active Tab: PENGUMUMAN */}
          {activeTab === 'pengumuman' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Pengumuman</h1>
                  <p className="text-sm text-muted-foreground font-body">Informasikan hal penting kepada masyarakat desa</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('pengumuman')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tambah Pengumuman
                </button>
              </div>
              <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border/60">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Judul & Isi</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {pengumuman.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="py-8 text-center text-slate-400 font-body text-sm">Belum ada data pengumuman.</td>
                        </tr>
                      ) : (
                        pengumuman.map(item => (
                          <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6">
                              <div className="font-semibold text-slate-900">{item.title}</div>
                              <div className="text-xs text-slate-500 mt-1 max-w-md truncate">{item.content}</div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600">{item.date}</td>
                            <td className="py-4 px-6 text-right space-x-2">
                              <button onClick={() => handleOpenEditModal('pengumuman', item)} className="text-primary hover:text-primary/80 text-xs font-semibold px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta">Edit</button>
                              <button onClick={() => handleDeleteItem('pengumuman', item.id)} className="text-destructive hover:text-destructive/80 text-xs font-semibold px-3 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta">Hapus</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: SURAT */}
          {activeTab === 'surat' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-headline font-bold text-primary">Kelola Layanan Surat</h1>
                  <p className="text-sm text-muted-foreground font-body">Daftar permohonan surat dari masyarakat desa</p>
                </div>
                <button
                  onClick={() => handleOpenCreateModal('surat')}
                  className="bg-primary hover:bg-primary/95 text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-subtle flex items-center gap-2 font-cta"
                >
                  <Icon name="PlusIcon" size={16} />
                  Tambah Permohonan
                </button>
              </div>
              <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border/60">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Pemohon</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Jenis Surat</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Keperluan</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {surat.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-400 font-body text-sm">Belum ada permohonan surat.</td>
                        </tr>
                      ) : (
                        surat.map(item => (
                          <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6">
                              <div className="font-semibold text-slate-900">{item.nama_pemohon}</div>
                              <div className="text-xs text-slate-500 mt-1">NIK: {item.nik}</div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 font-semibold">{item.jenis_surat}</td>
                            <td className="py-4 px-6 text-sm text-slate-600 max-w-xs truncate">{item.keperluan}</td>
                            <td className="py-4 px-6">
                              <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${item.status === 'Selesai' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : item.status === 'Diproses' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                              <button onClick={() => handleOpenEditModal('surat', item)} className="text-primary hover:text-primary/80 text-xs font-semibold px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all font-cta">Edit</button>
                              <button onClick={() => handleDeleteItem('surat', item.id)} className="text-destructive hover:text-destructive/80 text-xs font-semibold px-3 py-1.5 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-all font-cta">Hapus</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* CRUD MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-background border border-border w-full max-w-2xl rounded-2xl shadow-elevated overflow-hidden max-h-[90vh] flex flex-col text-foreground font-body">
            <div className="px-6 py-4 bg-card border-b border-border flex justify-between items-center">
              <h2 className="text-lg font-bold font-headline text-primary">
                {editingItem ? 'Edit Data' : 'Tambah Data Baru'} - {modalType === 'articles' ? 'Artikel' : modalType === 'residents' ? 'Penduduk' : modalType === 'downloads' ? 'Unduhan' : modalType === 'gallery' ? 'Galeri' : modalType === 'pengumuman' ? 'Pengumuman' : 'Layanan Surat'}
              </h2>
              <button onClick={() => setModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="p-6 space-y-4 overflow-y-auto flex-grow font-body">
              {/* Form Fields: Articles */}
              {modalType === 'articles' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Judul Artikel</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={articleForm.title}
                      onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kategori</label>
                    <select
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={articleForm.category}
                      onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                    >
                      <option value="Kabar Desa">Kabar Desa</option>
                      <option value="Artikel">Artikel</option>
                      <option value="Opini">Opini</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">URL Gambar (Unsplash/Web)</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="https://images.unsplash.com/..."
                      value={articleForm.image}
                      onChange={(e) => setArticleForm({ ...articleForm, image: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Isi Artikel</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={articleForm.content}
                      onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Form Fields: Residents */}
              {modalType === 'residents' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">NIK (16 Digit)</label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      disabled={!!editingItem}
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 font-mono"
                      value={residentForm.nik}
                      onChange={(e) => setResidentForm({ ...residentForm, nik: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.nama}
                      onChange={(e) => setResidentForm({ ...residentForm, nama: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Gender</label>
                    <select
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.gender}
                      onChange={(e) => setResidentForm({ ...residentForm, gender: e.target.value as any })}
                    >
                      <option value="Pria">Pria</option>
                      <option value="Wanita">Wanita</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Usia</label>
                    <input
                      type="number"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.usia}
                      onChange={(e) => setResidentForm({ ...residentForm, usia: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">RT</label>
                    <input
                      type="number"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.rt}
                      onChange={(e) => setResidentForm({ ...residentForm, rt: parseInt(e.target.value) || 1 })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Dusun</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.dusun}
                      onChange={(e) => setResidentForm({ ...residentForm, dusun: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pendidikan Terakhir</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="SLTA/Sederajat"
                      value={residentForm.pendidikan}
                      onChange={(e) => setResidentForm({ ...residentForm, pendidikan: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pekerjaan</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={residentForm.pekerjaan}
                      onChange={(e) => setResidentForm({ ...residentForm, pekerjaan: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Form Fields: Downloads */}
              {modalType === 'downloads' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Dokumen</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={downloadForm.title}
                      onChange={(e) => setDownloadForm({ ...downloadForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama File Berkas</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="rkpdes_2026.pdf"
                      value={downloadForm.berkas}
                      onChange={(e) => setDownloadForm({ ...downloadForm, berkas: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Form Fields: Gallery */}
              {modalType === 'gallery' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Judul Kegiatan</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Keterangan Kegiatan</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={galleryForm.keterangan}
                      onChange={(e) => setGalleryForm({ ...galleryForm, keterangan: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">URL Gambar</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="https://images.unsplash.com/..."
                      value={galleryForm.image}
                      onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tanggal Kegiatan</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="12 Februari 2026"
                      value={galleryForm.date}
                      onChange={(e) => setGalleryForm({ ...galleryForm, date: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Form Fields: Pengumuman */}
              {modalType === 'pengumuman' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Judul Pengumuman</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={pengumumanForm.title}
                      onChange={(e) => setPengumumanForm({ ...pengumumanForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Isi Pengumuman</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={pengumumanForm.content}
                      onChange={(e) => setPengumumanForm({ ...pengumumanForm, content: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Form Fields: Surat */}
              {modalType === 'surat' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Pemohon</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={suratForm.nama_pemohon}
                      onChange={(e) => setSuratForm({ ...suratForm, nama_pemohon: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">NIK Pemohon</label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                      value={suratForm.nik}
                      onChange={(e) => setSuratForm({ ...suratForm, nik: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Jenis Surat</label>
                    <select
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={suratForm.jenis_surat}
                      onChange={(e) => setSuratForm({ ...suratForm, jenis_surat: e.target.value })}
                    >
                      <option value="Surat Keterangan Domisili">Surat Keterangan Domisili</option>
                      <option value="Surat Keterangan Usaha">Surat Keterangan Usaha</option>
                      <option value="Surat Keterangan Tidak Mampu">Surat Keterangan Tidak Mampu</option>
                      <option value="Pengantar SKCK">Pengantar SKCK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Keperluan</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={suratForm.keperluan}
                      onChange={(e) => setSuratForm({ ...suratForm, keperluan: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status Permohonan</label>
                    <select
                      className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={suratForm.status}
                      onChange={(e) => setSuratForm({ ...suratForm, status: e.target.value as any })}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors font-cta"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-xl text-sm transition-colors shadow-subtle font-cta"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
