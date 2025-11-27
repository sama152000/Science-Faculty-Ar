import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Statistic {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  statistics: Statistic[] = [
    {
      icon: 'fas fa-user-graduate',
      value: 1200,
      label: 'طالب وطالبة',
      suffix: '+'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      value: 85,
      label: 'عضو هيئة تدريس وهيئة معاونة'
    },
    {
      icon: 'fas fa-flask',
      value: 5,
      label: 'أقسام علمية'
    },
    {
      icon: 'fas fa-trophy',
      value: 120,
      label: 'مشروع بحثي ممول',
      suffix: '+'
    }
  ];

  displayValues: number[] = [];
  private animationIntervals: any[] = [];

  ngOnInit() {
    this.displayValues = new Array(this.statistics.length).fill(0);
    this.startCountAnimation();
  }

  ngOnDestroy() {
    this.animationIntervals.forEach(interval => {
      if (interval) clearInterval(interval);
    });
  }

  private startCountAnimation() {
    this.statistics.forEach((stat, index) => {
      const duration = 2500; // 2.5 ثانية لأن الأرقام أكبر شوية
      const steps = 70;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(increment * step, stat.value);
        this.displayValues[index] = Math.floor(current);

        if (step >= steps) {
          clearInterval(interval);
          this.displayValues[index] = stat.value;
        }
      }, duration / steps);

      this.animationIntervals.push(interval);
    });
  }
}