import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dean-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dean-word.component.html',
  styleUrls: ['./dean-word.component.css']
})
export class DeanWordComponent {
  deanInfo = {
    name: 'أ.د. محمد حسن',
    title: 'عميد كلية العلوم',
    image: './assets/deanp.jpg',
    message: `مرحبًا بكم في كلية العلوم - جامعة الأقصر، منارة المعرفة والابتكار والاكتشاف العلمي في صعيد مصر.
    
    نفخر بإعداد جيل المستقبل من العلماء من خلال التميز في البحث العلمي، والتعليم عالي الجودة، والتفاني في خدمة المجتمع. كليتنا ملتزمة بتطوير المعرفة العلمية وإعداد قادة الجيل القادم في مجالات العلوم والتكنولوجيا، للمساهمة الفعالة في بناء مصر الحديثة وتحقيق رؤية التنمية المستدامة 2030.`
  };
}