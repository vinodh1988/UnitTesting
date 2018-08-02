import { TestBed, async,inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {FormsModule} from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[DataService],
      imports: [FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Service should be injected', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBeDefined();
  }));

  it('Title should have application', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain('application');
  }));

  it('h1 should have content rendered', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const h1 = fixture.debugElement.nativeElement.querySelector("h1");
    console.log(h1.textContent);
    expect(h1.textContent).toContain("application");
     
  }));


  it('Element must be added to list on button click', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const ele=   fixture.debugElement.nativeElement;
    const buttons = ele.getElementsByTagName("button");
    const textbox = ele.getElementsByTagName("input");
    const list = ele.getElementsByTagName("li");
    let length=list.length;
    app.data="Test Name";
    buttons[0].click();
    fixture.detectChanges();
    expect(list[length].textContent).toEqual("Test Name");
  }));

 

 
});
