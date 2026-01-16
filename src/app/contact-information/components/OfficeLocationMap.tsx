export default function OfficeLocationMap() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-subtle">
      <div className="h-96 w-full">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Lokasi Kantor Desa Bangunjaya"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=kantor+desa+bangunjaya+kabupaten+pangandaran&z=15&output=embed"
          className="border-0"
        ></iframe>
      </div>
      
      <div className="p-6 bg-muted">
        <h3 className="font-headline font-semibold text-lg text-primary mb-4">
          Lokasi Kantor Desa Bangunjaya
        </h3>

        <div className="space-y-2">
          <p className="font-body text-foreground">
            Desa Bangunjaya, Kecamatan Langkaplancar
          </p>
          <p className="font-body text-muted-foreground">
            Kabupaten Pangandaran, Jawa Barat, Indonesia
          </p>
          <p className="font-body text-muted-foreground">
            Kode Pos 46391
          </p>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              <strong>Parkir:</strong> Tersedia area parkir gratis di halaman kantor desa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
