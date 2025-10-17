
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Upload, RotateCcw } from "lucide-react";

interface AHTTableProps {
  ahtMatrix: number[][];
  onAHTMatrixChange: (matrix: number[][]) => void;
  weeks: 4 | 8 | 12;
  fromDate: string;
  toDate: string;
}

export function AHTTable({ 
  ahtMatrix, 
  onAHTMatrixChange, 
  weeks, 
  fromDate, 
  toDate 
}: AHTTableProps) {
  // Generate time intervals exactly as Excel SMORT (48 intervals starting from 12:30 AM to 12:00 AM)
  const intervals = Array.from({ length: 48 }, (_, i) => {
    // Excel starts at 12:30 AM (0:30), so we add 30 minutes to the base calculation
    const totalMinutes = (i * 30); // Start from 30 minutes (12:30 AM)
    const hour = Math.floor(totalMinutes / 60) % 24; // Wrap around at 24 hours
    const minute = totalMinutes % 60;
    
    return {
      time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
      display: `${(hour % 12 || 12).toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`,
      excelFormat: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}` // 24-hour format like Excel
    };
  });

  // Generate days based on date range
  const totalDays = weeks * 7;
  const days = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(fromDate);
    date.setDate(date.getDate() + i);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      dayName: dayNames[date.getDay()],
      date: `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`,
      fullDate: date.toISOString().split('T')[0]
    };
  });

  // Initialize with default AHT values if empty (1560 seconds = 26 minutes)
  if (ahtMatrix.length === 0) {
    const defaultAHT = Array(totalDays).fill(0).map(() => 
      Array(48).fill(1560) // Default 26 minutes (1560 seconds)
    );
    onAHTMatrixChange(defaultAHT);
  }

  const updateAHTValue = (dayIndex: number, intervalIndex: number, value: string) => {
    const newMatrix = [...ahtMatrix];
    if (!newMatrix[dayIndex]) {
      newMatrix[dayIndex] = Array(48).fill(1560);
    }
    
    // Excel SMORT validation: AHT must be positive, minimum 1 second
    const numericValue = parseInt(value) || 1560;
    const validatedValue = Math.max(1, numericValue); // Ensure at least 1 second
    
    newMatrix[dayIndex][intervalIndex] = validatedValue;
    onAHTMatrixChange(newMatrix);
  };

  const loadSampleData = () => {
    const sampleData = Array(totalDays).fill(0).map(() => 
      Array(48).fill(0).map(() => {
        // AHT varies slightly throughout the day (24-28 minutes)
        return Math.floor(Math.random() * 240) + 1440; // 1440-1680 seconds (24-28 min)
      })
    );
    onAHTMatrixChange(sampleData);
  };

  const clearData = () => {
    onAHTMatrixChange(Array(totalDays).fill(0).map(() => Array(48).fill(1560)));
  };

  const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-md font-semibold text-foreground">
            <Clock className="h-5 w-5" />
            AHT (Average Handle Time)
          </CardTitle>
          { /* <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={loadSampleData} className="text-xs">
              <Upload className="h-3 w-3 mr-2" />
              Load Sample
            </Button>
            <Button variant="outline" size="sm" onClick={clearData} className="text-xs">
              <RotateCcw className="h-3 w-3 mr-2" />
              Clear
            </Button>
          </div> */ }
        </div>
        <p className="text-xs text-muted-foreground">
          Enter Average Handle Time values in seconds for each interval.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-80 border rounded-lg">
          <table className="w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-muted z-10">
              <tr>
                <th className="sticky left-0 border-r border-border p-2 text-left min-w-28 bg-muted font-medium z-20">
                  TIME
                </th>
                {days.map((day, i) => (
                  <th key={i} className="border border-border p-2 text-center min-w-16 bg-muted">
                    <div className="font-medium">{day.dayName}</div>
                    <div className="text-xs text-muted-foreground/80">{day.date}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {intervals.map((interval, intervalIndex) => (
                <tr key={intervalIndex} className="hover:bg-muted/50">
                  <td className="sticky left-0 border-r border-border p-2 font-medium bg-muted/40 z-10">
                    <div className="flex flex-col">
                      <span className="font-medium">{interval.excelFormat}</span>
                      <span className="text-xs text-muted-foreground/80">{interval.display}</span>
                    </div>
                  </td>
                  {days.map((_, dayIndex) => {
                    const ahtValue = ahtMatrix[dayIndex]?.[intervalIndex] || 1560;
                    return (
                      <td key={dayIndex} className="border border-border p-0.5 text-center">
                        <div className="space-y-1">
                          <input
                            type="number"
                            className="w-full bg-transparent border-none text-center text-sm focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 rounded px-1 py-1"
                            value={ahtValue}
                            onChange={(e) => updateAHTValue(dayIndex, intervalIndex, e.target.value)}
                            placeholder="1560"
                            min="0"
                          />
                          <div className="text-xs text-muted-foreground">
                            {formatSeconds(ahtValue)}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}