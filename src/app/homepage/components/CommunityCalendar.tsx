import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Profil Desa',
    desc: 'Informasi lengkap tentang Desa Bangunjaya',
    icon: 'MapPinIcon',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    href: '/village-profile',
  },
  {
    title: 'UMKM Lokal',
    desc: 'Produk unggulan warga desa',
    icon: 'BuildingStorefrontIcon',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
    href: '/umkm-directory',
  },
  {
    title: 'Kontak & Layanan',
    desc: 'Hubungi pemerintah desa',
    icon: 'PhoneIcon',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    href: '/contact-information',
  },
];

export default function CommunityCalendar() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Layanan Cepat
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Akses mudah ke berbagai layanan dan informasi Desa Bangunjaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group backdrop-blur-sm"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={item.icon as any} size={28} className={item.iconColor} />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 mb-8 leading-relaxed">
                {item.desc}
              </p>

              <span className="inline-flex items-center text-emerald-400 font-medium text-lg group-hover:text-emerald-300 transition-colors">
                Akses Sekarang
                <Icon name="ArrowRightIcon" size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
