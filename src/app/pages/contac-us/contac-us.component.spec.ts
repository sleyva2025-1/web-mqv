import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIf } from '@angular/common'; 
import { ContacUsComponent } from './contac-us.component';

describe('ContacUsComponent', () => {
  let component: ContacUsComponent;
  let fixture: ComponentFixture<ContacUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
