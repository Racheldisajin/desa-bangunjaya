'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { addLayananSurat, fetchLayananSurat, LayananSurat } from '@/utils/storage';

export default function LayananSuratPage() {
  const [activeTab, setActiveTab] = useState<'pengajuan' | 'status'>('pengajuan');

  // Form State
  const [formData, setFormData] = useState({
    nama_pemohon: '',
    nik: '',
    jenis_surat: 'Surat Keterangan Domisili',
    keperluan: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Status Check State
  const [searchNik, setSearchNik] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<LayananSurat[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addLayananSurat({
        nama_pemohon: formData.nama_pemohon,
        nik: formData.nik,
        jenis_surat: formData.jenis_surat,
        keperluan: formData.keperluan,
        status: 'Pending',
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      });
      
      setIsSuccess(true);
      setFormData({
        nama_pemohon: '',
        nik: '',
        jenis_surat: 'Surat Keterangan Domisili',
        keperluan: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi kesalahan saat mengirim pengajuan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearchStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNik) return;
    setIsSearching(true);

    try {
      const allSurat = await fetchLayananSurat();
      const filtered = allSurat.filter(s => s.nik === searchNik);
      setSearchResults(filtered);
    } catch (error) {
      console.error('Error fetching status:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'bg-emerald-100 text-emerald-700';
      case 'Diproses': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="flex-grow pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-emerald-400/30">
              <Icon name="EnvelopeOpenIcon" size={32} className="text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-body font-extrabold mb-4 tracking-tight drop-shadow-md">
              Layanan E-Surat
            </h1>

            <p className="font-body text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Ajukan permohonan surat keterangan desa secara online dan cek statusnya kapan saja.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="flex-1 container mx-auto max-w-4xl px-4 py-16 relative -mt-12 z-20">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-slate-900/50">
              <button 
                onClick={() => setActiveTab('pengajuan')}
                className={`flex-1 py-4 text-center font-bold font-headline transition-colors ${activeTab === 'pengajuan' ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Buat Pengajuan Baru
              </button>
              <button 
                onClick={() => setActiveTab('status')}
                className={`flex-1 py-4 text-center font-bold font-headline transition-colors ${activeTab === 'status' ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Cek Status Pengajuan
              </button>
            </div>

            <div className="p-8 md:p-12">
              {activeTab === 'pengajuan' ? (
                <>
                  <div className="mb-8 border-b border-white/10 pb-6 text-center">
                    <h2 className="text-2xl font-bold font-headline text-white mb-2">Formulir Pengajuan Surat</h2>
                    <p className="text-slate-400 font-body text-sm">Pastikan data yang Anda masukkan sesuai dengan KTP dan Kartu Keluarga.</p>
                  </div>

                  {isSuccess && (
                    <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4">
                      <div className="text-emerald-500 mt-0.5">
                        <Icon name="CheckCircleIcon" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800 font-headline">Pengajuan Berhasil!</h4>
                        <p className="text-emerald-700 text-sm font-body mt-1">
                          Pengajuan surat Anda telah masuk ke sistem kami dan sedang diproses. Silakan hubungi admin atau datang ke kantor desa jika membutuhkan konfirmasi lebih lanjut.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nama_pemohon" className="block text-sm font-bold text-slate-300 font-body">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nama_pemohon"
                          name="nama_pemohon"
                          required
                          value={formData.nama_pemohon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all font-body text-white bg-slate-800 focus:bg-slate-700"
                          placeholder="Sesuai KTP"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="nik" className="block text-sm font-bold text-slate-300 font-body">
                          Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nik"
                          name="nik"
                          required
                          pattern="[0-9]{16}"
                          title="NIK harus 16 digit angka"
                          value={formData.nik}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all font-body text-white bg-slate-800 focus:bg-slate-700"
                          placeholder="16 Digit NIK"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="jenis_surat" className="block text-sm font-bold text-slate-300 font-body">
                        Jenis Surat <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="jenis_surat"
                          name="jenis_surat"
                          required
                          value={formData.jenis_surat}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all font-body text-white bg-slate-800 focus:bg-slate-700 appearance-none cursor-pointer"
                        >
                          <option value="Surat Keterangan Domisili">Surat Keterangan Domisili</option>
                          <option value="Surat Keterangan Tidak Mampu (SKTM)">Surat Keterangan Tidak Mampu (SKTM)</option>
                          <option value="Surat Keterangan Usaha (SKU)">Surat Keterangan Usaha (SKU)</option>
                          <option value="Surat Pengantar KTP/KK">Surat Pengantar KTP/KK</option>
                          <option value="Surat Keterangan Kematian">Surat Keterangan Kematian</option>
                          <option value="Surat Keterangan Belum Menikah">Surat Keterangan Belum Menikah</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="keperluan" className="block text-sm font-bold text-slate-300 font-body">
                        Keperluan / Keterangan Tambahan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="keperluan"
                        name="keperluan"
                        required
                        rows={4}
                        value={formData.keperluan}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all font-body text-white bg-slate-800 focus:bg-slate-700 resize-none"
                        placeholder="Jelaskan secara singkat keperluan pembuatan surat ini..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl font-bold font-cta text-white transition-all transform flex justify-center items-center gap-2 ${
                          isSubmitting 
                          ? 'bg-slate-400 cursor-not-allowed' 
                          : 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg hover:-translate-y-1'
                        }`}
                      >
                        {isSubmitting ? (
                          'Memproses Pengajuan...'
                        ) : (
                          <>
                            <Icon name="PaperAirplaneIcon" size={20} />
                            Kirim Pengajuan Surat
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-8 text-center text-slate-400 text-sm font-body max-w-2xl mx-auto">
                    Dengan menekan tombol "Kirim Pengajuan Surat", Anda menjamin bahwa semua informasi dan data yang diberikan adalah benar dan sah secara hukum.
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8 border-b border-white/10 pb-6 text-center">
                    <h2 className="text-2xl font-bold font-headline text-white mb-2">Cek Status Pengajuan</h2>
                    <p className="text-slate-400 font-body text-sm">Masukkan NIK Anda untuk memantau status pembuatan surat yang telah diajukan.</p>
                  </div>

                  <form onSubmit={handleSearchStatus} className="flex gap-4 mb-10">
                    <div className="flex-1">
                      <input
                        type="text"
                        required
                        pattern="[0-9]{16}"
                        title="NIK harus 16 digit angka"
                        value={searchNik}
                        onChange={(e) => setSearchNik(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all font-body text-white bg-slate-800 focus:bg-slate-700"
                        placeholder="Masukkan 16 Digit NIK Anda"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSearching}
                      className={`px-8 py-3 rounded-xl font-bold font-cta text-white transition-all flex items-center justify-center gap-2 ${
                        isSearching 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-slate-800 hover:bg-slate-700 hover:shadow-md'
                      }`}
                    >
                      {isSearching ? 'Mencari...' : <><Icon name="MagnifyingGlassIcon" size={20} /> Cek Status</>}
                    </button>
                  </form>

                  {searchResults !== null && (
                    <div>
                    <div>
                      {searchResults.length === 0 ? (
                        <div className="text-center py-12 bg-slate-800/50 rounded-2xl border border-white/10">
                          <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Icon name="DocumentMagnifyingGlassIcon" size={32} />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1">Tidak Ada Data Ditemukan</h3>
                          <p className="text-slate-400 text-sm">Kami tidak dapat menemukan pengajuan surat dengan NIK tersebut.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Riwayat Pengajuan Anda:</h3>
                          {searchResults.map((surat) => (
                            <div key={surat.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg hover:bg-white/10 transition-all">
                              <div>
                                <h4 className="font-bold font-headline text-lg text-white">{surat.jenis_surat}</h4>
                                <div className="text-sm text-slate-400 mt-1 flex flex-col sm:flex-row sm:gap-4">
                                  <span><span className="font-semibold text-slate-300">Tanggal:</span> {surat.date}</span>
                                  <span><span className="font-semibold text-slate-300">Keperluan:</span> {surat.keperluan}</span>
                                </div>
                              </div>
                              <div>
                                <span className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide inline-block whitespace-nowrap ${getStatusColor(surat.status)}`}>
                                  {surat.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
