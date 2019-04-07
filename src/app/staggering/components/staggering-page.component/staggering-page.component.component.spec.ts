import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StaggeringPageComponent} from './staggering-page.component.component';

describe('StaggeringPage.ComponentComponent', () => {
  let component: StaggeringPageComponent;
  let fixture: ComponentFixture<StaggeringPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggeringPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggeringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
