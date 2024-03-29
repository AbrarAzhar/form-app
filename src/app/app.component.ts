import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'form_App';


  form!: FormGroup;

  constructor(private fb: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      client: [''],
      date: [''],
      informant: [''],
      interviewer: [''],
      relationship: [''],
      know_years: [''],
      know_months: [''],
      interact_daily: [''],
      situation_meals: [''],
      situation_leisure: [''],
      situation_self_care: [''],
      situation_academic: [''],
      situation_vocational: [''],
      situation_other: [''],
      situation_other_text: [''],
      problem_aggression: [''],
      problem_aggression_desc: [''],
      problem_self_injury: [''],
      problem_self_injury_desc: [''],
      problem_stereotypy: [''],
      problem_stereotypy_desc: [''],
      problem_destruction: [''],
      problem_destruction_desc: [''],
      problem_other: [''],
      problem_other_desc: [''],
      frequency: [''],
      severity: [''],
      likely_occur_days_times: [''],
      likely_occur_settings_activities: [''],
      likely_occur_persons_present: [''],
      least_likely_occur_days_times: [''],
      least_likely_occur_settings_activities: [''],
      least_likely_occur_persons_present: [''],
      before_behavior: [''],
      after_behavior: [''],
      current_treatments: [''],
      q1: [''],
      q2: [''],
      q3: [''],
      // Define more form controls as needed
    });
  }

  onSUBMIT() {
    console.log(this.form.value)
    // this.http.post(`https://form-56-default-rtdb.firebaseio.com`,this.form.value).subscribe((res:any)=>{
    //   alert("Data is saved")
    //   this.form.reset()

    // }, (err)=>{
    //   alert("Enter Correct data")
    // })
    }
}
