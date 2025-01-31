import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelMetricsPipe } from './pipes/label-metrics.pipe';
import { ValueConverterService } from './services/value-converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private labelMetrics: LabelMetricsPipe,
              private valueConverterService: ValueConverterService
  ){}

  form!: FormGroup;
  calorie = '0'
  imperialMetricSystem = true;

  ngOnInit(): void {

    this.initForm()

    this.changeForm()

  }

  initForm(){
    this.form = this.fb.group({
      age: [null, Validators.required],
      typeWeight: ['lb'],
      weight: [null, Validators.required],
      typeHeight: ['in'],
      height: [null, Validators.required]
    })
  }

  changeForm() {

    this.form.valueChanges.subscribe(values => {

      const {age, typeWeight, weight, typeHeight, height} = values

      this.validateAge(age)

      let weightImperial = this.validateWeight(weight, typeWeight)

      let heingtImperial = this.validateHeingt(height, typeHeight)

      if(this.form.valid){
        this.calorie = ((10 * weightImperial + 6.25 * heingtImperial - 10 * age + 5) * this.valueConverterService.getWeightFactor(weightImperial)).toFixed(2)
      }else{
        this.calorie = '0'
      }

    });

  }

  validateAge(age: number) {

    if(!age) return

    const minAge = 16
    const maxAge = 105

    if(age < minAge){
      this.form.get('age')?.setErrors({ invalidValue: `La edad debe ser minimo de ${minAge} años` })
    }

    if(age > maxAge){
      this.form.get('age')?.setErrors({ invalidValue: `La edad maxima es de ${maxAge} años` })
    }
    
  }

  validateWeight(weight: number, typeWeight: string): number {

    if(!weight) return 0

    const minWeightKg = 40.50
    const maxWeightKg = 300

    const weightLb = typeWeight === 'kg' ? this.valueConverterService.convertKgToLb(weight) : weight

    const minWeight = this.valueConverterService.convertKgToLb(minWeightKg)
    if(weightLb < minWeight){
      this.form.get('weight')?.setErrors(
        { invalidValue: `El peso minimo debe ser de ${typeWeight === 'kg' ? minWeightKg : minWeight.toFixed(2)} ${this.labelMetrics.transform(typeWeight)}`}
      )
    }

    const maxWeight = this.valueConverterService.convertKgToLb(maxWeightKg)
    if(weightLb > maxWeight){
      this.form.get('weight')?.setErrors(
        { invalidValue: `El peso maximo debe ser de ${typeWeight === 'kg' ? maxWeightKg : maxWeight.toFixed(2)} ${this.labelMetrics.transform(typeWeight)}` }
      )
    }

    return weightLb

  }

  validateHeingt(height: number, typeHeight: string): number {

    if(!height) return 0

    const minHeingtCm = 140
    const maxHeingtCm = 225

    const heingtIn = typeHeight === 'cm' ? this.valueConverterService.convertCmToIn(height) : height

    const minHeingt = this.valueConverterService.convertCmToIn(minHeingtCm)
    if(heingtIn < minHeingt){
      this.form.get('height')?.setErrors(
        { invalidValue: `La altura minima debe ser de ${typeHeight === 'cm' ? minHeingtCm : minHeingt.toFixed(2)} ${this.labelMetrics.transform(typeHeight)}` }
      )
    }

    const maxHeingt = this.valueConverterService.convertCmToIn(maxHeingtCm)
    if(heingtIn > maxHeingt){
      this.form.get('height')?.setErrors(
        { invalidValue: `La altura maxima debe ser de ${typeHeight === 'cm' ? maxHeingtCm : maxHeingt.toFixed(2)} ${this.labelMetrics.transform(typeHeight)}` }
      )
    }

    return heingtIn

  }

  verifyInput(event: KeyboardEvent) {
    
    if (
      !/[0-9\.]/.test(event.key) || 
      (event.key === '.' && (event.target as HTMLInputElement).value.includes('.'))
    ) {
      event.preventDefault();
    }
  }

  setImperialMetricSystem(imperial: boolean) {

    const agePrev = this.form.get('age')?.value;
    this.form.reset();
    this.form.get('age')?.setValue(agePrev, { emitEvent: false })

    this.imperialMetricSystem = imperial

    if(imperial){

      this.form.get('typeWeight')?.setValue('lb', { emitEvent: false })
      this.form.get('typeHeight')?.setValue('in', { emitEvent: false })

    }else{

      this.form.get('typeWeight')?.setValue('kg', { emitEvent: false })
      this.form.get('typeHeight')?.setValue('cm', { emitEvent: false })
    }

  }

}
