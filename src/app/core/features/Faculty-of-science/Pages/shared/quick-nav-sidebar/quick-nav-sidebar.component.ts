import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuickNavItem } from '../../../model/about-us.model';

@Component({
  selector: 'app-quick-nav-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quick-nav-sidebar.component.html',
  styleUrls: ['./quick-nav-sidebar.component.css']
})
export class QuickNavSidebarComponent implements OnInit {
  quickNavItems: QuickNavItem[] = [
    {
      id: 'home',
      label: 'الرئيسية',
      route: '/',
      icon: 'pi pi-home',
      color: '#0d4f8b'
    },
    {
      id: 'about',
      label: 'من نحن',
      route: '/about',
      icon: 'pi pi-info-circle',
      color: '#f0bc7d'
    },
    {
      id: 'departments',
      label: 'الأقسام العلمية',
      route: '/departments',
      icon: 'pi pi-building',
      color: '#003366'
    },
    {
      id: 'programs',
      label: 'البرامج الدراسية',
      route: '/programs',
      icon: 'pi pi-book',
      color: '#f0cfa6'
    },
    {
      id: 'units',
      label: 'الوحدات والمراكز',
      route: '/units',
      icon: 'pi pi-cog',
      color: '#0d4f8b'
    },
    {
      id: 'news',
      label: 'الأخبار والفعاليات',
      route: '/news',
      icon: 'pi pi-calendar',
      color: '#f0bc7d'
    },
    {
      id: 'contact',
      label: 'تواصل معنا',
      route: '/contact',
      icon: 'pi pi-envelope',
      color: '#003366'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}