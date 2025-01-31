import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelMetrics'
})
export class LabelMetricsPipe implements PipeTransform {

  private metrics = [
    { abbreviation: 'lb', label: 'Libras' },
    { abbreviation: 'kg', label: 'Kilogramos' },
    { abbreviation: 'in', label: 'Pulgadas' },
    { abbreviation: 'cm', label: 'Centimetros' }
  ]

  transform(value: string): string {
    const metric = this.metrics.find(metric => metric.abbreviation === value)
    return metric ? metric.label : ''
  }

}
