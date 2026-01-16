'use client';

import { useState } from 'react';

const data = [
  { name: 'Belum/Tidak Bekerja', male: 808, female: 654 },
  { name: 'Mengurus Rumah Tangga', male: 0, female: 1213 },
  { name: 'Pelajar/Mahasiswa', male: 297, female: 269 },
  { name: 'Pensiunan', male: 23, female: 6 },
  { name: 'PNS', male: 18, female: 19 },
  { name: 'Petani/Pekebun', male: 766, female: 220 },
  { name: 'Buruh Harian Lepas', male: 120, female: 9 },
  { name: 'Wiraswasta', male: 273, female: 23 },
  { name: 'Guru', male: 7, female: 8 },
  { name: 'Pedagang', male: 28, female: 4 },
];

export default function OccupationStats() {
  const [mode, setMode] = useState<'table' | 'chart'>('table');

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Jumlah Penduduk Berdasarkan Pekerjaan
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('table')}
            className={`px-4 py-2 rounded-lg text-sm ${
              mode === 'table'
                ? 'bg-primary text-white'
                : 'bg-muted/30 text-gray-700'
            }`}
          >
            Tabel
          </button>
          <button
            onClick={() => setMode('chart')}
            className={`px-4 py-2 rounded-lg text-sm ${
              mode === 'chart'
                ? 'bg-primary text-white'
                : 'bg-muted/30 text-gray-700'
            }`}
          >
            Grafik
          </button>
        </div>
      </div>

      {mode === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border p-2">No</th>
                <th className="border p-2 text-left">Pekerjaan</th>
                <th className="border p-2">Laki-laki</th>
                <th className="border p-2">Perempuan</th>
                <th className="border p-2">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                const total = d.male + d.female;
                return (
                  <tr key={d.name} className="hover:bg-muted/20">
                    <td className="border p-2 text-center">{i + 1}</td>
                    <td className="border p-2">{d.name}</td>
                    <td className="border p-2 text-center">{d.male || '-'}</td>
                    <td className="border p-2 text-center">{d.female || '-'}</td>
                    <td className="border p-2 text-center font-medium">
                      {total || '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {mode === 'chart' && (
        <div className="space-y-3">
          {data.map((d) => {
            const total = d.male + d.female;
            return (
              <div key={d.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{d.name}</span>
                  <span className="font-medium">{total}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${Math.min(total / 20, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
