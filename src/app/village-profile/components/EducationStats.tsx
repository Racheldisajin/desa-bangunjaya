'use client';

import { useState } from 'react';

const data = [
  { level: 'Tidak/Belum Sekolah', male: 528, female: 510 },
  { level: 'Belum Tamat SD', male: 166, female: 152 },
  { level: 'Tamat SD', male: 767, female: 861 },
  { level: 'SLTP', male: 666, female: 642 },
  { level: 'SLTA', male: 316, female: 219 },
  { level: 'Diploma I/II', male: 10, female: 3 },
  { level: 'Akademi/D3', male: 5, female: 14 },
  { level: 'Diploma IV / S1', male: 63, female: 62 },
  { level: 'S2', male: 6, female: 2 },
];

export default function EducationStats() {
  const [mode, setMode] = useState<'table' | 'chart'>('table');

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Jumlah Penduduk Berdasarkan Pendidikan
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
                <th className="border p-2 text-left">Pendidikan</th>
                <th className="border p-2">Laki-laki</th>
                <th className="border p-2">Perempuan</th>
                <th className="border p-2">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                const total = d.male + d.female;
                return (
                  <tr key={d.level} className="hover:bg-muted/20">
                    <td className="border p-2 text-center">{i + 1}</td>
                    <td className="border p-2">{d.level}</td>
                    <td className="border p-2 text-center">{d.male}</td>
                    <td className="border p-2 text-center">{d.female}</td>
                    <td className="border p-2 text-center font-medium">
                      {total}
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
              <div key={d.level}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{d.level}</span>
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
