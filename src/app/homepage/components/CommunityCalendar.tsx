import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Profil Desa',
    desc: 'Informasi lengkap tentang Desa Bangunjaya',
    icon: 'MapPinIcon',
    iconBg: 'bg-[#4E6F55]',
    href: '/village-profile',
  },
  {
    title: 'UMKM Lokal',
    desc: 'Produk unggulan warga desa',
    icon: 'BuildingStorefrontIcon',
    iconBg: 'bg-[#F07C4A]',
    href: '/umkm-directory',
  },
  {
    title: 'Kontak & Layanan',
    desc: 'Hubungi pemerintah desa',
    icon: 'PhoneIcon',
    iconBg: 'bg-[#E9A13A]',
    href: '/contact-information',
  },
];


export default function CommunityCalendar() {
  return (
    <section className="py-24 bg-[#FBF8F4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Layanan Cepat
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Akses mudah ke berbagai layanan dan informasi Desa Bangunjaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="bg-[#F7F3EE] rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                         transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mb-8`}
              >
                <Icon name={item.icon as any} size={28} className="text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-500 mb-8 leading-relaxed">
                {item.desc}
              </p>

              <span className="inline-flex items-center text-[#4E6F55] font-medium text-lg">
                Akses Sekarang
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
