'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DemographicsChartProps {
  className?: string;
}

const DemographicsChart = ({ className = '' }: DemographicsChartProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeChart, setActiveChart] = useState<'age' | 'education'>('age');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ageDistributionData = [
    { ageGroup: '0-14', male: 1245, female: 1189 },
    { ageGroup: '15-24', male: 1456, female: 1398 },
    { ageGroup: '25-44', male: 2134, female: 2087 },
    { ageGroup: '45-64', male: 1678, female: 1623 },
    { ageGroup: '65+', male: 523, female: 514 }
  ];

  const educationData = [
    { name: 'Primary', value: 2845, color: '#2D5A27' },
    { name: 'Secondary', value: 4123, color: '#8B4513' },
    { name: 'Higher Secondary', value: 3234, color: '#D2691E' },
    { name: 'Graduate', value: 1876, color: '#228B22' },
    { name: 'Post Graduate', value: 769, color: '#10B981' }
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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Demographics Overview</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveChart('age')}
            className={`px-4 py-2 rounded-md font-body font-medium transition-colors duration-300 ${
              activeChart === 'age' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-primary/10'
            }`}
          >
            Age Distribution
          </button>
          <button
            onClick={() => setActiveChart('education')}
            className={`px-4 py-2 rounded-md font-body font-medium transition-colors duration-300 ${
              activeChart === 'education' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-primary/10'
            }`}
          >
            Education Levels
          </button>
        </div>
      </div>

      {activeChart === 'age' ? (
        <div className="w-full h-80" aria-label="Age Distribution Bar Chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="ageGroup" stroke="#4A4A4A" style={{ fontSize: '14px', fontFamily: 'Source Sans 3' }} />
              <YAxis stroke="#4A4A4A" style={{ fontSize: '14px', fontFamily: 'Source Sans 3' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: 'Source Sans 3'
                }}
              />
              <Legend wrapperStyle={{ fontFamily: 'Source Sans 3', fontSize: '14px' }} />
              <Bar dataKey="male" fill="#2D5A27" name="Male" radius={[8, 8, 0, 0]} />
              <Bar dataKey="female" fill="#8B4513" name="Female" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="w-full h-80" aria-label="Education Levels Pie Chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={educationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {educationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: 'Source Sans 3'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default DemographicsChart;