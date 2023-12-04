import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAgentComponent } from './liste-agent.component';

describe('ListeAgentComponent', () => {
  let component: ListeAgentComponent;
  let fixture: ComponentFixture<ListeAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
