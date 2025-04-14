import React, { useEffect, useRef } from 'react';

interface ChartData {
  labels: string[];
  values: number[];
}

interface ActivityChartProps {
  data: ChartData;
  title: string;
  color: string;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data, title, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Effacer le canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    // Trouver la valeur maximale pour l'échelle
    const maxValue = Math.max(...data.values) * 1.1;
    
    // Dessiner les axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Axe Y
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    
    // Axe X
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Dessiner les graduations horizontales
    const numHLines = 5;
    ctx.textAlign = 'right';
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#6b7280';
    
    for (let i = 0; i <= numHLines; i++) {
      const y = height - padding - (i / numHLines) * chartHeight;
      const value = Math.round((i / numHLines) * maxValue);
      
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.strokeStyle = '#f3f4f6';
      ctx.stroke();
      
      ctx.fillText(value.toString(), padding - 5, y + 3);
    }
    
    // Dessiner les barres
    const barWidth = chartWidth / data.labels.length * 0.6;
    const barSpacing = chartWidth / data.labels.length;
    
    data.values.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * barSpacing + barSpacing / 2 - barWidth / 2;
      const y = height - padding - barHeight;
      
      // Dessiner la barre
      ctx.beginPath();
      ctx.rect(x, y, barWidth, barHeight);
      ctx.fillStyle = color;
      ctx.fill();
      
      // Dessiner le label
      ctx.textAlign = 'center';
      ctx.fillStyle = '#6b7280';
      ctx.fillText(data.labels[index], x + barWidth / 2, height - padding + 15);
      
      // Dessiner la valeur au-dessus de la barre
      ctx.fillStyle = '#374151';
      ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
    });
    
  }, [data, color]);
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="w-full h-64 relative">
        <canvas 
          ref={canvasRef}
          width={500}
          height={250}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ActivityChart;
