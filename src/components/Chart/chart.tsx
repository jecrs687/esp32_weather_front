'use client';
import dynamic from 'next/dynamic'
import React, { useCallback } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export const ChartComponent = ({ values }: {
  values: Array<number>
}) => {
  if (typeof window === 'undefined') return null;
  const Component =  
    () => <Chart
    series={values}
    options={{
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: function (val: number) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        },
      },
      stroke: {
        dashArray: 4
      },
      labels: ['Umidade'],
    }}
    type="radialBar"
    height={180}
    width={180}
  />
  return <Component />
  
}
