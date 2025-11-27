import { Injectable } from '@angular/core';
import { GalleryItem } from '../model/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'البحث العلمي في المعامل',
      image: './assets/new4.jpg',
      category: 'Research',
      description: 'الطلاب يجرون أبحاثًا متقدمة داخل معاملنا الحديثة'
    },
    {
      id: 2,
      title: 'الأنشطة الطلابية',
      image: './assets/new3.jpg',
      category: 'Events',
      description: 'مشاركة طلابية نشطة في الفعاليات العلمية والمسابقات'
    },
    {
      id: 3,
      title: 'مركز البحوث العلمية',
      image: './assets/new2.jpg',
      category: 'Facilities',
      description: 'مرافق بحثية متطورة وأحدث الأجهزة والمعدات'
    },
    {
      id: 4,
      title: 'ندوة أكاديمية',
      image: './assets/new1.jpg',
      category: 'Education',
      description: 'ندوات دورية ومناقشات أكاديمية مستمرة'
    },
    {
      id: 5,
      title: 'أنشطة الأقسام العلمية',
      image: './assets/new1.jpg',
      category: 'Activities',
      description: 'فعاليات وورش عمل متنوعة في الأقسام العلمية'
    },
    {
      id: 6,
      title: 'معرض العلوم السنوي',
      image: './assets/new4.jpg',
      category: 'Exhibition',
      description: 'المعرض العلمي السنوي الذي يعرض مشاريع الطلاب المتميزة'
    }
  ];

  getAll(): GalleryItem[] {
    return this.galleryItems;
  }

  getById(id: number): GalleryItem | undefined {
    return this.galleryItems.find(item => item.id === id);
  }

  getByCategory(category: string): GalleryItem[] {
    return this.galleryItems.filter(item => item.category === category);
  }
}