import { Injectable } from '@angular/core';
import { ContactInfo, StaffContact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo[] = [
    {
      id: '1',
      title: 'كلية العلوم - المكتب الإداري الرئيسي',
      description: 'الاستفسارات العامة والخدمات الإدارة والشئون الإدارية',
      phone: ['+20 95 237 1200', '+20 95 237 1201'],
      email: ['info@science.luxor.edu.eg', 'admin@science.luxor.edu.eg'],
      address: 'كلية العلوم - جامعة الأقصر - محافظة الأقصر - مصر',
      officeHours: 'الأحد إلى الخميس: من 8:00 صباحًا حتى 4:00 مساءً',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0258622713013!2d32.8040167!3d25.769709300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14491592597f70b1%3A0xccac387a294f12e5!2z2KzYp9mF2LnYqSDYp9mE2KPZgti12LE!5e0!3m2!1sar!2seg!4v1764261012461!5m2!1sar!2seg'
    },
    {
      id: '2',
      title: 'مكتب شئون الطلاب',
      description: 'خدمات الطلاب - التسجيل - الدعم الأكاديمي والإرشاد',
      phone: ['+20 95 237 1210', '+20 95 237 1211'],
      email: ['students@science.luxor.edu.eg', 'registration@science.luxor.edu.eg'],
      address: 'مبنى شئون الطلاب - كلية العلوم - جامعة الأقصر',
      officeHours: 'الأحد إلى الخميس: من 8:30 صباحًا حتى 3:30 مساءً'
    },
    {
      id: '3',
      title: 'إدارة البحث العلمي والدراسات العليا',
      description: 'استفسارات البحث العلمي - برامج الدراسات العليا - التعاون البحثي',
      phone: ['+20 95 237 1220', '+20 95 237 1221'],
      email: ['research@science.luxor.edu.eg', 'graduate@science.luxor.edu.eg'],
      address: 'مجمع البحث العلمي - كلية العلوم - جامعة الأقصر',
      officeHours: 'الأحد إلى الخميس: من 9:00 صباحًا حتى 4:00 مساءً'
    },
    {
      id: '4',
      title: 'خدمات المعامل والاختبارات',
      description: 'خدمات التحاليل - تأجير الأجهزة - الدعم الفني',
      phone: ['+20 95 237 1230'],
      email: ['lab.services@science.luxor.edu.eg', 'technical@science.luxor.edu.eg'],
      address: 'مجمع المعامل - كلية العلوم - جامعة الأقصر',
      officeHours: 'الأحد إلى الخميس: من 8:00 صباحًا حتى 5:00 مساءً، السبت: من 9:00 صباحًا حتى 2:00 ظهرًا'
    }
  ];

  private staffContacts: StaffContact[] = [
    {
      id: '1',
      name: 'أ.د. أحمد المصري',
      position: 'عميد الكلية',
      department: 'الإدارة العليا',
      email: 'dean@science.luxor.edu.eg',
      phone: '+20 95 237 1200',
      officeLocation: 'مبنى الإدارة - مكتب 101',
      officeHours: 'الأحد والثلاثاء والخميس: من 10:00 صباحًا حتى 12:00 ظهرًا',
      specialization: 'القيادة الأكاديمية والتخطيط الاستراتيجي',
      image: './assets/icon.jpg'
    },
    {
      id: '2',
      name: 'أ.د. فاطمة الزهراء',
      position: 'وكيل الكلية للدراسات العليا والبحوث',
      department: 'إدارة البحث العلمي',
      email: 'research@science.luxor.edu.eg',
      phone: '+20 95 237 1220',
      officeLocation: 'مجمع البحث العلمي - مكتب 201',
      officeHours: 'الإثنين والأربعاء: من 11:00 صباحًا حتى 1:00 ظهرًا',
      specialization: 'إدارة البحوث والدراسات العليا',
      image: './assets/icon.jpg'
    },
    {
      id: '3',
      name: 'د. منى حسن',
      position: 'وكيل الكلية لشئون الطلاب والتعليم',
      department: 'شئون الطلاب',
      email: 'students@science.luxor.edu.eg',
      phone: '+20 95 237 1210',
      officeLocation: 'مبنى شئون الطلاب - مكتب 105',
      officeHours: 'الأحد إلى الخميس: من 9:00 صباحًا حتى 2:00 ظهرًا',
      specialization: 'تنمية الطلاب وخدمات الدعم الأكاديمي',
      image: './assets/icon.jpg'
    },
    {
      id: '4',
      name: 'د. محمد عبد الرحمن',
      position: 'رئيس قسم الجيولوجيا',
      department: 'الجيولوجيا',
      email: 'geology@science.luxor.edu.eg',
      phone: '+20 95 237 1250',
      officeLocation: 'مبنى الجيولوجيا - مكتب 301',
      officeHours: 'الإثنين والأربعاء والخميس: من 10:00 صباحًا حتى 12:00 ظهرًا',
      specialization: 'الجيولوجيا الهيكلية والتكتونيات',
      image: './assets/icon.jpg'
    },
    {
      id: '5',
      name: 'أ.د. إبراهيم السيد',
      position: 'رئيس قسم الرياضيات',
      department: 'الرياضيات',
      email: 'mathematics@science.luxor.edu.eg',
      phone: '+20 95 237 1260',
      officeLocation: 'مبنى الرياضيات - مكتب 205',
      officeHours: 'الأحد والثلاثاء: من 11:00 صباحًا حتى 1:00 ظهرًا',
      specialization: 'الرياضيات التطبيقية والتحليل العددي',
      image: './assets/icon.jpg'
    },
    {
      id: '6',
      name: 'د. أحمد محمود',
      position: 'رئيس قسم الفيزياء',
      department: 'الفيزياء',
      email: 'physics@science.luxor.edu.eg',
      phone: '+20 95 237 1270',
      officeLocation: 'مبنى الفيزياء - مكتب 302',
      officeHours: 'الإثنين والأربعاء: من 2:00 ظهرًا حتى 4:00 مساءً',
      specialization: 'الفيزياء الكمية وعلوم المواد',
      image: './assets/icon.jpg'
    },
    {
      id: '7',
      name: 'أ.د. سارة علي',
      position: 'رئيس قسم الكيمياء',
      department: 'الكيمياء',
      email: 'chemistry@science.luxor.edu.eg',
      phone: '+20 95 237 1280',
      officeLocation: 'مبنى الكيمياء - مكتب 401',
      officeHours: 'الأحد والخميس: من 10:00 صباحًا حتى 12:00 ظهرًا',
      specialization: 'الكيمياء العضوية والعلوم الصيدلانية',
      image: './assets/icon.jpg'
    },
    {
      id: '8',
      name: 'د. نورهان السيد',
      position: 'رئيس قسم النبات والميكروبيولوجي',
      department: 'النبات والميكروبيولوجي',
      email: 'botany@science.luxor.edu.eg',
      phone: '+20 95 237 1290',
      officeLocation: 'مبنى الأحياء - مكتب 203',
      officeHours: 'الثلاثاء والخميس: من 11:00 صباحًا حتى 1:00 ظهرًا',
      specialization: 'التكنولوجيا الحيوية النباتية والإيكولوجيا الميكروبية',
      image: './assets/icon.jpg'
    },
    {
      id: '9',
      name: 'د. ريهام محمد',
      position: 'رئيس قسم علم الحيوان',
      department: 'علم الحيوان',
      email: 'zoology@science.luxor.edu.eg',
      phone: '+20 95 237 1300',
      officeLocation: 'مبنى الأحياء - مكتب 305',
      officeHours: 'الإثنين والأربعاء: من 9:00 صباحًا حتى 11:00 صباحًا',
      specialization: 'سلوك الحيوان وبيولوجيا الحفاظ',
      image: './assets/icon.jpg'
    },
    {
      id: '10',
      name: 'مهندس خالد أحمد',
      position: 'مدير إدارة تكنولوجيا المعلومات',
      department: 'تكنولوجيا المعلومات',
      email: 'it@science.luxor.edu.eg',
      phone: '+20 95 237 1241',
      officeLocation: 'مبنى الـ IT - مكتب 101',
      officeHours: 'الأحد إلى الخميس: من 8:00 صباحًا حتى 4:00 مساءً',
      specialization: 'إدارة الشبكات والأمن السيبراني',
      image: './assets/icon.jpg'
    }
  ];

  getContactInfo(): ContactInfo[] {
    return this.contactInfo;
  }

  getContactById(id: string): ContactInfo | undefined {
    return this.contactInfo.find(c => c.id === id);
  }

  getStaffContacts(): StaffContact[] {
    return this.staffContacts;
  }

  getStaffById(id: string): StaffContact | undefined {
    return this.staffContacts.find(s => s.id === id);
  }

  getStaffByDepartment(department: string): StaffContact[] {
    return this.staffContacts.filter(s => s.department.toLowerCase().includes(department.toLowerCase()));
  }

  searchStaff(query: string): StaffContact[] {
    const q = query.toLowerCase();
    return this.staffContacts.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.position.toLowerCase().includes(q) ||
      s.department.toLowerCase().includes(q) ||
      s.specialization?.toLowerCase().includes(q)
    );
  }
}