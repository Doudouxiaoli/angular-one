import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// 注意 @Component() 装饰器。这表明它下面的类是一个组件。它提供了有关该组件的元数据，包括它的选择器、模板和样式。
@Component({
  // 该 selector 用于标识该组件。该选择器是当 Angular 组件在页面中渲染出 HTML 元素时使用的名字。按照惯例，Angular 组件选择器会以前缀 app- 开头，后跟组件名称。
  selector: 'app-product-alerts',
  // 模板和样式文件名。它们是对 StackBlitz 生成的 HTML 和 CSS 文件的引用
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

}
