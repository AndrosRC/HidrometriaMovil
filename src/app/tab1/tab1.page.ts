import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItemDivider, IonLabel, IonAccordionGroup, IonAccordion, IonItem } from '@ionic/angular/standalone';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, GoogleChartsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItemDivider, IonLabel, IonAccordionGroup, IonAccordion, IonItem],
})
export class Tab1Page {
  totalConsumo = 7200; // Litros en el mes
  promedioDiario = 240; // Promedio de litros al día
  diasCriticos = 5; // Días con consumo alto

  // 🔹 Gráfico de Consumo Diario (Dona)
  chartType: ChartType = ChartType.PieChart;
  chartColumns = ['Día', 'Litros'];
  chartData = [
    ['Lunes', 40],
    ['Martes', 30],
    ['Miércoles', 60],
    ['Jueves', 50],
    ['Viernes', 45],
    ['Sábado', 55],
    ['Domingo', 35]
  ];
  chartOptions = {
    title: 'Consumo de Agua Diario',
    pieHole: 0.4,
    backgroundColor: 'transparent',
    colors: ['#4A90E2', '#357ABD', '#23527C'],
    chartArea: { width: '100%', height: '90%' },
    legend: { position: 'right', textStyle: { fontSize: 14 } },
  };

  // 🔹 Comparativa de Consumo Mensual (Barras)
  comparisonChartType: ChartType = ChartType.ColumnChart;
  comparisonChartData = [
    ['Enero', 1200],
    ['Febrero', 1100],
    ['Marzo', 900],
    ['Abril', 1300],
    ['Mayo', 1250],
    ['Junio', 1400]
  ];
  comparisonChartColumns = ['Mes', 'Litros Consumidos'];
  comparisonChartOptions = {
    title: 'Comparativa de Consumo Mensual',
    backgroundColor: 'transparent',
    colors: ['#1E88E5'],
    legend: { position: 'none' },
    vAxis: { title: 'Litros', textStyle: { fontSize: 14 } },
    hAxis: { title: 'Mes', textStyle: { fontSize: 14 } },
    chartArea: { width: '90%', height: '85%' }
  };

  // 🔹 Nueva Gráfica de Radar (Consumo Diario vs. Promedio)
  radarChartType: ChartType = ChartType.LineChart;
  radarChartData = [
    ['Lunes', 40, 50],
    ['Martes', 30, 40],
    ['Miércoles', 60, 45],
    ['Jueves', 50, 55],
    ['Viernes', 45, 50],
    ['Sábado', 55, 60],
    ['Domingo', 35, 42]
  ];
  radarChartColumns = ['Día', 'Consumo Real (L)', 'Consumo Promedio (L)'];
  radarChartOptions = {
    title: 'Consumo Diario vs. Promedio',
    backgroundColor: 'transparent',
    colors: ['#4A90E2', '#23527C'],
    legend: { position: 'bottom' },
    hAxis: { title: 'Día' },
    vAxis: { title: 'Litros' },
    chartArea: { width: '90%', height: '85%' }
  };

  // 🔹 Historial de Consumo por Mes (Lista Desplegable)
  historialMensual = [
    {
      mes: 'Enero',
      consumo: ['Día 1: 40L', 'Día 2: 35L', 'Día 3: 50L'],
      abierto: false
    },
    {
      mes: 'Febrero',
      consumo: ['Día 1: 45L', 'Día 2: 30L', 'Día 3: 55L'],
      abierto: false
    },
    {
      mes: 'Marzo',
      consumo: ['Día 1: 38L', 'Día 2: 48L', 'Día 3: 42L'],
      abierto: false
    }
  ];

  // Función para alternar la apertura/cierre de la lista desplegable
  toggleHistorial(mes: any) {
    mes.abierto = !mes.abierto;
  }

  constructor() { 
  }
}
