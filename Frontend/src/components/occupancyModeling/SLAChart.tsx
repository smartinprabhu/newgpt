import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationResults } from "./ContactCenterApp";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Area, AreaChart, Tooltip } from "recharts";
import { Target, AlertTriangle } from "lucide-react";

interface SLAChartProps {
  results: SimulationResults;
  targetSLA: number;
}

export function SLAChart({ results, targetSLA }: SLAChartProps) {
  // Generate daily SLA trend data
  const dailyData = Array.from({ length: 28 }, (_, i) => {
    const baseDate = new Date('2025-06-29');
    baseDate.setDate(baseDate.getDate() + i);
    
    return {
      date: `${baseDate.getDate().toString().padStart(2, '0')}/${(baseDate.getMonth() + 1).toString().padStart(2, '0')}`,
      sla: Math.random() * 40 + 60 // Random SLA between 60-100%
    };
  });

  // Generate hourly pattern data
  const hourlyData = Array.from({ length: 10 }, (_, i) => {
    const hour = i + 8; // 8 AM to 5 PM
    return {
      hour: `${hour.toString().padStart(2, '0')}:00`,
      sla: Math.random() * 30 + 70 // Random SLA between 70-100%
    };
  });

  return (
    <div className="space-y-6">
      {/* SLA Performance Card */}
      <Card className="executive-card shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-md font-semibold text-foreground p-3">
            <Target className="h-5 w-5" />
            Final SLA Based on Agents Plotted in Shifts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 pl-2">
            <div className="text-md font-semibold text-foreground text-chart-red text-red-600 mb-2">
              {results.finalSLA.toFixed(1)}%
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-chart-red h-2 rounded-full transition-all duration-500 bg-red-600"
                  style={{ width: `${results.finalSLA}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 pl-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm text-chart-red">
                SLA Below Target (Gap: -{(targetSLA - results.finalSLA).toFixed(1)}%)
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="pl-2">
              <h4 className="font-semibold mb-2">Daily SLA Performance Trend</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--foreground))"
                      fontSize={10}
                    />
                    <YAxis 
                      stroke="hsl(var(--foreground))"
                      fontSize={10}
                      domain={[0, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <ReferenceLine 
                      y={targetSLA} 
                      stroke="hsl(var(--chart-red))" 
                      strokeDasharray="5 5"
                      label="Target"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sla" 
                      stroke="hsl(var(--chart-blue))" 
                      fill="hsl(var(--chart-blue))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="pl-2">
              <h4 className="font-semibold mb-2">Hourly SLA Performance Pattern</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="hour" 
                      stroke="hsl(var(--foreground))"
                      fontSize={10}
                    />
                    <YAxis 
                      stroke="hsl(var(--foreground))"
                      fontSize={10}
                      domain={[0, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sla" 
                      stroke="hsl(var(--chart-green))" 
                      fill="hsl(var(--chart-green))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}