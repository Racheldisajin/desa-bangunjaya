'use client';

import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DemographicsChartProps {
  className?: string;
}

const DemographicsChart = ({ className = '' }: DemographicsChartProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ageDistributionData = [
    { ageGroup: '0–4', male: 172, female: 189 },
    { ageGroup: '5–9', male: 188, female: 188 },
    { ageGroup: '10-14', male: 194, female: 178 },
    { ageGroup: '15-19', male: 192, female: 196 },
    { ageGroup: '20-24', male: 206, female: 202 },
    { ageGroup: '25-29', male: 218, female: 216 },
    { ageGroup: '30-34', male: 167, female: 169 },
    { ageGroup: '35-39', male: 196, female: 181},
    { ageGroup: '40-44', male: 175, female: 166 },
    { ageGroup: '45-49', male: 159, female: 165 },
    { ageGroup: '50-54', male: 155, female: 160 },
    { ageGroup: '55-59', male: 156, female: 147 },
    { ageGroup: '60-64', male: 148, female: 126 },
    { ageGroup: '65-69', male: 87, female: 85 },
    { ageGroup: '70-74', male: 51, female: 45},
    { ageGroup: '75+', male: 63, female: 52 },
  ];

  if (!isHydrated) {
    return (
      <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <h3 className="text-2xl font-headline font-semibold text-foreground mb-6">
        Distribusi Penduduk Berdasarkan Usia
      </h3>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ageDistributionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="ageGroup"
              stroke="#4A4A4A"
              style={{ fontSize: '14px' }}
            />
            <YAxis
              stroke="#4A4A4A"
              style={{ fontSize: '14px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="male" fill="#2D5A27" name="Laki-laki" radius={[8, 8, 0, 0]} />
            <Bar dataKey="female" fill="#8B4513" name="Perempuan" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DemographicsChart;
