import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentUniListeComponent } from './agent-uni-liste.component';

describe('AgentUniListeComponent', () => {
  let component: AgentUniListeComponent;
  let fixture: ComponentFixture<AgentUniListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentUniListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentUniListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
