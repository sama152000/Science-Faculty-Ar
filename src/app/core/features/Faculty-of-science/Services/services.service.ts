import { Injectable } from '@angular/core';
import { Service } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: Service[] = [
    {
      id: '1',
      name: 'خدمات التحاليل والاختبارات المعملية',
      description: 'خدمات تحليل وفحص شاملة للأغراض البحثية والصناعية',
      icon: 'fas fa-flask',
      category: 'الخدمات البحثية',
      overview: 'توفر معاملنا المتطورة خدمات تحليل واختبارات علمية دقيقة باستخدام أحدث الأجهزة لدعم البحث العلمي، التطبيقات الصناعية، وضبط الجودة في مختلف التخصصات العلمية.',
      features: [
        'التحليل الكيميائي وتوصيف المركبات',
        'الفحوصات الميكروبيولوجية',
        'تحليل العينات البيئية',
        'اختبارات وتوصيف المواد',
        'خدمات ضبط الجودة',
        'دعم التعاون البحثي'
      ],
      requirements: [
        'نموذج تسليم العينة',
        'تحديد نوع الاختبارات المطلوبة بدقة',
        'إيصال سداد الرسوم',
        'بيانات السلامة (في حالة المواد الخطرة)'
      ],
      duration: 'من 3 إلى 7 أيام عمل',
      cost: 'حسب نوع التحليل',
      contactPerson: 'د. أحمد حسن',
      contactEmail: 'lab.services@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1234',
      isActive: true
    },

    {
      id: '2',
      name: 'الاستشارات العلمية المتخصصة',
      description: 'استشارات علمية احترافية للمشروعات البحثية والتطبيقات الصناعية',
      icon: 'fas fa-user-tie',
      category: 'الخدمات الاستشارية',
      overview: 'يقدم أعضاء هيئة التدريس بالكلية استشارات علمية متخصصة لدعم المشروعات البحثية، حل المشكلات التقنية في الصناعة، وتطوير الحلول العلمية في جميع التخصصات.',
      features: [
        'تصميم المشروعات البحثية',
        'تحليل وتفسير البيانات',
        'حل المشكلات التقنية',
        'تطوير الطرق تحليل جديدة',
        'دعم الكتابة العلمية',
        'مساعدة في إعداد طلبات التمويل البحثي'
      ],
      requirements: [
        'وصف مفصل للمشروع أو المشكلة',
        'تعبئة نموذج طلب الاستشارة',
        'تحديد الجدول الزمني',
        'الموافقة على الميزانية'
      ],
      duration: 'حسب الجدول المتفق عليه',
      cost: 'تعرفة بالساعة',
      contactPerson: 'أ.د/ فاطمة الزهراء',
      contactEmail: 'consultation@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1235',
      isActive: true
    },

    {
      id: '3',
      name: 'البرامج التدريبية والتأهيلية',
      description: 'برامج تدريبية متخصصة في المجالات العلمية',
      icon: 'fas fa-graduation-cap',
      category: 'الخدمات التعليمية',
      overview: 'نقدم برامج تدريبية احترافية لتطوير المهارات العلمية للطلاب، الباحثين، والمهنيين، تجمع بين الجانب النظري والتطبيق العملي في المعامل.',
      features: [
        'تدريب على المهارات المعملية المتقدمة',
        'ورش عمل في منهجية البحث العلمي',
        'دورات في الكتابة العلمية',
        'تدريب على تحليل البيانات الإحصائية',
        'تدريب السلامة والالتزام بالمعايير',
        'برامج التعليم المستمر'
      ],
      requirements: [
        'تعبئة استمارة التسجيل',
        'إثبات المؤهل الدراسي',
        'سداد رسوم البرنامج',
        'التزام بالحضور'
      ],
      duration: 'من أسبوع إلى 4 أسابيع',
      cost: 'حسب البرنامج التدريبي',
      contactPerson: 'د. محمد عبد الرحمن',
      contactEmail: 'training@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1236',
      isActive: true
    },

    {
      id: '4',
      name: 'تأجير الأجهزة والمعدات العلمية',
      description: 'خدمة تأجير الأجهزة والمعدات العلمية المتطورة',
      icon: 'fas fa-microscope',
      category: 'خدمات الأجهزة',
      overview: 'نوفر إمكانية الوصول إلى أحدث الأجهزة والمعدات العلمية لأغراض البحث والتعليم والتطبيقات الصناعية بأسعار تنافسية وشروط مرنة.',
      features: [
        'أجهزة تحليل متقدمة',
        'معدات بحثية متخصصة',
        'أجهزة اختبار ميدانية',
        'برامج متخصصة',
        'دعم فني شامل',
        'مدد تأجير مرنة'
      ],
      requirements: [
        'عقد تأجير الأجهزة',
        'تأمين مسترجع',
        'إثبات الكفاءة في التشغيل',
        'تأمين ضد التلف'
      ],
      duration: 'يومي - أسبوعي - شهري',
      cost: 'حسب نوع الجهاز والمدة',
      contactPerson: 'مهندسة/ سارة أحمد',
      contactEmail: 'equipment@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1237',
      isActive: true
    },

    {
      id: '5',
      name: 'الرصد والتقييم البيئي',
      description: 'خدمات متكاملة للرصد والتقييم البيئي',
      icon: 'fas fa-leaf',
      category: 'الخدمات البيئية',
      overview: 'نقدم خدمات رصد وتقييم بيئي شاملة لدعم حماية البيئة، الالتزام بالتشريعات، وتحقيق أهداف التنمية المستدامة من خلال تحليل دقيق لمختلف المؤشرات البيئية.',
      features: [
        'رصد جودة الهواء',
        'تحليل مياه الشرب والصرف',
        'تحليل التربة والرواسب',
        'مسوحات التنوع البيولوجي',
        'تقييم الأثر البيئي',
        'تقارير الالتزام البيئي'
      ],
      requirements: [
        'تصاريح الوصول للموقع',
        'تحديد نطاق الرصد',
        'الاتفاق على بروتوكولات أخذ العينات',
        'متطلبات التقرير النهائي'
      ],
      duration: 'حسب نطاق المشروع',
      cost: 'عرض سعر مخصص',
      contactPerson: 'د. نادية إبراهيم',
      contactEmail: 'environment@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1238',
      isActive: true
    },

    {
      id: '6',
      name: 'التعاون البحثي والشراكات',
      description: 'شراكات بحثية ومشروعات مشتركة',
      icon: 'fas fa-handshake',
      category: 'الخدمات البحثية',
      overview: 'نسهل إقامة شراكات بحثية بين أعضاء هيئة التدريس والطلاب والمؤسسات الخارجية، وندعم المشروعات البحثية المشتركة، نقل المعرفة، وتطوير الابتكار.',
      features: [
        'مشروعات بحثية مشتركة',
        'برامج نقل المعرفة والتقنية',
        'تطوير المنتجات والابتكار',
        'دعم النشر العلمي',
        'تنظيم المؤتمرات والندوات',
        'شراكات دولية'
      ],
      requirements: [
        'مقترح بحثي واضح',
        'اتفاقية شراكة',
        'خطة تخصيص الموارد',
        'جدول زمني ومعالم محددة'
      ],
      duration: 'حسب المشروع',
      cost: 'شروط تفاوضية',
      contactPerson: 'أ.د/ عمر حسن',
      contactEmail: 'research@science.luxor.edu.eg',
      contactPhone: '+20 95 237 1239',
      isActive: true
    }
  ];

  private categories = [
    'جميع الخدمات',
    'الخدمات البحثية',
    'الخدمات الاستشارية',
    'الخدمات التعليمية',
    'خدمات الأجهزة',
    'الخدمات البيئية'
  ];

  getAll(): Service[] {
    return this.services;
  }

  getById(id: string): Service | undefined {
    return this.services.find(s => s.id === id);
  }

  getByCategory(category: string): Service[] {
    if (category === 'جميع الخدمات') {
      return this.services;
    }
    return this.services.filter(s => s.category === category);
  }

  getCategories(): string[] {
    return this.categories;
  }

  getActiveServices(): Service[] {
    return this.services.filter(s => s.isActive);
  }

  searchServices(query: string): Service[] {
    const q = query.toLowerCase();
    return this.services.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }
}