import { Component, OnInit } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { SpiderComponent } from '../spider/spider.component';

// Register components for Chart.js
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ChartjsModule,SpiderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  chartData: any; // Define chartData property
  chartOptions: any; // Define chartOptions property

  ngOnInit(): void {
    this.chartData = {  // Assign values in ngOnInit
      labels: ['Station Name Dummy 1', 'Station Name Dummy 2', 'Station Name Dummy 3', 'Station Name Dummy 4', 'Station Name Dummy 5'],
      datasets: [
        {
          label: '# of Votes',
          data: [260, 145, 190, 230, 145],
          backgroundColor: '#FF7F5C', // Set bar color
          borderColor: '#FF7F5C', // Optional: set border color if needed
          borderWidth: 1,
          barThickness: 10 
        }
      ]
    };

    this.chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true, 
            ticks: {
              stepSize: 50,
              min: 0, // Set minimum value of y-axis
              max: 300 // Set maximum value of y-axis
            }
          }
        }
      };
    }  
}
