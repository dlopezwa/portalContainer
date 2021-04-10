import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeAplicationsComponent } from './tree-aplications.component';

describe('TreeAplicationsComponent', () => {
  let component: TreeAplicationsComponent;
  let fixture: ComponentFixture<TreeAplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeAplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeAplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
