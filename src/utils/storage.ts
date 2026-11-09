'use client';

import { supabase, isSupabaseConfigured } from './supabase';

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export interface Resident {
  nik: string;
  nama: string;
  gender: 'Pria' | 'Wanita';
  usia: number;
  rt: number;
  dusun: string;
  pendidikan: string;
  pekerjaan: string;
}

export interface DownloadItem {
  id: number;
  title: string;
  berkas: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  keterangan: string;
  image: string;
  date: string;
}

export interface Pengumuman {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface LayananSurat {
  id: number;
  nama_pemohon: string;
  nik: string;
  jenis_surat: string;
  keperluan: string;
  status: 'Pending' | 'Diproses' | 'Selesai';
  date: string;
}

// Initial mock data to seed localStorage if empty
const defaultArticles: Article[] = [
  {
    id: 1,
    title: 'Kerja Bakti Warga Desa Bangunjaya',
    date: '10 Januari 2026',
    excerpt: 'Warga Desa Bangunjaya melaksanakan kerja bakti membersihkan lingkungan sebagai wujud kepedulian terhadap kebersihan dan kesehatan bersama.',
    content: 'Warga Desa Bangunjaya melaksanakan kerja bakti membersihkan lingkungan sebagai bentuk kepedulian terhadap kebersihan dan kesehatan bersama.\n\nKegiatan ini melibatkan berbagai elemen masyarakat mulai dari pemuda, ibu-ibu PKK, hingga perangkat desa.\n\nKerja bakti difokuskan pada pembersihan jalan desa, saluran air, dan fasilitas umum. Selain menciptakan lingkungan yang bersih dan sehat, kegiatan ini juga mempererat rasa kebersamaan antarwarga.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
    category: 'Kabar Desa'
  } as any,
  {
    id: 2,
    title: 'Turnamen Voli Karang Taruna',
    date: '5 Januari 2026',
    excerpt: 'Dalam rangka mempererat silaturahmi antarwarga, Karang Taruna Desa Bangunjaya mengadakan turnamen bola voli.',
    content: 'Karang Taruna Desa Bangunjaya mengadakan turnamen bola voli yang diikuti oleh perwakilan tiap dusun.\n\nKegiatan ini bertujuan mempererat silaturahmi sekaligus menumbuhkan semangat sportivitas.\n\nTurnamen berlangsung meriah dan mendapat sambutan hangat dari masyarakat.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200',
    category: 'Kabar Desa'
  } as any
];

const defaultResidents: Resident[] = [
  {
    nik: '7404100106690001',
    nama: 'La Sarimajo',
    gender: 'Pria',
    usia: 50,
    rt: 1,
    dusun: 'Limusnunggal',
    pendidikan: 'Tamat SD/Sederajat',
    pekerjaan: 'Nelayan/Perikanan'
  },
  {
    nik: '7404104106720001',
    nama: 'Wa Ode Hajiani',
    gender: 'Wanita',
    usia: 47,
    rt: 1,
    dusun: 'Cibitung',
    pendidikan: 'Tamat SD/Sederajat',
    pekerjaan: 'Mengurus Rumah Tangga'
  },
  {
    nik: '7404101204940001',
    nama: 'Sarwan',
    gender: 'Pria',
    usia: 25,
    rt: 2,
    dusun: 'Ngapaompu',
    pendidikan: 'SLTA/Sederajat',
    pekerjaan: 'Nelayan/Perikanan'
  }
];

const defaultDownloads: DownloadItem[] = [
  {
    id: 1,
    title: 'PermenDesaPDTT Nomor 11 Tahun 2019 tentang Prioritas Penggunaan Dana Desa',
    berkas: 'PermenDesaPDTT_Nomor_11_Tahun_2019.pdf'
  },
  {
    id: 2,
    title: 'Rencana Kerja Pemerintah Desa (RKPDes) Tahun Anggaran 2026',
    berkas: 'RKPDes_Bangunjaya_2026.pdf'
  }
];

const defaultGallery: GalleryItem[] = [
  {
    id: 1,
    title: 'Pembangunan Saluran Irigasi Baru',
    keterangan: 'Pembangunan infrastruktur irigasi di Dusun Cibitung.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600',
    date: '12 Februari 2026'
  },
  {
    id: 2,
    title: 'Sosialisasi Kesehatan Puskesmas Keliling',
    keterangan: 'Pemeriksaan gratis untuk warga lansia dan balita.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600',
    date: '20 Januari 2026'
  }
];

const defaultPengumuman: Pengumuman[] = [
  {
    id: 1,
    title: 'Pemberitahuan Pemadaman Listrik Bergilir',
    content: 'Sehubungan dengan pemeliharaan jaringan oleh PLN, akan dilakukan pemadaman listrik bergilir di Dusun Limusnunggal pada tanggal 25 September 2026.',
    date: '20 September 2026'
  }
];

const defaultLayananSurat: LayananSurat[] = [
  {
    id: 1,
    nama_pemohon: 'La Sarimajo',
    nik: '7404100106690001',
    jenis_surat: 'Surat Keterangan Domisili',
    keperluan: 'Persyaratan melamar pekerjaan',
    status: 'Pending',
    date: '20 September 2026'
  }
];

function getSafeLocalStorage(key: string, defaultValue: any) {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    if (!item) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error('Error reading localStorage key', key, error);
    return defaultValue;
  }
}

function setSafeLocalStorage(key: string, value: any) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing localStorage key', key, error);
  }
}

// ----------------------------------------------------
// ARTICLES PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getArticles = (): Article[] => getSafeLocalStorage('desa_articles', defaultArticles);
export const saveArticles = (articles: Article[]) => setSafeLocalStorage('desa_articles', articles);

export const fetchArticles = async (): Promise<Article[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) {
      const mapped: Article[] = data.map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        image: item.image,
        category: item.category,
        date: item.date || new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      }));
      saveArticles(mapped);
      return mapped;
    }
    console.error('Supabase fetch articles error:', error);
  }
  return getArticles();
};

export const addArticle = async (article: Omit<Article, 'id'>): Promise<Article> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('articles')
      .insert([{
        title: article.title,
        content: article.content,
        image: article.image,
        category: article.category,
        date: article.date
      }])
      .select();
    if (!error && data && data[0]) {
      const newArt: Article = {
        id: data[0].id,
        title: data[0].title,
        content: data[0].content,
        image: data[0].image,
        category: data[0].category,
        date: data[0].date
      };
      saveArticles([newArt, ...getArticles()]);
      return newArt;
    }
    console.error('Supabase add article error:', error);
  }
  const newArt: Article = { id: Date.now(), ...article };
  saveArticles([newArt, ...getArticles()]);
  return newArt;
};

export const updateArticle = async (id: number, article: Partial<Article>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('articles')
      .update({
        title: article.title,
        content: article.content,
        image: article.image,
        category: article.category,
        date: article.date
      })
      .eq('id', id);
    if (error) console.error('Supabase update article error:', error);
  }
  saveArticles(getArticles().map(a => a.id === id ? { ...a, ...article } : a));
};

export const deleteArticle = async (id: number): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('articles').delete().eq('id', id);
    if (error) console.error('Supabase delete article error:', error);
  }
  saveArticles(getArticles().filter(a => a.id !== id));
};

// ----------------------------------------------------
// RESIDENTS PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getResidents = (): Resident[] => getSafeLocalStorage('desa_residents', defaultResidents);
export const saveResidents = (residents: Resident[]) => setSafeLocalStorage('desa_residents', residents);

export const fetchResidents = async (): Promise<Resident[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('residents')
      .select('*')
      .order('nama', { ascending: true });
    if (!error && data) {
      saveResidents(data as Resident[]);
      return data as Resident[];
    }
    console.error('Supabase fetch residents error:', error);
  }
  return getResidents();
};

export const addResident = async (res: Resident): Promise<Resident> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('residents')
      .insert([res])
      .select();
    if (!error && data && data[0]) {
      saveResidents([...getResidents(), data[0] as Resident]);
      return data[0] as Resident;
    }
    console.error('Supabase add resident error:', error);
  }
  saveResidents([...getResidents(), res]);
  return res;
};

export const updateResident = async (nik: string, res: Partial<Resident>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('residents')
      .update(res)
      .eq('nik', nik);
    if (error) console.error('Supabase update resident error:', error);
  }
  saveResidents(getResidents().map(r => r.nik === nik ? { ...r, ...res } : r));
};

export const deleteResident = async (nik: string): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('residents').delete().eq('nik', nik);
    if (error) console.error('Supabase delete resident error:', error);
  }
  saveResidents(getResidents().filter(r => r.nik !== nik));
};

// ----------------------------------------------------
// DOWNLOADS PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getDownloads = (): DownloadItem[] => getSafeLocalStorage('desa_downloads', defaultDownloads);
export const saveDownloads = (downloads: DownloadItem[]) => setSafeLocalStorage('desa_downloads', downloads);

export const fetchDownloads = async (): Promise<DownloadItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('downloads')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) {
      saveDownloads(data as DownloadItem[]);
      return data as DownloadItem[];
    }
    console.error('Supabase fetch downloads error:', error);
  }
  return getDownloads();
};

export const addDownload = async (item: Omit<DownloadItem, 'id'>): Promise<DownloadItem> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('downloads')
      .insert([item])
      .select();
    if (!error && data && data[0]) {
      saveDownloads([...getDownloads(), data[0] as DownloadItem]);
      return data[0] as DownloadItem;
    }
    console.error('Supabase add download error:', error);
  }
  const newItem = { id: Date.now(), ...item };
  saveDownloads([...getDownloads(), newItem]);
  return newItem;
};

export const updateDownload = async (id: number, item: Partial<DownloadItem>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('downloads')
      .update(item)
      .eq('id', id);
    if (error) console.error('Supabase update download error:', error);
  }
  saveDownloads(getDownloads().map(d => d.id === id ? { ...d, ...item } : d));
};

export const deleteDownload = async (id: number): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('downloads').delete().eq('id', id);
    if (error) console.error('Supabase delete download error:', error);
  }
  saveDownloads(getDownloads().filter(d => d.id !== id));
};

// ----------------------------------------------------
// GALLERY PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getGallery = (): GalleryItem[] => getSafeLocalStorage('desa_gallery', defaultGallery);
export const saveGallery = (gallery: GalleryItem[]) => setSafeLocalStorage('desa_gallery', gallery);

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) {
      saveGallery(data as GalleryItem[]);
      return data as GalleryItem[];
    }
    console.error('Supabase fetch gallery error:', error);
  }
  return getGallery();
};

export const addGalleryItem = async (item: Omit<GalleryItem, 'id'>): Promise<GalleryItem> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('gallery')
      .insert([item])
      .select();
    if (!error && data && data[0]) {
      saveGallery([data[0] as GalleryItem, ...getGallery()]);
      return data[0] as GalleryItem;
    }
    console.error('Supabase add gallery error:', error);
  }
  const newItem = { id: Date.now(), ...item };
  saveGallery([newItem, ...getGallery()]);
  return newItem;
};

export const updateGalleryItem = async (id: number, item: Partial<GalleryItem>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('gallery')
      .update(item)
      .eq('id', id);
    if (error) console.error('Supabase update gallery error:', error);
  }
  saveGallery(getGallery().map(g => g.id === id ? { ...g, ...item } : g));
};

export const deleteGalleryItem = async (id: number): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) console.error('Supabase delete gallery error:', error);
  }
  saveGallery(getGallery().filter(g => g.id !== id));
};

// ----------------------------------------------------
// PENGUMUMAN PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getPengumuman = (): Pengumuman[] => getSafeLocalStorage('desa_pengumuman', defaultPengumuman);
export const savePengumuman = (pengumuman: Pengumuman[]) => setSafeLocalStorage('desa_pengumuman', pengumuman);

export const fetchPengumuman = async (): Promise<Pengumuman[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('pengumuman')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) {
      const mapped: Pengumuman[] = data.map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        date: item.date_created ? new Date(item.date_created * 1000).toLocaleDateString('id-ID') : item.date || 'Unknown'
      }));
      savePengumuman(mapped);
      return mapped;
    }
    console.error('Supabase fetch pengumuman error:', error);
  }
  return getPengumuman();
};

export const addPengumuman = async (item: Omit<Pengumuman, 'id'>): Promise<Pengumuman> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('pengumuman')
      .insert([{ title: item.title, content: item.content, date: item.date }])
      .select();
    if (!error && data && data[0]) {
      const newPeng = { id: data[0].id, title: data[0].title, content: data[0].content, date: item.date };
      savePengumuman([newPeng, ...getPengumuman()]);
      return newPeng;
    }
    console.error('Supabase add pengumuman error:', error);
  }
  const newPeng = { id: Date.now(), ...item };
  savePengumuman([newPeng, ...getPengumuman()]);
  return newPeng;
};

export const updatePengumuman = async (id: number, item: Partial<Pengumuman>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('pengumuman').update(item).eq('id', id);
    if (error) console.error('Supabase update pengumuman error:', error);
  }
  savePengumuman(getPengumuman().map(p => p.id === id ? { ...p, ...item } : p));
};

export const deletePengumuman = async (id: number): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('pengumuman').delete().eq('id', id);
    if (error) console.error('Supabase delete pengumuman error:', error);
  }
  savePengumuman(getPengumuman().filter(p => p.id !== id));
};

// ----------------------------------------------------
// LAYANAN SURAT PERSISTENCE (Sync & Async)
// ----------------------------------------------------
export const getLayananSurat = (): LayananSurat[] => getSafeLocalStorage('desa_layanan_surat', defaultLayananSurat);
export const saveLayananSurat = (layanan: LayananSurat[]) => setSafeLocalStorage('desa_layanan_surat', layanan);

export const fetchLayananSurat = async (): Promise<LayananSurat[]> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('layanan_surat')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) {
      const mapped: LayananSurat[] = data.map(item => ({
        id: item.id,
        nama_pemohon: item.nama_pemohon,
        nik: item.nik,
        jenis_surat: item.jenis_surat,
        keperluan: item.keperluan,
        status: item.status,
        date: item.tanggal_request ? new Date(item.tanggal_request * 1000).toLocaleDateString('id-ID') : item.date || 'Unknown'
      }));
      saveLayananSurat(mapped);
      return mapped;
    }
    console.error('Supabase fetch layanan surat error:', error);
  }
  return getLayananSurat();
};

export const addLayananSurat = async (item: Omit<LayananSurat, 'id'>): Promise<LayananSurat> => {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('layanan_surat')
      .insert([item])
      .select();
    if (!error && data && data[0]) {
      const newSurat: LayananSurat = {
        id: data[0].id,
        nama_pemohon: data[0].nama_pemohon,
        nik: data[0].nik,
        jenis_surat: data[0].jenis_surat,
        keperluan: data[0].keperluan,
        status: data[0].status,
        date: item.date
      };
      saveLayananSurat([newSurat, ...getLayananSurat()]);
      return newSurat;
    }
    console.error('Supabase add layanan surat error:', error);
  }
  const newSurat = { id: Date.now(), ...item };
  saveLayananSurat([newSurat, ...getLayananSurat()]);
  return newSurat;
};

export const updateLayananSurat = async (id: number, item: Partial<LayananSurat>): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('layanan_surat').update(item).eq('id', id);
    if (error) console.error('Supabase update layanan surat error:', error);
  }
  saveLayananSurat(getLayananSurat().map(s => s.id === id ? { ...s, ...item } : s));
};

export const deleteLayananSurat = async (id: number): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('layanan_surat').delete().eq('id', id);
    if (error) console.error('Supabase delete layanan surat error:', error);
  }
  saveLayananSurat(getLayananSurat().filter(s => s.id !== id));
};
